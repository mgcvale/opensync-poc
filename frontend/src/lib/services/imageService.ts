import { CONFIG } from '../../config';
import { imageStore } from '../stores/imageStore';

export class ImageService {
    static async uploadImage(file: Blob): Promise<void> {
        let response = await fetch(CONFIG.getApiUrl("/images/upload"), {
            method: "POST",
            body: JSON.stringify({ image: file }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
        }
    }
}