<script>
    import { createEventDispatcher } from "svelte";
    export let item = '';

    const dispatch = createEventDispatcher();

    const deleteHandler = () => {
        dispatch('delete-item', {
            itemId: item.id
        })
    };
    
</script>

<div>
    <span>{item.text}</span>
    <button on:click="{deleteHandler}">X</button>
</div>

<style>
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #e0e0e0;
        margin: 5px;
        padding: 5px;
        font-size: 1.1rem;
    }

    span {
        margin-right: 1rem;
    }

    button {
        text-decoration: none;
        background: none;
        border: none;
        cursor: pointer;
        transition: all 0.5s ease;
    }

    button:hover {
        color: red;
    }
</style>