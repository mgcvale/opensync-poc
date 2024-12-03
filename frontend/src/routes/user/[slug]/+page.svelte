<script lang="ts">
    import '/src/reset.scss';
    import '/src/style/scrollless.scss';
    import { userStore, type UserData } from '$lib/stores/userStore';
    import LoginMenu from '$lib/components/LoginMenu.svelte';
    import RegisterMenu from '$lib/components/RegisterMenu.svelte';

    let { data } = $props();
    let mode = $state(data.slug);


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
            Account
        </h2>
        <span>/</span>
        <h2>
            {mode}
        </h2>
    </div>
    <a href="/">
        &lt;- Back to Dashboard
    </a>
</header>

<main class="floating-content-container">
    <div class="floating-content center-text">
        <h2>{mode.charAt(0).toUpperCase() + mode.slice(1)}</h2>
        {#if mode == "register"}
        <RegisterMenu bind:mode={mode}></RegisterMenu>
        {:else if mode == "login"}
        <LoginMenu bind:mode={mode}></LoginMenu>
        {:else}
        <h3>What are you doing here?!</h3>
        <a href="/user/login" onclick={() => mode = "register"}>Go to login page</a>
        {/if}
        {#if $userStore.loggedIn}
        <p class="warning" style="font-size: .8em">
            Warning: you are already logged in! Re-logging in will log you out of your current '{$userStore.username}' account.
        </p>
        {/if}
    </div>
</main>

<style lang="scss">
    .floating-content {
        width: clamp(20%, 450px, 80%);
    }
</style>