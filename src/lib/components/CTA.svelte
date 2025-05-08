<script>
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
        <div class="banner"></div>
        <div class="bedding">
          <div class="bedding-section-1"></div>
          <div class="bedding-section-2"></div>
          <div class="bedding-section-3"></div>
          <div class="bonus"></div>
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
            <span class="arrow-down"> </span>GET YOUR MIRACLE NOW!
          </button>

          <div class="countdown">
            <p>DEAL ENDING IN:</p>
            <span class="time">{timeLeft}</span>
            <div class="countdown-indicators">
              <div class="indicator">
                <span class="risk"></span>
                Sell-Out Risk:
                <span style="color: #DC2C00">High</span>
              </div>
              <span class="divider">|</span>
              <div class="indicator">
                <span class="shipping"></span>
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
        <div class="banner"></div>
        <div class="bedding">
          <div class="bedding-section-1"></div>
          <div class="bedding-section-2"></div>
          <div class="bedding-section-3"></div>
          <div class="bonus"></div>
        </div>
      </div>

      <div class="mobile-cta">
        <button class="cta-button" on:click={startCountdown}>
          <span class="arrow-down"> </span>GET YOUR MIRACLE NOW!
        </button>

        <div class="countdown">
          <p>DEAL ENDING IN:</p>
          <span class="time">{timeLeft}</span>
          <div class="countdown-indicators">
            <div class="indicator">
              <span class="risk"></span>
              Sell-Out Risk:
              <span style="color: #DC2C00">High</span>
            </div>
            <span class="divider">|</span>
            <div class="indicator">
              <span class="shipping"></span>
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
    transform: translate(-40%, -50%);
    background-image: url("/images/bedding_bottom.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.1;
    z-index: 1;
  }

  .cta-box-image .bedding {
    position: relative;
    width: 273px;
    height: 188px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("/images/bedding.webp");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  .cta-box-image .bedding-section-3 {
    position: absolute;
    width: 158px;
    height: 33px;
    bottom: 0;
    transform: translate(50%, 50%);
    background-image: url("/images/bedding_section.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .cta-box-image .bedding-section-2 {
    position: absolute;
    width: 127px;
    height: 27px;
    bottom: 15%;
    transform: translate(62%, 50%);
    background-image: url("/images/bedding_section.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .cta-box-image .bedding-section-1 {
    position: absolute;
    width: 100px;
    height: 21px;
    bottom: 25%;
    transform: translate(77%, 40%);
    background-image: url("/images/bedding_section.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .cta-box-image .bonus {
    position: absolute;
    width: 76px;
    height: 76px;
    bottom: 25%;
    right: -10%;
    transform: translate(17%, 40%);
    background-image: url("/images/bonus.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .cta-box-content {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px 40px 20px 10px;
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
    margin-top: 20px;
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
  }

  .cta-button:hover {
    background: linear-gradient(#75ab07, #1a8c38);
  }

  .cta-button .arrow-down {
    width: 19px;
    height: 13px;
    background-image: url("/icons/arrow_down.svg");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: inline-block;
    margin-right: 8px;
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

  .indicator .risk {
    background-image: url("/icons/risk.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 16px;
    height: 14px;
    display: inline-block;
    margin-right: 5px;
  }

  .indicator .shipping {
    background-image: url("/icons/shipping.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 16px;
    height: 14px;
    display: inline-block;
    margin-right: 5px;
  }

  /* Mobile styles */
  @media (max-width: 768px) {
    .cta {
      height: auto;
      padding: 20px 0;
    }

    .cta-box {
      height: auto;
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
      width: 300px;
      height: 250px;
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

    .mobile-layout .cta-box-image .bedding-section-1,
    .mobile-layout .cta-box-image .bedding-section-2,
    .mobile-layout .cta-box-image .bedding-section-3 {
      /* Keep the relative positions of these elements but ensure they're positioned relative to the centered bedding */
      left: auto;
      right: auto;
    }

    .mobile-heading,
    .mobile-cta {
      width: 300px;
      margin: 0 auto;
    }

    .mobile-cta {
      width: 300px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }
</style>
