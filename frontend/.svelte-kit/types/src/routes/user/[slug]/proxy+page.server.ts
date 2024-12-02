// @ts-nocheck
import type { PageLoad } from "../$types";

export const load = ({ params }: Parameters<PageLoad>[0]) => {
    const { slug } = params;
    return { slug };
}