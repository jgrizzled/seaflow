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

  .container {
    position: absolute;
    top: -400px;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>

<script lang="ts">
  import { onMount } from 'svelte';
  import Bubble from './Bubble.svelte';
  import { fetchNewSales, SaleEvent } from '../utils/cryptopunksAPI';

  let displayedSales: SaleEvent[] = [];
  const refreshInterval = 15; // Ethereum average block time ~15s
  let queuedSales: SaleEvent[] = [];
  async function getNewSales() {
    try {
      const newSales = await fetchNewSales();
      console.log(`Queueing ${newSales.length} sales`);
      queuedSales.push(...newSales);
      queuedSales = queuedSales;
    } catch (e) {
      console.error(e);
    }
    setTimeout(() => {
      getNewSales();
    }, refreshInterval * 1000);
  }
  onMount(() => {
    getNewSales();
  });
  console.log(
    `displayedSales: ${displayedSales.length}, queuedSales: ${queuedSales.length}`
  );

  $: {
    while (displayedSales.length < 20 && queuedSales.length > 0) {
      console.log('Displaying sale');
      displayedSales.push(queuedSales.shift() as SaleEvent);
    }
    displayedSales = displayedSales;
  }
</script>

<div class="container">
  {#each displayedSales as sale, index (sale.name + index)}
    <Bubble {sale} i={index} remove={() => displayedSales.splice(index, 1)} />
  {/each}
</div>

<!-- <script lang="ts">
  import { onMount } from 'svelte';
  import Bubble from './Bubble.svelte';
  import { fetchNewSales, NFTsaleData } from '../utils/fetchNewSales';

  // export let currency: string;
  let sales: NFTsaleData[] = [];

  // const refreshInterval = 10;
  async function getNewSales() {
    console.log('getnew sales');
    try {
      const newSales = await fetchNewSales();
      console.log(newSales);
      if (!newSales) return sales;
      if (newSales.length > 0) sales = [...sales, ...newSales];
      // setTimeout(() => {
      //   getNewSales();
      // }, refreshInterval * 1000);
    } catch (e) {
      console.error(e);
    }
  }
  onMount(() => {
    getNewSales();
  });

  let counter = 0;
  // $: {
  const intervalId = setInterval(() => {
    counter += 1;
    console.log('interval', counter, sales.length);
    if (counter > sales.length) {
      clearInterval(intervalId);
    }
  }, 2000);
  // }
</script>

<section>
  <span /> -->
<!-- {#each sales as sale, i}
    {console.log(i, counter)}
    {#if counter === i}
      <Bubble {sale} />
    {/if}
  {/each}
</section> -->
