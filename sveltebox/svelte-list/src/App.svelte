<script>
	import Header from './components/Header.svelte';
	import Items from './components/Items.svelte';
	let appName = 'Standard List App';
	let items = [
		{id: '1', text: 'Apples', date: 'Jan 1, 1901'},
		{id: '2', text: 'Oranges', date: 'Dec 31, 1901'},
		{id: '3', text: 'Mangoes', date: 'June 3, 1888'}
	];

	$: numOfItems = items.length;
	
	const deleteItem = (e) => {
		const itemId = e.detail.itemId;
		items = items.filter(item => item.id !== itemId);
	};

</script>

<main class="container">
	<Header name={appName} />
	<div>no. of list items: {numOfItems}</div>
	<Items {items} on:delete-item={deleteItem}/>
</main>
