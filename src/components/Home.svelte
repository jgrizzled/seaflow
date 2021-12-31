<style>
  #home {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1em;
  }
</style>

<script lang="ts">
  import Nav from './Nav.svelte';
  import Sea from './Sea.svelte';

  let currency = 'USD';
  function handleCurrency(e: CustomEvent<Record<string, string>>) {
    console.log('hello');
    currency = e.detail.currency;
  }
</script>

<div id="home">
  <Nav on:currencyChange={handleCurrency} {currency} />
  <Sea />
</div>
