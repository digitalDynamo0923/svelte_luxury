<script>
  import "$lib/styles/global.css";
</script>

<svelte:head>
  <title>LuxurySheets</title>
  <meta
    name="description"
    content="This is Paid Upwork Project for the long term collaboration. I hope to work with client for the long term."
  />
  <meta
    name="keywords"
    content="luxury bedding, cooling sheets, tariff-free sheets, premium sheets, silver-infused sheets, antibacterial bedding"
  />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://yourdomain.com/" />
  <meta property="og:title" content="LuxurySheets" />
  <meta
    property="og:description"
    content="Experience NASA-inspired cooling and silver-infused freshness with our premium bedding at tariff-free prices."
  />
  <meta property="og:image" content="/images/og-image.jpg" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://yourdomain.com/" />
  <meta property="twitter:title" content="LuxurySheets" />
  <meta
    property="twitter:description"
    content="Experience NASA-inspired cooling and silver-infused freshness with our premium bedding at tariff-free prices."
  />
  <meta property="twitter:image" content="/images/og-image.jpg" />

  <!-- Canonical URL -->
  <link rel="canonical" href="https://yourdomain.com/" />

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="/favicon.png" />

  <!-- Structured Data / JSON-LD -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Premium LuxurySheets Bedding Set",
      "image": ["https://yourdomain.com/images/bedding.webp"],
      "description": "NASA-inspired cooling sheets with silver-infused freshness technology. Temperature-regulating, antibacterial, and tariff-free premium bedding.",
      "brand": {
        "@type": "Brand",
        "name": "LuxurySheets"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://luxurysheets.com/",
        "priceCurrency": "USD",
        "price": "99.00",
        "priceValidUntil": "2024-12-31",
        "availability": "https://schema.org/InStock"
      }
    }
  </script>
</svelte:head>

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
