<script lang="ts">
    import Modal from "./Modal.svelte";
    import { ImageService } from "$lib/services/imageService";
    import { type ApiResponse } from "$lib/services/requests";
    import { userStore } from "$lib/stores/userStore";
    import ErrorNotification from "./ErrorNotification.svelte";

    let showingModal: boolean = $state(false);
    let files: [Blob] | null = $state(null);
    let infoMsg: string | null = $state(null);
    let errorMsg: string | null = $state(null);
    let infoMsgClass: string | null = $state(null);
    let currentTimeout: number = $state(-1);

    const imageService: ImageService = new ImageService();

    function handleFileSelection(event: Event): void {
        files = event.target?.files;
    }

    $effect(() => {
        console.log(showingModal);
    })

    async function uploadImages(e: Event) {
        e.preventDefault();
        if (files == null) {
            infoMsg = "Select files before uploading!";
            infoMsgClass = "error";
            currentTimeout = setTimeout(() => {
                infoMsg = null;
            }, 5000);
            return;
        }

        let uploadedCount = 0;
        for (let i = 0; i < files.length; i++) {
            infoMsg = `Uploading image ${i+1} of ${files.length}`;
            infoMsgClass = null;
            clearTimeout(currentTimeout);

            const response: ApiResponse<null> = await imageService.uploadImage(files[i], $userStore.accessToken);
            if (!response.success) {
                console.log(response.status);
                errorMsg = `Error uploading image ${i+1}: ${response.error};`
                setTimeout(() => {
                    errorMsg = null;
                }, 6000);
                continue;
            }

            uploadedCount++;
        }

        if (uploadedCount < files.length) {
            infoMsgClass = "warning";
        }
        infoMsg = `Uploaded ${uploadedCount} images of ${files.length}`;
        currentTimeout = setTimeout(() => {
            infoMsg = null;
        }, 6000);
    }

</script>
<ErrorNotification bind:error={errorMsg}></ErrorNotification>
<Modal bind:showingModal closeMessage="Done">
    {#snippet header()}
        <h2>
            Upload new images
        </h2>
    {/snippet}
    <div class="upload-form">
        <input type="file" accept="image/*" multiple onchange={handleFileSelection}>
        <button onclick={uploadImages}>Upload images</button>   
    </div>
    <div class="modal-buttons">
        {#if infoMsg}
        <p class={infoMsgClass ? infoMsgClass : ""}>{infoMsg}</p>
        {/if}
        <button onclick={() => showingModal = false}>Done</button>
    </div>

</Modal>
<button onclick={() => showingModal = true}>Upload images</button>

<style lang="scss">
    @use 'src/style/var.scss';


    h2 {
        margin-bottom: 1.5em;
    }

    .upload-form {
        display: flex;
        align-items: center;
        gap: 1em;

        @media (max-width: 600px) {
            flex-direction: column;
        }

        input[type="file"] {
            &::file-selector-button {
                background-color: var.$content-bg;
            }
        }

        button {
            background-color: lighten(var.$content-bg, 10%);
        }
    }

    .modal-buttons {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 1.5em;
        gap: .5em;

        > button {
            background-color: var.$content-bg;
        }
    }
</style>