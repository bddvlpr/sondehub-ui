<script lang="ts">
	import { loadSites } from '$stores/sites';
	import { onMount } from 'svelte';
	import { LeafletMap, TileLayer } from 'svelte-leafletjs';
	import StationsLayer from './layers/SitesLayer.svelte';

	let leafletMap: LeafletMap;

	onMount(() => {
		navigator.geolocation.getCurrentPosition((success) => {
			leafletMap.getMap().setView([success.coords.latitude, success.coords.longitude], 6);
		});
	});

	onMount(async () => loadSites());
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
			attribution:
				'© OpenStreetMap contributors | Made with ❤️ by <a href="https://github.com/bddvlpr">bddvlpr</a>'
		}}
	/>
	<StationsLayer />
</LeafletMap>
