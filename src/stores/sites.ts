import { env } from '$env/dynamic/public';
import type { Site } from '$model/types';
import { writable } from 'svelte/store';

export const sites = writable<Site[]>([]);

export const fetchSites = async (): Promise<Site[]> => {
	const response = await fetch(`${env.PUBLIC_API_PATH}/sites`);
	const sites = await response.json();
	return Object.values(sites) as Site[];
};

export const loadSites = async () => {
	sites.set(await fetchSites());
};
