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
