<script lang="ts">
    import ImageUploadForm from "./ImageUploadForm.svelte";
</script>

<div class="content">
    <div class="top">
        <h1>Your images</h1>
        <ImageUploadForm></ImageUploadForm>
    </div>
</div>

<style lang="scss">
    .top {
        display: flex;
        justify-content: space-between;
    }
</style>