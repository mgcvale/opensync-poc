import type { PageLoad } from "../$types";

export function load({ params }) {
    const { slug } = params;
    return { slug };
}