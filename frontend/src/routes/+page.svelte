<script lang="ts">
    import AccountMenu from "$lib/components/AccountMenu.svelte";
    import ImageGallery from "$lib/components/ImageGallery.svelte";
    import ImageUploadForm from "$lib/components/ImageUploadForm.svelte";
    import '/src/reset.scss';
    import '/src/style/scrollless.scss';
</script>

<header>
    <div class="flex">
        <a href="/">
            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.31818 2.31818V23.9545L11.5909 33.2273H23.9545L27.0455 36.3182H33.2273L23.9545 27.0455H14.6818L8.5 20.8636V8.5H20.8636L27.0455 14.6818V23.9545L36.3182 33.2273V27.0455L33.2273 23.9545V11.5909L23.9545 2.31818H2.31818Z" fill="#FFEEEE"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8636 36.3182H11.5909L23.9545 48.6818H42.5L36.3182 42.5H27.0454L23.9545 39.4091" fill="#FFEEEE"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M36.3182 11.5909V20.8636L42.5 27.0455V39.4091L48.6818 45.5909V23.9546" fill="#FFEEEE"/>
            </svg>
            <h1>
                opensync
            </h1>
        </a>
        <span>/</span>
        <h2>
            Dashboard
        </h2>
    </div>
    <AccountMenu></AccountMenu>
</header>

<main>
    <ImageGallery>
    </ImageGallery>
</main>
