<style>
  div {
    padding: 0;
    margin: 0;
    display: inline-block;
    text-align: center;
  }

  span {
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0) 0%,
      rgba(129, 230, 203, 1) 100%
    );
    content: '';
    position: absolute;
    width: 95px;
    height: 95px;
    z-index: 1;
  }
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
  import { quartInOut } from 'svelte/easing';
  import type { SaleEvent } from '../utils/cryptopunksAPI';
  export let sale: SaleEvent;
  const maxWidth = 250;
  const minWidth = 50;
  //const USDvalue = sale.paymentAmount * sale.paymentToken.USDprice;
  //const ETHvalue = sale.paymentAmount * sale.paymentToken.ETHprice;
  const valueCap = 7;
  //const scalar = Math.min(Math.log10(USDvalue) / valueCap, 1);
  //const size = Math.max(scalar * maxWidth, minWidth);
</script>

<div
  transition:fly={{
    delay: 100,
    duration: 40000,
    opacity: 1,
    y: 1500,
    easing: quartInOut
  }}
>
  <span id="glare" />
  <span />
  <!---
  <img src={sale.imageURL} alt={sale.name} width="{size}px" height="{size}px" />
  <p>${USDvalue.toFixed(2)}</p>
  -->
</div>
