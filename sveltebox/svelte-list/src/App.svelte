<script>
	import Header from './components/Header.svelte';
	import Items from './components/Items.svelte';
	let appName = 'Standard List App';
	let items = [
		{id: '1', text: 'Apples', date: 'Jan 1, 1901'},
		{id: '2', text: 'Oranges', date: 'Dec 31, 1901'},
		{id: '3', text: 'Mangoes', date: 'June 3, 1888'}
	];
</script>

<main class="container">
	<Header name={appName} />
	<Items {items}/>
</main>
