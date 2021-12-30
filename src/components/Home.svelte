<style>
  #home {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: lavender;
    padding: 1em;
  }
</style>

<script lang="ts">
  import Nav from './Nav.svelte';
  import Sea from './Sea.svelte';

  let currency = 'USD';

  // eslint-disable-next-line
  function handleCurrency(e: CustomEvent<any>) {
    // eslint-disable-next-line
    currency = e.detail.currency;
  }
</script>

<div id="home">
  <Nav on:currency={handleCurrency} />∏
  <h1>Home screen</h1>
  <Sea {currency} />
</div>
