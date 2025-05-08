<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import Intro from "$lib/components/Intro.svelte";
  import Reason from "$lib/components/Reason.svelte";
  import CTA from "$lib/components/CTA.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { reasonsData } from "$lib/data/data";
</script>

<main>
  <!-- Hero Section -->
  <Hero />

  <!-- Intro Section -->
  <Intro />

  <!-- Reason Sections -->
  {#each reasonsData as reason}
    <Reason
      number={reason.number}
      title={reason.title}
      description={reason.description}
      imageUrl={reason.imageUrl}
      isReversed={reason.isReversed}
    />
  {/each}

  <!-- CTA Section -->
  <CTA />

  <Footer />
</main>

<style>
  /* Global Styles */
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: "Arial", sans-serif;
    color: #333;
    line-height: 1.6;
  }

  main {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  /* Hero Section */
  .hero {
    position: relative;
    height: 400px;
    background-color: #e6f0f9; /* Light blue background similar to image */
  }

  .hero-image-placeholder {
    width: 100%;
    height: 100%;
    background-color: #d8e6f3; /* Placeholder color */
  }

  /* Intro Section */
  .intro {
    background-color: #20245f; /* Dark blue from the design */
    color: white;
    padding: 40px 20px;
    text-align: center;
    position: relative;
  }

  .intro h1 {
    font-size: 2rem;
    max-width: 800px;
    margin: 0 auto 15px;
  }

  .intro p {
    font-size: 1rem;
    max-width: 600px;
    margin: 0 auto 30px;
  }

  .scroll-indicator {
    margin-top: 20px;
  }

  .arrow-down {
    width: 20px;
    height: 20px;
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    transform: rotate(45deg);
    margin: 0 auto;
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .intro h1 {
      font-size: 1.5rem;
    }
  }
</style>
