import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import type {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

import { RootState } from "./store";
import { logout, refresh } from "./slices/auth.slice";

export const baseAuthQuery = fetchBaseQuery({
    baseUrl: `${process.env.AUTH_URL}/`,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

const baseResourceQuery = fetchBaseQuery({
    baseUrl: `${process.env.RESOURCE_URL}/`,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let result = await baseResourceQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
        // try to get a new token
        const refreshResult = await baseAuthQuery("auth/rf", api, extraOptions);
        if (refreshResult.data) {
            // store the new token
            api.dispatch(
                refresh(refreshResult.data as IServerResponse<string>)
            );
            // retry the initial query
            result = await baseResourceQuery(args, api, extraOptions);
        } else {
            api.dispatch(logout());
        }
    }
    return result;
};

export default baseQueryWithReauth;
