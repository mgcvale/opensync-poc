<script lang="ts">
    import Modal from "./Modal.svelte";

    let showingModal: boolean = $state(false);
    let file: Blob | null = $state(null);
    let infoMsg: string | null = $state(null);

    function handleFileSelection(event: Event): void {
        if (event.target == null) {
            files = null;
            return;
        }
        files = event.target.files;
    }

    $effect(() => {
        console.log(showingModal);
    })

    function uploadImages() {

    }

</script>
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
    {#if infoMsg}
    <p class="error">{infoMsg}</p>
    {/if}

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

        input[type="file"] {
            &::file-selector-button {
                background-color: var.$content-bg;
            }
        }

        button {
            background-color: var.$content-bg;
        }
    }
</style>