<script lang="ts">
    import { UserService } from '$lib/services/userService';
    import { userStore } from '$lib/stores/userStore';
    import { goto } from '$app/navigation';
    import '/src/style/forms.scss';

    let username: string = $state("");
    let password: string = $state("");
    let confirmPassword: string = $state("");
    let { mode = $bindable() } = $props();

    let userService: UserService = new UserService();

    async function onclick() {
        console.log("onaction");
        try {
            let userData = await userService.createUser({username: username, password: password});
            if (userData == null) {
                alert("Error logging in: userData is null");
                return;
            }
            userService.loadTokenToCookie(userData.accessToken);
            userStore.set(userData);
            goto('/');
        } catch (ex) {
            alert("Error occoured! " + ex);
            userStore.set({username: "", accessToken: "", loggedIn:false});
        }
    };
</script>

<form>
    <div>
        <label for="username">Username</label>
        <input type="text" id="username" bind:value={username}>
    </div>
    <div>
        <label for="password">Password</label>
        <input type="password" id="password" bind:value={password}>
    </div>
    <div>
        <label for="confirmPassword">Confirm password</label>
        <input type="password" id="confirm-password" bind:value={confirmPassword}>
    </div>
    <button {onclick}>Create user</button>
</form>
<a href="/user/login" onclick={() => mode = "login"}>Login instead</a>