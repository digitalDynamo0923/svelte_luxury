<script lang="ts">
  // Props
  export let number = 1;
  export let title = "";
  export let description = "";
  export let imageUrl: string | string[] = "";
  export let isReversed = false;

  import { onMount } from "svelte";

  $: images = typeof imageUrl === "string" ? [imageUrl] : imageUrl;
  $: hasMultipleImages = images.length > 1;

  let currentIndex = 0;

  // Change image every 2 seconds if there are multiple images
  onMount(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    if (hasMultipleImages) {
      interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
      }, 2000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  });
</script>

<section class="reason">
  {#if isReversed}
    <div class="reason-image">
      {#if hasMultipleImages}
        <div class="image-container">
          {#each images as img, i}
            <img
              src={img}
              alt={title}
              class={i === currentIndex ? "visible" : "hidden"}
            />
          {/each}
        </div>
      {:else}
        <img src={images[0]} alt={title} />
      {/if}
    </div>
    <div class="reason-content">
      <h2><span>{number}.</span> {title}</h2>
      <p>{description}</p>
    </div>
  {:else}
    <div class="reason-content">
      <h2><span>{number}.</span> {title}</h2>
      <p>{description}</p>
    </div>
    <div class="reason-image">
      {#if hasMultipleImages}
        <div class="image-container">
          {#each images as img, i}
            <img
              src={img}
              alt={title}
              class={i === currentIndex ? "visible" : "hidden"}
            />
          {/each}
        </div>
      {:else}
        <img src={images[0]} alt={title} />
      {/if}
    </div>
  {/if}
</section>

<style>
  /* Reason Sections */
  .reason {
    display: flex;
    height: 610px;
    background-color: #e4f2fb;
  }

  .reason-content,
  .reason-image {
    width: 50%;
    box-sizing: border-box;
  }

  .reason-content {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0 5%;
    justify-content: center;
    align-items: center;
  }

  .reason-content h2 {
    font-size: 38px;
    color: #00207d;
    font-weight: 450;
    line-height: 46px;
    letter-spacing: -0.54px;
    margin: 0;
    padding: 0;
  }

  .reason-content p {
    font-size: 18px;
    font-weight: 390;
    line-height: 100%;
    letter-spacing: 0px;
    margin: 0;
    padding: 0;
  }

  .reason-image {
    background-color: #f0f0f0;
  }

  .reason-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .image-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .image-container img {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  .image-container img.visible {
    opacity: 1;
  }

  .image-container img.hidden {
    opacity: 0;
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .reason {
      flex-direction: column;
    }
  }
</style>
