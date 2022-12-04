<script>
	import { LeafletMap, TileLayer } from 'svelte-leafletjs';
</script>

<LeafletMap
	options={{
		center: [1.364917, 103.822872],
		zoom: 11
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
