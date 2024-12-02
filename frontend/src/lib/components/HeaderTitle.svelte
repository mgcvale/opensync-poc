<script lang='ts'>
    let loggedIn: boolean = $props()
</script>

<div>
    <svg xmlns="http://www.w3.org/2000/svg" width="79.2pt" height="79.2pt" viewBox="0 0 79.2 79.2">
        <defs></defs>
        <g id="group0" transform="translate(3.6, 3.6)" fill="none">
            <path id="shape0" fill="currentColor" fill-rule="evenodd" stroke-opacity="0" stroke="#000000" stroke-width="0" stroke-linecap="square" stroke-linejoin="bevel" d="M0 0L0 33.6L14.4 48L33.6 48L38.4 52.8L48 52.8L33.6 38.4L19.2 38.4L9.6 28.8L9.6 9.6L28.8 9.6L38.4 19.2L38.4 33.6L52.8 48L52.8 38.4L48 33.6L48 14.4L33.6 0L0 0" sodipodi:nodetypes="ccccccccccccccccccc"></path>
            <path id="shape1" transform="translate(14.4, 52.8)" fill="currentColor" fill-rule="evenodd" stroke-opacity="0" stroke="#000000" stroke-width="0" stroke-linecap="square" stroke-linejoin="bevel" d="M14.4 0L0 0L19.2 19.2L48 19.2L38.4 9.6L24 9.6L19.2 4.8" sodipodi:nodetypes="ccccccc"></path>
            <path id="shape2" transform="translate(52.8, 14.4)" fill="currentColor" fill-rule="evenodd" stroke-opacity="0" stroke="#000000" stroke-width="0" stroke-linecap="square" stroke-linejoin="bevel" d="M0 0L0 14.4L9.6 24L9.6 43.2L19.2 52.8L19.2 19.2" sodipodi:nodetypes="cccccc"></path>
        </g>
    </svg>
    <h1>opensync</h1>
    {#if loggedIn}
        <span>•</span>
        <h2>Your images</h2>
    {/if}
</div>

<style lang="scss">
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: flex-start;
    }
</style>