<script lang="ts">
	import type { Site } from '$model/types';
	import { sites } from '$stores/sites';
	import SiteMarker from '$components/markers/SiteMarker.svelte';

	let loadedSites: Site[] = [];

	sites.subscribe((value) => {
		loadedSites = value;
	});
</script>

{#each loadedSites as site}
	<SiteMarker {site} />
{/each}
