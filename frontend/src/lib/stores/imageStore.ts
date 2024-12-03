import { writable } from "svelte/store";

export interface ImageData {
    images: string[],
}

export const imageStore = writable<ImageData>({
    images: []
});