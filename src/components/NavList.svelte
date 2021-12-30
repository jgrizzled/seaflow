<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  function handleCurrency(currency: string) {
    dispatch('currency', {
      currency
    });
  }
</script>

<ul>
  <li>
    <button on:click={() => handleCurrency('USD')}>View as USD</button>
  </li>
  <li><button on:click={() => handleCurrency('ETH')}> View as ETH </button></li>
</ul>
