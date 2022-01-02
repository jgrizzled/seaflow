<style>
  /* span {
    content: '';
    position: relative;
    display: inline-block;
    margin-top: 72vh;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 50%;
    height: 67vw;
    width: 69vw;
    background: rgb(255, 173, 255);
    background: linear-gradient(
      0deg,
      rgba(255, 173, 255, 1) 0%,
      rgba(255, 150, 0, 1) 69%
    );
  } */

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

  const refreshInterval = 15; // Ethereum average block time ~15s
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
  <!-- <span /> -->
  {#each sales as sale}
    <Bubble {sale} />
  {/each}
</section>
