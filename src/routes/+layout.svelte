<script>
  import "$lib/styles/global.css";
</script>

<slot />

<style>
  :global(body) {
    font-family: "brandon-grotesque", sans-serif !important;
    margin: 0;
    padding: 0;
  }

  :global(*) {
    font-family: "brandon-grotesque", sans-serif;
  }
</style>
