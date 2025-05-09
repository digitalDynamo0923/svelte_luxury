<script>
  import beddingImage from "$lib/assets/images/bedding.webp?enhanced";
  import beddingBottom from "$lib/assets/images/bedding_bottom.webp?enhanced";
  import beddingSection from "$lib/assets/images/bedding_section.webp?enhanced";
  import bonusImage from "$lib/assets/images/bonus.webp?enhanced";
  import arrowDown from "$lib/assets/icons/arrow_down.svg";
  import riskIcon from "$lib/assets/icons/risk.svg";
  import shippingIcon from "$lib/assets/icons/shipping.svg";

  let timeLeft = "14:00";

  function startCountdown() {
    let minutes = 14;
    let seconds = 0;

    const interval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
          return;
        }
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }

      timeLeft = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    }, 1000);
  }
</script>

<section class="cta">
  <div class="cta-box">
    <!-- Desktop layout -->
    <div class="desktop-layout">
      <div class="cta-box-image">
        <div class="banner">
          <enhanced:img src={beddingBottom} alt="Bedding" loading="lazy" />
        </div>
        <div class="bedding">
          <enhanced:img src={beddingImage} alt="Luxury sheets" loading="lazy" />
          <div class="bedding-section bedding-section-1">
            <enhanced:img
              src={beddingSection}
              alt="Sheets section"
              loading="lazy"
            />
          </div>
          <div class="bedding-section bedding-section-2">
            <enhanced:img
              src={beddingSection}
              alt="Sheets section"
              loading="lazy"
            />
          </div>
          <div class="bedding-section bedding-section-3">
            <enhanced:img
              src={beddingSection}
              alt="Sheets section"
              loading="lazy"
            />
          </div>
          <div class="bonus">
            <enhanced:img src={bonusImage} alt="Bonus" loading="lazy" />
          </div>
        </div>
      </div>
      <div class="cta-box-content">
        <div>
          <h3>TARIFF-FREE COMFORT SALE<br /><span>GET 20% OFF NOW</span></h3>
          <p>
            <span style="font-weight: 700">Beat the price hikes</span> and sleep
            better tonight. This
            <span style="color: #DC2C00; font-weight: 500"
              >limited time deal</span
            > is in high demand and stock keeps selling out.
          </p>
        </div>
        <div class="cta-button-container">
          <button class="cta-button" on:click={startCountdown}>
            <span class="arrow-down">
              <img src={arrowDown} alt="Arrow down" />
            </span>GET YOUR MIRACLE NOW!
          </button>

          <div class="countdown">
            <p>DEAL ENDING IN:</p>
            <span class="time">{timeLeft}</span>
            <div class="countdown-indicators">
              <div class="indicator">
                <span class="risk">
                  <img src={riskIcon} alt="Risk" />
                </span>
                Sell-Out Risk:
                <span style="color: #DD0000">High</span>
              </div>
              <span class="divider">|</span>
              <div class="indicator">
                <span class="shipping">
                  <img src={shippingIcon} alt="Shipping" />
                </span>
                <span style="font-weight: 700">FREE</span>&nbsp;shipping
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile layout -->
    <div class="mobile-layout">
      <div class="mobile-heading">
        <h3>TARIFF-FREE COMFORT SALE<br /><span>GET 20% OFF NOW</span></h3>
        <p>
          <span style="font-weight: 700">Beat the price hikes</span> and sleep
          better tonight. This
          <span style="color: #DC2C00; font-weight: 500">limited time deal</span
          > is in high demand and stock keeps selling out.
        </p>
      </div>

      <div class="cta-box-image">
        <div class="banner">
          <enhanced:img src={beddingBottom} alt="Bedding" loading="lazy" />
        </div>
        <div class="bedding">
          <enhanced:img src={beddingImage} alt="Luxury sheets" loading="lazy" />
          <div class="bedding-section bedding-section-1">
            <enhanced:img
              src={beddingSection}
              alt="Sheets section"
              loading="lazy"
            />
          </div>
          <div class="bedding-section bedding-section-2">
            <enhanced:img
              src={beddingSection}
              alt="Sheets section"
              loading="lazy"
            />
          </div>
          <div class="bedding-section bedding-section-3">
            <enhanced:img
              src={beddingSection}
              alt="Sheets section"
              loading="lazy"
            />
          </div>
          <div class="bonus">
            <enhanced:img src={bonusImage} alt="Bonus" loading="lazy" />
          </div>
        </div>
      </div>

      <div class="mobile-cta">
        <button class="cta-button" on:click={startCountdown}>
          <span class="arrow-down">
            <img src={arrowDown} alt="Arrow down" />
          </span>GET YOUR MIRACLE NOW!
        </button>

        <div class="countdown">
          <p>DEAL ENDING IN:</p>
          <span class="time">{timeLeft}</span>
          <div class="countdown-indicators">
            <div class="indicator">
              <span class="risk">
                <img src={riskIcon} alt="Risk" />
              </span>
              Sell-Out Risk:
              <span style="color: #DD0000">High</span>
            </div>
            <span class="divider">|</span>
            <div class="indicator">
              <span class="shipping">
                <img src={shippingIcon} alt="Shipping" />
              </span>
              <span style="font-weight: 700">FREE</span>&nbsp;shipping
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .cta {
    width: 100%;
    height: 520px;
    display: inline-block;
    padding: 60px 0;
    background-color: #ffffff;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }

  .cta-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 400px;
    max-width: 950px;
    width: 90%;
    margin: auto;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);
    text-align: center;
    padding: 48px 32px;
    box-sizing: border-box;
  }

  .desktop-layout {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .mobile-layout {
    display: none;
    width: 100%;
    height: 100%;
    flex-direction: column;
  }

  .cta-box-image {
    position: relative;
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    padding: 80px 64px;
  }

  .cta-box-image .banner {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 262px;
    height: 255px;
    transform: translate(-45%, -50%);
    opacity: 0.1;
    z-index: 1;
  }

  .banner enhanced\:img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .cta-box-image .bedding {
    position: relative;
    width: 273px;
    height: 188px;
    top: 50%;
    left: 50%;
    transform: translate(-55%, -60%);
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .bedding enhanced\:img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .cta-box-image .bedding-section {
    position: absolute;
  }

  .bedding-section enhanced\:img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .cta-box-image .bedding-section-3 {
    width: 158px;
    height: 33px;
    bottom: 0;
    transform: translate(45%, 50%);
  }

  .cta-box-image .bedding-section-2 {
    width: 127px;
    height: 27px;
    bottom: 15%;
    transform: translate(57%, 50%);
  }

  .cta-box-image .bedding-section-1 {
    width: 100px;
    height: 21px;
    bottom: 25%;
    transform: translate(72%, 40%);
  }

  .cta-box-image .bonus {
    position: absolute;
    width: 76px;
    height: 76px;
    bottom: 25%;
    right: -10%;
    transform: translate(12%, 40%);
  }

  .bonus enhanced\:img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .cta-box-content {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px 0 20px 0;
    box-sizing: border-box;
  }

  h3 {
    font-weight: 390;
    font-size: 25px;
    line-height: 35px;
    letter-spacing: -0.43px;
    text-align: center;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
  }

  h3 span {
    font-weight: 700;
    line-height: 35px;
  }

  p {
    font-weight: 390;
    font-size: 16px;
    line-height: 20px;
    width: 90%;
    margin: 0 auto;
  }

  .cta-button-container {
    display: flex;
    margin: 0 auto;
    margin-top: 20px;
    width: 90%;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .cta-button {
    background: linear-gradient(#80ba08, #1d973d); /* Gradient from image */
    color: white;
    border: 1px solid #15963d; /* Border from image */
    padding: 15px 30px;
    margin: 0 auto;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    line-height: 1;
  }

  .cta-button:hover {
    background: linear-gradient(#75ab07, #1a8c38);
  }

  .cta-button .arrow-down {
    width: 19px;
    height: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    position: relative;
    top: -1px; /* Slight adjustment to vertically align with text */
  }

  .arrow-down img {
    width: 100%;
    height: 100%;
    display: block;
  }

  .countdown {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .countdown p {
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    text-transform: uppercase;
    margin: 0;
    width: 100%;
    display: block;
  }

  .countdown .time {
    font-weight: 700;
    font-size: 36px;
    line-height: 20px;
    text-align: center;
    margin-bottom: 12px;
    width: 100%;
    display: block;
  }

  .countdown-indicators {
    display: flex;
    background-color: #f0f0f0;
    border-radius: 6px;
    width: 100%;
    height: 37px;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  .countdown-indicators .divider {
    font-size: 10px;
  }

  .indicator {
    display: flex;
    align-items: center;
    font-size: 10px;
    line-height: 12px;
  }

  .indicator span {
    font-size: 10px;
  }

  .indicator .risk,
  .indicator .shipping {
    width: 16px;
    height: 14px;
    display: inline-block;
    margin-right: 5px;
  }

  .risk img,
  .shipping img {
    width: 100%;
    height: 100%;
  }

  /* Mobile styles */
  @media (max-width: 768px) {
    .cta {
      height: auto;
      padding: 48px 32px;
    }

    .cta-box {
      height: auto;
      width: 100%;
      padding: 48px 32px;
      flex-direction: column;
    }

    .desktop-layout {
      display: none;
    }

    .mobile-layout {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 30px;
    }

    .mobile-layout .cta-box-image {
      width: 280px;
      height: 240px;
      padding: 0;
      margin: 0 auto;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .mobile-layout .cta-box-image .banner {
      left: calc(50% - 10%);
      transform: translate(-40%, -50%);
    }

    .mobile-layout .cta-box-image .bedding {
      left: calc(48% - 10%);
      transform: translate(-50%, -60%);
    }

    .mobile-heading {
      width: 280px;
      margin: 0 auto;
    }

    .mobile-heading h3 {
      font-size: 22px;
      line-height: 30px;
    }

    .mobile-heading p {
      font-size: 14px;
      line-height: 18px;
    }

    .mobile-cta {
      width: 280px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .mobile-cta .cta-button {
      padding: 12px 15px;
      font-size: 0.85rem;
      width: 100%;
    }

    .mobile-cta .countdown-indicators {
      padding: 0 5px;
      gap: 10px;
      height: 34px;
    }

    .mobile-cta .indicator {
      font-size: 8px;
      line-height: 10px;
    }

    .mobile-cta .indicator .risk,
    .mobile-cta .indicator .shipping {
      width: 14px;
      height: 12px;
      margin-right: 3px;
    }

    .mobile-cta .countdown-indicators .divider {
      font-size: 8px;
    }

    .mobile-cta .countdown .time {
      font-size: 30px;
    }
  }
</style>
