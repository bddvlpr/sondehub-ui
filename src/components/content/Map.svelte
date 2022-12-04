<script lang="ts">
	import { onMount } from 'svelte';
	import { LeafletMap, TileLayer } from 'svelte-leafletjs';

	let leafletMap: LeafletMap;

	onMount(() => {
		navigator.geolocation.getCurrentPosition((success) => {
			console.log(success);
			leafletMap.getMap().setView([success.coords.latitude, success.coords.longitude], 13);
		});
	});
</script>

<LeafletMap
	bind:this={leafletMap}
	options={{
		center: [0, 0],
		zoom: 2
	}}
>
	<TileLayer
		url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
		options={{
			minZoom: 0,
			maxZoom: 20,
			maxNativeZoom: 19,
			attribution: '© OpenStreetMap contributors'
		}}
	/>
</LeafletMap>
