<style>
  button {
    font-size: 2em;
    color: var(--purple);
    font-size: 2em;
    border: none;
    background-color: transparent;
    margin: 0;
    display: inherit;
    padding: 0;
    align-self: flex-start;
    z-index: 10;
  }

  button:active {
    background-color: transparent;
  }

  .sidenav {
    background: rgb(255, 173, 255);
    background: linear-gradient(
      0deg,
      rgba(255, 173, 255, 1) 0%,
      rgba(141, 37, 163, 1) 53%,
      rgba(44, 9, 51, 1) 100%
    );
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1em;
    z-index: 2;
  }

  p {
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
    padding: 0 3em;
    color: var(--primary-dark);
  }
</style>

<script lang="ts">
  import '@fortawesome/fontawesome-free/js/all.js';
  import { fly } from 'svelte/transition';
  import { circIn } from 'svelte/easing';
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

{#if isOpen}
  <div class="sidenav" transition:fly={{ x: -200, duration: 500, easing: circIn }}>
    <button on:click={toggle}>
      <i class="fas fa-times" />
    </button>
    <NavList toggleFunc={toggle} />
    <p>Created and developed by Justin Greene and Marissa McDonnell</p>
  </div>
{/if}
