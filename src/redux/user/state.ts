export interface User{
    email: string|null
    firstName: string|null
    lastName: string|null
    password: string|null
    accessToken: string|null
}

export const initialState: User={
    email: null,
    firstName: null,
    lastName: null,
    password: null,
    accessToken: null,
}