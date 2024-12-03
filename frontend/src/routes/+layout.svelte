<script lang="ts">
    import { onMount } from 'svelte';
    import { userStore, type UserData } from "$lib/stores/userStore";
    import { UserService } from "$lib/services/userService";

    let { children } = $props();

    const userService = new UserService();
    onMount(async () => {
        if ($userStore.loggedIn) {
            return;
        }
        try {
            let userData = await userService.getDataFromCookie();
            userStore.set(userData);
            console.log("Loaded user " + $userStore.username);
        } catch (e) {
            console.log("User not loaded from cookie!");
        }
    });
</script>

{@render children()}