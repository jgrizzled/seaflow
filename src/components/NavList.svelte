<style>
  div {
    position: inherit;
    margin-top: 4em;
    text-align: center;
    width: 100%;
    left: 0;
    padding: 0;
    list-style: none;
  }

  fieldset {
    border: none;
  }

  legend {
    color: var(--primary-pink);
    font-size: 2em;
    margin-bottom: 0.5em;
  }

  input {
    border: none;
    padding: 0.5em;
    margin: 0.8em;
    color: var(--primary-pink);
    background-color: transparent;
    width: 60%;
    font-size: 1.5em;
    border-bottom: 3px solid var(--primary-pink);
    border-top: 1px solid var(--primary-pink);
    border-left: 1px solid var(--primary-pink);
    border-right: 1px solid var(--primary-pink);
  }

  .active {
    box-shadow: 0 0 11px 4px var(--green);
  }
</style>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let currency: string;
  console.log(currency);
  const dispatch = createEventDispatcher();
  function handleCurrency(currency: string) {
    console.log('second hello');
    dispatch('currencyChange', {
      currency
    });
    setTimeout(() => {
      dispatch('toggle', {
        isOpen: false
      });
    }, 1);
  }
</script>

<div>
  <fieldset>
    <legend>Currency</legend>
    <input
      type="button"
      on:click={() => handleCurrency('USD')}
      class:active={currency === 'USD'}
      value="USD"
    />
    <input
      type="button"
      on:click={() => handleCurrency('ETH')}
      class:active={currency === 'ETH'}
      value="ETH"
    />
  </fieldset>
</div>
