import { writable } from 'svelte/store';

export const displayUSD = writable(false);

export const ETH_USD = writable<undefined | number>();
