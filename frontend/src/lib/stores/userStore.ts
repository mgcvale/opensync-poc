import { writable } from "svelte/store";

export interface UserData {
    accessToken: string | null,
    username: string | null
}

export interface LoginData {
    username: string | null,
    password: string | null
}

export const userStore = writable<UserData>({
    accessToken: null,
    username: null
})