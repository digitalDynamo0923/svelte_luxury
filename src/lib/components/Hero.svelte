<script>
  import Header from "./Header.svelte";
  import heroImage from "$lib/assets/images/hero.webp?enhanced";
</script>

<section class="hero">
  <Header />
  <div class="hero-content">
    <enhanced:img src={heroImage} alt="Hero image" fetchpriority="high" />
  </div>
</section>

<style>
  .hero {
    position: relative;
    height: 470px;
    overflow: hidden;
  }

  .hero-content {
    width: 100%;
    height: 100%;
    position: relative;
  }

  @media (max-width: 768px) {
    .hero {
      height: 227px;
    }
  }
</style>
