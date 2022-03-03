<style>
  div {
    padding: 0;
    margin: 0;
    display: block;
    text-align: center;
    position: absolute;
    top: 0;
  }

  /* span {
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0) 0%,
      rgba(129, 230, 203, 1) 100%
    );
    content: '';
    position: absolute;
    opacity: 0.3;
    z-index: 1;
  } */
  #glare {
    width: 16px;
    height: 14px;
    background: #fff;
    opacity: 0.9;
    border-radius: 50%;
    position: absolute;
    top: 21px;
    left: 20px;
    box-shadow: 0 0 4px 2px #fff;
    z-index: 2;
    content: '';
  }

  img {
    border: 1px solid var(--green);
    border-radius: 50%;
    opacity: 0.9;
  }
  p {
    color: var(--primary-dark);
    margin: 10px 0 0 0;
    padding: 0;
  }
</style>

<script lang="ts">
  import { fly } from 'svelte/transition';
  import { quartIn } from 'svelte/easing';
  import type { SaleEvent } from '../utils/cryptopunksAPI';
  import { ETH_USD, displayUSD } from '../stores';

  export let sale: SaleEvent;
  export let i: number;
  export let remove: () => void;

  const maxWidth = 250;
  const minWidth = 50;
  const valueCap = 7;
  const scalar = Math.min(Math.log10(sale.ether) / valueCap, 1);
  const size = Math.floor(Math.max(scalar * maxWidth, minWidth));
  const rand = Math.floor(Math.max(Math.random() * 2000, 1000));
  let displayValue: string;
  $: if ($displayUSD && typeof $ETH_USD == 'number') {
    displayValue =
      '$' +
      (sale.ether * $ETH_USD).toLocaleString(undefined, { maximumFractionDigits: 2 });
  } else {
    displayValue =
      'Ξ' + sale.ether.toLocaleString(undefined, { maximumFractionDigits: 5 });
  }
</script>

<div
  in:fly={{
    delay: rand * i,
    duration: 40000,
    opacity: 1,
    y: 1500,
    // x: Math.floor(rand / 3),
    easing: quartIn
  }}
  on:introend={remove}
>
  <img src={sale.image_url} alt={sale.name} width="{size}px" height="{size}px" />
  <p>{displayValue}</p>
</div>
