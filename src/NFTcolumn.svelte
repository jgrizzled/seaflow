<style></style>

<script lang="ts">
  import { onMount } from 'svelte';
  import NFTsale from './NFTsale.svelte';
  import { fetchNewSales, NFTsaleData } from './utils/fetchNewSales';
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
    <NFTsale {sale} />
  {/each}
</section>
