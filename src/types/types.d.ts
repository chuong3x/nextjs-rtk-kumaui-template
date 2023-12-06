interface IUser {
    _id: string;
    fullName: string;
    //...
}

interface IServerResponse<T> {
    statusCode: number;
    message: string;
    data?: T;
}

interface Pokemon {
    name: string;
    age: string;
    type: string;
    // ...
}

declare class ServerResponse<T> implements IServerResponse {
    statusCode: number;
    message: string;
    data?: T;
}

declare class User implements IUser {
    _id: string;
    fullName: string;
}
