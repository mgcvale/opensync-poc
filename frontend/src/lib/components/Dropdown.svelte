<script lang="ts">
    import { onMount } from "svelte";

    let { open, itemsSnippet, openerSnippet, class: customClass } = $props();

    let dropdownElement: HTMLElement;

    function handleClickOutside(event: MouseEvent) {
        if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
            open = false;
        }
    }

    onMount(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    });

</script>

<button 
    class="dropdown {customClass}" 
    onclick={(e) => open = !open}
    bind:this={dropdownElement}>
    {@render openerSnippet()}
    {#if open}
    <div class="dropdown-content">
        {@render itemsSnippet("dropdown-items")}
    </div>
    {/if}
</button>