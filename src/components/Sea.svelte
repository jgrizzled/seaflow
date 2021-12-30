<style>
  section {
    position: absolute;
    top: -300px;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>

<script lang="ts">
  import { onMount } from 'svelte';
  import Bubble from './Bubble.svelte';
  import { fetchNewSales, NFTsaleData } from '../utils/fetchNewSales';

  // export let currency: string;
  let sales: NFTsaleData[] = [];

  const refreshInterval = 1;
  async function getNewSales() {
    const newSales = await fetchNewSales();
    if (newSales.length > 0) sales = [...newSales, ...sales];
    setTimeout(() => {
      getNewSales();
    }, refreshInterval * 1000);
  }
  onMount(() => {
    getNewSales();
  });
</script>

<section>
  {#each sales as sale}
    <Bubble {sale} />
  {/each}
</section>
