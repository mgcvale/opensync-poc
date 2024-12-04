<script lang="ts">
    let { error = $bindable() } = $props();
</script>

{#if error}
    <div class="error-notification">
        {error}
    </div>
{/if}

<style lang="scss">
    @use '/src/style/var.scss';

    .error-notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: adjust-color($color: var.$content-bg, $red: 6%);
        padding: .8em 1em;
        border-radius: 6px;
        border: rba2px solid;
        z-index: 1000;
        animation: slideIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        color: red;
    }

    @keyframes slideIn {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
    }
</style>
