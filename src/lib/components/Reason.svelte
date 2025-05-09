<script lang="ts">
  // Import all enhanced images
  import spaceAge1 from "$lib/assets/images/space_age_1.webp?enhanced";
  import softSkin1 from "$lib/assets/images/softskin_1.webp?enhanced";
  import tariff from "$lib/assets/images/tariff.webp?enhanced";
  import laundry from "$lib/assets/images/laundry.webp?enhanced";
  import pay2_3x from "$lib/assets/images/pay2_3x.webp?enhanced";
  import moneyBack from "$lib/assets/images/money_back.webp?enhanced";
  import moneyBackMobile from "$lib/assets/images/money_back_mobile.webp?enhanced";

  // Section content
  const sections = [
    {
      number: 1,
      title: "Luxury Sheets Are Being Hit With Tariffs. Ours Aren't.",
      description:
        "Many premium bedding brands source their materials from overseas—then pass import tariffs directly onto you. Our premium Sheets are designed to deliver luxury, cooling, and cleanliness without the markup. You get the same high-end quality (or better), without the government taking a cut.",
      images: [tariff],
      isReversed: false,
    },
    {
      number: 2,
      title: "Space-Age Innovation Without Space-Age Prices",
      description:
        "Our temperature-regulating sheets were inspired by the same materials NASA uses to keep astronauts cool. And thanks to our unique approach to sourcing and manufacturing, you won't see those savings eaten up by hidden costs or extra duties. Just smarter comfort, built for Earth.",
      images: [spaceAge1],
      isReversed: true,
    },
    {
      number: 3,
      title: "Fewer Washes = Lower Water Bills = Big Wins",
      description:
        "Our silver-infused fibers fight bacteria and odors naturally. That means you can wash less, save more, and feel fresher every night. Traditional sheets just can't compete—and every unnecessary wash is money down the drain.",
      images: [laundry],
      isReversed: false,
    },
    {
      number: 4,
      title: "Why Pay 2–3x More For Sheets That Do Less?",
      description:
        "Most \"luxury\" brands aren't antibacterial. They don't regulate temperature. And they certainly don't offer real savings. Our premium Sheets deliver softness, cleanliness, and cooling in one high-tech package—without tariff bloat.",
      images: [pay2_3x],
      isReversed: true,
    },
    {
      number: 5,
      title: "The Hidden Cost of Dirty Sheets? Your Skin.",
      description:
        "Regular sheets trap bacteria that irritate skin and clog pores. Our silver-infused our premium Sheets help reduce up to 99.7% of bacteria growth, making them a game-changer for anyone who wants clearer skin and fewer breakouts.",
      images: [softSkin1],
      isReversed: false,
    },
    {
      number: 6,
      title: "Try Them. Love Them. Or Get Your Money Back.",
      description:
        "No fine print. No hassle. No tariffs. If you don't love our premium fabric sheets after 30 nights of better sleep, we'll refund every cent. We're confident you'll never look at regular sheets the same way again.",
      images: [moneyBack],
      mobileImage: moneyBackMobile,
      isReversed: true,
    },
  ];
</script>

<!-- Desktop View -->
<div class="desktop-only">
  {#each sections as section}
    <section class="reason" class:primary-bg={section.number % 2 === 0}>
      <div class="container" class:reversed={section.isReversed}>
        <!-- Content Section -->
        <div class="reason-content">
          <h2><span>{section.number}.</span> {section.title}</h2>
          <p>{section.description}</p>
        </div>

        <!-- Image Section -->
        <div class="reason-image">
          {#if section.number === 1}
            <enhanced:img
              src={section.images[0]}
              alt={section.title}
              loading="eager"
              fetchpriority="high"
            />
          {:else}
            <enhanced:img
              src={section.images[0]}
              alt={section.title}
              loading="lazy"
            />
          {/if}
        </div>
      </div>
    </section>
  {/each}
</div>

<!-- Mobile View -->
<div class="mobile-only">
  {#each sections as section}
    <section class="reason" class:primary-bg={section.number % 2 === 0}>
      <div class="container">
        <!-- Image First on Mobile -->
        <div class="reason-image">
          {#if section.number === 1}
            <enhanced:img
              src={section.images[0]}
              alt={section.title}
              loading="eager"
              fetchpriority="high"
            />
          {:else if section.number === 6 && section.mobileImage}
            <enhanced:img
              src={section.mobileImage}
              alt={section.title}
              loading="lazy"
            />
          {:else}
            <enhanced:img
              src={section.images[0]}
              alt={section.title}
              loading="lazy"
            />
          {/if}
        </div>

        <!-- Content Second on Mobile -->
        <div class="reason-content">
          <h2><span>{section.number}.</span> {section.title}</h2>
          <p>{section.description}</p>
        </div>
      </div>
    </section>
  {/each}
</div>

<style>
  .reason {
    background-color: #e4f2fb;
    height: 610px;
  }

  .container {
    display: flex;
    height: 100%;
    width: 100%;
  }

  .container.reversed {
    flex-direction: row-reverse;
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
    position: relative;
    overflow: hidden;
  }

  .mobile-only {
    display: none;
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .reason {
      height: auto;
    }

    .desktop-only {
      display: none;
    }

    .mobile-only {
      display: block;
    }

    .container {
      flex-direction: column;
    }

    .reason-content,
    .reason-image {
      width: 100%;
    }

    .reason-content {
      height: 295px;
      min-height: 295px;
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
      height: 350px;
    }
  }
</style>
