<script lang="ts">
    import { onMount } from "svelte";
    import { userStore, type UserData } from "$lib/stores/userStore";
    import { UserService } from "$lib/userService";

    const userService = new UserService();

    onMount(async () => {
        try {
            let userData = await userService.getDataFromCookie();
            userStore.set(userData);
        } catch (e) {
            console.log("User not loaded from cookie!");
        }
    });

    let uname: string = $state("");
    let password: string = $state("");
    let error: string = $state("");

    async function createUser() {
        try {
            let userData = await userService.createUser({username: uname, password: password});
            if (userData == null) {
                alert("Error logging in: userData is null");
                return;
            }
            userService.loadTokenToCookie(userData.accessToken);
            userStore.set(userData);
        } catch (e) {
            alert("Error occoured!");
            userStore.set({username: "", accessToken: "", loggedIn:false});
        }
    }

    async function loginUser() {
        try {
            let userData = await userService.login({username: uname, password: password});
            if (userData == null) {
                alert("Error logging in: userData is null");
                userStore.set({username: "", accessToken: "", loggedIn:false})
                return;
            }
            userService.loadTokenToCookie(userData.accessToken);
            userStore.set(userData);
        } catch (e) {
            alert("Exception occoured! check your credentials");
            userStore.set({username: "", accessToken: "", loggedIn:false})
        }
    }
</script>

<input type="text" bind:value={uname}>
<input type="password" bind:value={password}>
<button onclick={(e) => {createUser()}}>Create user</button>
<button onclick={(e) => {loginUser()}}>Login user</button>
<p>{error}</p>
{#if $userStore.loggedIn}
    <p>Current user: {`Username: ${$userStore.username}, token: ${$userStore.accessToken}`}</p>
{/if}