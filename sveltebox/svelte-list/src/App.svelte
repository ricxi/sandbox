<script>
	import { onMount } from 'svelte';
	import Header from './components/Header.svelte';
	import Items from './components/Items.svelte';
	let appName = 'Standard List App';
	let items = [];
	$: numOfItems = items.length;

	onMount(async () => {
		items = await getItems();
	});

	// get all the list items from the server
	const getItems = async () => {
		const res = await fetch("http://localhost:3333/v1/items");
		const data = await res.json();
		return data;
	}

	
	const deleteItem = (e) => {
		const itemId = e.detail.itemId;
		// items = items.filter(item => item.id !== itemId);
	};

</script>

<main class="container">
	<Header name={appName} />
	<div>no. of list items: {numOfItems}</div>
	<Items {items} on:delete-item={deleteItem}/>
</main>
