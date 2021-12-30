<style>
  button {
    font-size: 2em;
    color: purple;
  }

  .sidenav {
    background-color: salmon;
    z-index: 1;
    position: fixed;
    display: none;
  }
  .open {
    display: inline-block;
  }
</style>

<script lang="ts">
  import '@fortawesome/fontawesome-free/js/all.js';
  import NavList from './NavList.svelte';

  let isOpen = false;

  function toggle() {
    isOpen = !isOpen;
  }
</script>

{#if !isOpen}
  <button on:click={toggle}>
    <i class="fas fa-hamburger" />
  </button>
{/if}

<div class="sidenav" class:open={isOpen}>
  <button on:click={toggle}>x</button>
  <NavList on:currency />
  <p>Created and developed by Justin Greene and Marissa McDonnell</p>
</div>
