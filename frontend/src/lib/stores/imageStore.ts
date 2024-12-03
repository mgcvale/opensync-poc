import { writable } from "svelte/store";

export interface ImageData {
    images: string[],
}

export const userStore = writable<ImageData>({
    images: []
});