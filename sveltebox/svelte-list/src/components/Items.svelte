<script>
    import Item from './Item.svelte';

    export let items = [];
</script>

<div>
    {#each items as item (item.id)}
        <Item {item} on:delete-item/>
    {/each}
</div>

<style>
    div {
        margin: 5px;
    }
</style>