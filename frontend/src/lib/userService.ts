import { userStore, type LoginData, type UserData } from './stores/userStore';
import { CONFIG } from '../config';
import { CookieService } from './cookieService';

function isValidLoginResponse(responseData: unknown): responseData is { accessToken: string } {
    return typeof responseData === 'object' && responseData !== null && 'accessToken' in responseData;
}

function isValidTokenResponse(responseData: unknown): responseData is {accessToken: string, username: string} {
    return typeof responseData === 'object' && responseData !== null && 'accessToken' in responseData && 'username' in responseData;
}

export class UserService {
    async createUser(data: LoginData): Promise<UserData> {
        try {
            const response = await fetch(CONFIG.getApiUrl("user/create"), {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            console.log("Response status:", response.status);
            console.log("Response headers:", response.headers);


            if (!response.ok) {
                throw new Error("Response was not ok");
            }

            const responseData: unknown = await response.json() as {accessToken: string};
            if (!isValidLoginResponse(responseData)) {
                throw Error("Invalid response from server");
            }

            return {
                username: data.username,
                accessToken: responseData.accessToken,
                loggedIn: true
            }
        } catch (error) {
            console.error("Error creating user: ", error);
            throw error;
        }
    }

    async login(data: LoginData): Promise<UserData | null> {
        try {
            const response = await fetch(CONFIG.getApiUrl("user/get_token"), {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("Response was not ok");
            }

            const responseData: unknown = await response.json() as {accessToken: string};
            if (!isValidLoginResponse(responseData)) {
                throw Error("Invalid response from server");
            }

            return {
                username: data.username,
                accessToken: responseData.accessToken,
                loggedIn: true
            }
        } catch (error) {
            console.error("Error logging in: ", error);
            throw error;
        }
    }

    async deleteAccount(token: string): Promise<void> {
        try {
            const response = await fetch(CONFIG.getApiUrl("user/delete"), {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error("Response was not ok");
            }
            // no need to parse response here
        } catch (error) {
            console.error("Error deleting user: ", error);
            throw error;
        } 
    }

    loadTokenToCookie(token: string): void {
        CookieService.setCookie("accessToken", token, 30);
    }

    loadTokenFromCookie(): string | null {
        return CookieService.getCookie("accessToken");
    }

    async getDataFromCookie(): Promise<UserData> {
        const cookie: string | null = this.loadTokenFromCookie();
        if (cookie == null) {
            throw new Error("Token cookie not set");
        }

        try {
            const response = await fetch(CONFIG.getApiUrl("user/get"), {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${cookie}`
                }
            });

            const data = await response.json() as {username: string, accessToken: string}
            if (!isValidTokenResponse(data)) {
                throw new Error("Invalid response from server");
            }

            return {
                accessToken: data.accessToken,
                username: data.username,
                loggedIn: true
            }
        } catch (exception) {
            console.error("Error logging in from cookie: ", exception);
            throw exception;
        }
    }
}