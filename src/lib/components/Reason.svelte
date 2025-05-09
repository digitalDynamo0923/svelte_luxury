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
  $: isEven = number % 2 === 0;
  $: isSection6 = number === 6;

  let currentIndex = 0;

  // Change image every 2 seconds if there are multiple images on Figma (except section 6)
  onMount(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    if (hasMultipleImages && !isSection6) {
      interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
      }, 2000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  });
</script>

<section class="reason" class:primary-bg={isEven}>
  <div class="mobile-container">
    {#if isReversed}
      <div class="reason-image desktop-only">
        {#if isSection6}
          <img src="/images/money_back.webp" alt={title} />
        {:else if hasMultipleImages}
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
      <div class="reason-image mobile-only">
        {#if isSection6}
          <img src="/images/money_back_mobile.webp" alt={title} />
        {:else if hasMultipleImages}
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
    {:else}
      <div class="reason-content">
        <h2><span>{number}.</span> {title}</h2>
        <p>{description}</p>
      </div>
      <div class="reason-image desktop-only">
        {#if isSection6}
          <img src="/images/money_back_1.webp" alt={title} />
        {:else if hasMultipleImages}
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
      <div class="reason-image mobile-only">
        {#if isSection6}
          <img src="/images/money_back_mobile.webp" alt={title} />
        {:else if hasMultipleImages}
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
  </div>
</section>

<style>
  /* Reason Sections */
  .reason {
    background-color: #e4f2fb;
    height: 610px;
  }

  .mobile-container {
    display: flex;
    height: 100%;
    width: 100%;
  }

  .primary-bg {
    background-color: var(--primary-color);
  }

  .primary-bg .reason-content h2,
  .primary-bg .reason-content p {
    color: white;
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
    align-items: flex-start;
  }

  .reason-content h2 {
    font-size: 38px;
    color: #00207d;
    font-weight: 900;
    line-height: 46px;
    letter-spacing: -0.54px;
    margin: 0;
    padding: 0;
    text-align: left;
  }

  .reason-content p {
    font-size: 18px;
    font-weight: 390;
    line-height: 30px;
    letter-spacing: 0px;
    margin: 0;
    padding: 0;
    text-align: left;
    color: #333b47;
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

  .mobile-only {
    display: none;
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .reason {
      height: auto;
    }

    .mobile-container {
      flex-direction: column;
    }

    .reason-content,
    .reason-image {
      width: 100%;
    }

    .reason-content {
      height: 300px;
      padding: 30px 20px;
    }

    .reason-content h2 {
      font-size: 32px;
      line-height: 38px;
    }

    .reason-content p {
      font-size: 16px;
      line-height: 24px;
    }

    .reason-image {
      height: 400px;
    }

    .desktop-only {
      display: none;
    }

    .mobile-only {
      display: block;
    }
  }
</style>
