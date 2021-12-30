<style>
  ul {
    position: inherit;
    margin-top: 4em;
    text-align: center;
    width: 100%;
    left: 0;
    padding: 0;
    list-style: none;
  }

  li {
    margin-top: 1em;
    font-size: 1.5em;
    border-bottom: 3px solid var(--primary-pink);
    border-top: 1px solid var(--primary-pink);
    box-shadow: 0 0 11px 4px var(--green);
  }

  button {
    border: none;
    padding: 0.5em;
    margin: 0;
    color: var(--primary-pink);
    background-color: transparent;
    width: 100%;
  }

  button:active {
    background-color: transparent;
  }
</style>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  function handleCurrency(currency: string) {
    dispatch('currency', {
      currency
    });
    dispatch('toggle', {
      isOpen: false
    });
  }
</script>

<ul>
  <li>
    <button on:click={() => handleCurrency('USD')}>View as USD</button>
  </li>
  <li><button on:click={() => handleCurrency('ETH')}> View as ETH </button></li>
</ul>
