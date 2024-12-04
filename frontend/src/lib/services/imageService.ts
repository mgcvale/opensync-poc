import { CONFIG } from '../../config';
import { imageStore } from '../stores/imageStore';
import { type ApiResponse, createErrorResponse, createResponse, handleFetchException } from './requests';

export class ImageService {
    private isValidUploadResponse(responseData: unknown): responseData is {filename: string} {
        return typeof(responseData) === "object" && responseData !== null && "filename" in responseData;
    }

    async uploadImage(file: Blob, token: string): Promise<ApiResponse<null>> {
        let status = 0;

        let formData = new FormData();
        formData.append('image', file);
        try {
            let response = await fetch(CONFIG.getApiUrl("image/upload"), {
                method: "POST",
                body: formData,
                headers: {
                    "Authorization": `Bearer ${token}` 
                }
            });
            let status = response.status;

            if (!response.ok) {
                return createErrorResponse(status, await response.json().catch(() => null));
            }

            const data = await response.json();
            if (!this.isValidUploadResponse(data)) {
                return createErrorResponse(502, "Invalid response from server");
            }

            imageStore.update((current) => {
                return {
                    ...current,
                    images: [...current.images, data.filename]
                }
            });

            return createResponse(status, null);
        } catch (e) {
            return handleFetchException(status, e);
        }
    }

    async deleteImage(imageName: string, token: string): Promise<ApiResponse<null>> {
        let status = 0;

        try {
            const response = await fetch(CONFIG.getApiUrl(`image/delete/${imageName}`), {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            status = response.status;

            if (!response.ok) {
                return createErrorResponse(status, await response.json().then(json => json.get('error')).catch(() => null));
            }

            imageStore.update((current) => {
                return {
                    ...current,
                    images: current.images.filter((image) => image !== imageName)
                }
            });
            return createResponse(status, null);
        } catch (e) {
            return handleFetchException(e, status);
        }
    }
}