<script>
	import { onMount } from 'svelte';
	import Header from './components/Header.svelte';
	import Items from './components/Items.svelte';
	import NewItem from './components/NewItem.svelte';

	let appName = 'Standard List App';
	let items = [];
	

	// get all list items from server before the application mounts
	onMount(async () => {
		items = await getItems();
	});

	// gets all list items from the server
	const getItems = async () => {
		const res = await fetch("http://localhost:3333/v1/items");
		const data = await res.json();
		return data;
	}
	
	// delete list item based on id and update the list afterwards
	const deleteItem = async (e) => {
		const itemId = e.detail.itemId;
		
		const res = await fetch(`http://localhost:3333/v1/items/${itemId}`, {
			method: 'DELETE'
		});

		
		if (res.statusText === 'OK') {
			items = await getItems();
			// items = items.filter(item => item.id !== itemId);
		}
	};

	const addItem = (e) => {
		const itemText = e.detail.itemText
		console.log(itemText)
	}

</script>

<main class="container">
	<Header name={appName} />
	<NewItem on:add-item={addItem}/>
	<Items {items} on:delete-item={deleteItem}/>
</main>
