<style>
  .container {
    font-size: 1em;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(129, 230, 203, 1) 23%,
      rgba(255, 173, 255, 1) 32%,
      rgba(141, 37, 163, 1) 76%,
      rgba(0, 0, 0, 1) 100%
    );
  }
</style>

<script lang="ts">
  import Home from './components/Home.svelte';
</script>

<main class="container">
  <Home />
</main>
