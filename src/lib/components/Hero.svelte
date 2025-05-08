<script>
  import Header from "./Header.svelte";
</script>

<section class="hero">
  <Header />
  <div class="hero-content"></div>
</section>

<style>
  .hero {
    position: relative;
    height: 470px;
  }

  .hero-content {
    width: 100%;
    height: 100%;
    background-image: url("/images/hero.webp");
    background-size: cover;
    background-position: center;
  }
</style>
