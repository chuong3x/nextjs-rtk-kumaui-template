import { createApi } from "@reduxjs/toolkit/query/react";

import baseQueryWithReauth from "../rtk.client";

const pokemonApi = createApi({
    reducerPath: "pokemonApi",
    tagTypes: ["Pokemon"],
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        getPokemon: builder.query<ServerResponse<Pokemon>, string>({
            query: (id) => `pokemons/${id}`,
        }),
        createPokemon: builder.mutation<ServerResponse<string>, any>({
            query: (payload) => ({
                url: `pokemon`,
                method: "POST",
                body: payload,
            }),
        }),
        //
    }),
});

export const { useGetPokemonQuery, useCreatePokemonMutation } = pokemonApi;
