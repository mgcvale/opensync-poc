<script lang="ts">
    import { userStore } from "$lib/stores/userStore";
    import { imageStore } from "$lib/stores/imageStore";
    import { CONFIG } from "../../config";
    import ImageUploadForm from "./ImageUploadForm.svelte";
    import { onMount } from "svelte";
    import { ImageService } from "$lib/services/imageService";
    import { type ApiResponse } from "$lib/services/requests";
    import ErrorNotification from "$lib/components/ErrorNotification.svelte";
    import type { Unsubscriber } from "svelte/store";

    let unsubscribe: Unsubscriber;
    let errorMessage: string | null = $state(null);
    const imageService: ImageService = new ImageService();
    unsubscribe = userStore.subscribe(async ($userStore) => {
        if (!$userStore.accessToken) {
            return; // Skip if no access token is available
        }

        console.log($imageStore.images); // Log current images

        try {
            const response = await fetch(CONFIG.getApiUrl('image/all'), {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${$userStore.accessToken}`
                }
            });

            if (!response.ok) {
                errorMessage = "Error gathering images from server: " + response.status;
                return;
            }

            const data = await response.json();

            imageStore.set({
                images: data.get('images')
            });
        } catch (error) {
            errorMessage = "Error gathering images from server";
        }
    });



    function authHeader(node: HTMLImageElement) {
        
        const fetchWithAuth = async () => {
            try {
                const response = await fetch(node.src, {
                    headers: {
                        'Authorization': `Bearer ${$userStore.accessToken}`
                    }
                });
                const blob = await response.blob();
                node.src = URL.createObjectURL(blob);
            } catch (error) {
                errorMessage = 'Image fetch failed' + error;
            }
        };

        fetchWithAuth();
        
        return { destroy: () => {} };
    }

    function downloadWithAuth(node: HTMLAnchorElement) {

        const handleDownload = async (e: MouseEvent) => {
            e.preventDefault();
            try {
                const response = await fetch(node.href, {
                    headers: {
                        'Authorization': `Bearer ${$userStore.accessToken}`
                    }
                });
                const blob = await response.blob();
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = node.getAttribute('download') || 'image';
                link.click();
            } catch (error) {
                console.error('Download failed', error);
            }
        };

        node.addEventListener('click', handleDownload);
        
        return {
            destroy: () => node.removeEventListener('click', handleDownload)
        };
    }

    async function deleteImage(image: string) {
        const response: ApiResponse<null> = await imageService.deleteImage(image, $userStore.accessToken);
        if (!response.success) {

        }
    }

</script>

<ErrorNotification bind:error={errorMessage}>

</ErrorNotification>
<div class="content">
    {#if ! $userStore.loggedIn}
        <div class="no-user">
            <h2>You are not logged in!</h2>
            <p>Log in <a href="/user/login">Here</a> to see your images</p>
        </div>
    {:else}
    <div class="top">
        <h1>Your images</h1>
        <ImageUploadForm></ImageUploadForm>
    </div>
    <div class="gallery">
        {#each $imageStore.images as image, i}
        <div class="image-card">
            <p>{i+1}</p>
            <a href={`${CONFIG.getApiUrl("image/")}${image}`} target="_blank" download="{image}" use:downloadWithAuth>
                <img
                    src={`${CONFIG.getApiUrl("image/preview/")}${image}`}
                    alt={image}
                    use:authHeader
                >
            </a>
            <button onclick={(() => deleteImage(image))}>Delete image</button>
        </div>
        {/each}
    </div>
    {/if}
</div>

<style lang="scss">
    .top {
        display: flex;
        justify-content: space-between;
    }

    .gallery {
        overflow: scroll;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        .image-card {
            overflow:hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
            padding: 24px;
            width: max(25%, 330px);

            font-size: 1em;

            a {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            img {
                width: 100%;
                height: 20vh;
                object-fit: cover;
                border-radius: 8px;
                transition: 250ms;

                &:hover {
                    transform: scale(1.04);
                }
            }

            button {
                transition: 250ms;
                &:hover {
                    transform: scale(1.06);
                }
            }

            p {
                font-weight: 500;
                margin: 0;
            }
        }
    }

    .no-user {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2em;
        align-items: center;

        > * {
            flex-grow: 0;
            margin: 0 auto;
        }
    }
</style>