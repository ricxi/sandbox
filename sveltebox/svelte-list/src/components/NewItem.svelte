<script>
    import { createEventDispatcher } from 'svelte';
    
    const dispatch = createEventDispatcher();

    let itemText = "";

    const submitHandler = () => {
        dispatch('add-item', {
            itemText: itemText
        });
    };
</script>

<form on:submit|preventDefault={submitHandler}>
    <div>
        <input class="form-ctl-text" type="text" bind:value={itemText} />
    </div>
    <div>
        <input id="add" type="submit" value="+" />
    </div>
</form>

<style>
    form {
        margin: 10px 5px;
        font-size: 1.1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .form-ctl-text {
        height: 30px;
        padding: 5px;
    }

    #add {
        width: 30px;
        height: 30px;
        border: none;
        border-radius: 5px;
        outline: none;
        background: #b71540;
        color: white;
        cursor: pointer;
        font-size: 1.5rem;
        transition: all 0.5s ease;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.15);
    }

    #add:hover {
        background: #7c0726;
    }

    div {
        margin-top: 5px;
    }
</style>
