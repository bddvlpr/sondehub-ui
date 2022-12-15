<script lang="ts">
	import type { Site } from '$model/types';
	import { Icon, Marker, Popup } from 'svelte-leafletjs';
	export let site: Site;
</script>

<Marker latLng={[site.position[1], site.position[0]]}>
	<Icon
		options={{
			iconUrl: '/icons/antenna.svg',
			iconSize: [48, 48],
			iconAnchor: [24, 24],
			popupAnchor: [0, -24]
		}}
	/>
	<Popup>
		{site.station_name}
		{site.position}
	</Popup>
</Marker>
