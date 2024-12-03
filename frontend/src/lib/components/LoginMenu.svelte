<script lang="ts">
    import '/src/style/forms.scss';
    import { userStore } from '$lib/stores/userStore';
    import { UserService } from '$lib/services/userService';
    import { goto } from '$app/navigation';

    let { mode = $bindable() } = $props();
    let username: string = $state("");
    let password: string = $state("");

    const userService: UserService = new UserService();

    let onclick = async (e: Event) => {
        e.preventDefault();
        try {
            let userData = await userService.login({username: username, password: password});
            if (userData == null) {
                alert("Error logging in: userData is null");
                userStore.set({username: "", accessToken: "", loggedIn:false})
                throw new Error("userData is null!");
            }
            userService.loadTokenToCookie(userData.accessToken);
            userStore.set(userData);
            goto('/');
        } catch (e) {
            alert("Exception occoured! check your credentials: " + e);
            userStore.set({username: "", accessToken: "", loggedIn:false})
        }
    }
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
    <button {onclick}>Log in</button>
</form>
<a href="/user/register" onclick={() => mode = "register"}>Register instead</a>