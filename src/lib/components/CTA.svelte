<section class="cta">
  <div class="cta-box">
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
          <span style="font-weight: 450">Beat the price hikes</span> and sleep
          better tonight. This
          <span style="color: #DC2C00">limited time deal</span> is in high demand
          and stock keeps selling out.
        </p>
      </div>
      <div>
        <button class="cta-button" on:click>
          <span class="arrow-down"> </span>GET YOUR MIRACLE NOW!
        </button>

        <div class="countdown">
          <p>DEAL ENDING IN:</p>
          <span class="time">13:52</span>
          <div class="countdown-indicators">
            <div class="indicator">
              <span class="risk"></span>Sell-Out Risk:<span
                style="color: #DC2C00">High</span
              >
            </div>
            <span>|</span>
            <div class="indicator">
              <span class="shipping"></span><span style="font-weight: 450"
                >FREE</span
              >shipping
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
    margin: auto;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);
    text-align: center;
    max-width: 920px;
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
    padding: 20px;
  }

  .cta-box-content h3 {
    font-family: brandon-grotesque, sans-serif;
    font-weight: 390;
    font-size: 30px;
    line-height: 35px;
    letter-spacing: -0.43px;
    text-align: center;
    color: #00227d;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
  }

  .cta-box-content h3 span {
    font-weight: 700;
    line-height: 35px;
  }

  .cta-box-content p {
    font-family: brandon-grotesque, sans-serif;
    font-weight: 390;
    font-size: 16px;
    line-height: 20px;
    color: #00227d;
  }

  .cta-button {
    background: linear-gradient(#80ba08, #1d973d); /* Gradient from image */
    color: white;
    border: 1px solid #15963d; /* Border from image */
    padding: 15px 30px;
    margin: 0;
    font-size: 1rem;
    border-radius: 5px;
    margin: 20px 0;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
  }

  .cta-button:hover {
    background: linear-gradient(#75ab07, #1a8c38);
  }

  .cta-button .arrow-down {
    width: 19px;
    height: 13px;
    border-top: 2px solid #ffffff;
    border-right: 2px solid #ffffff;
    transform: rotate(45deg);
  }

  .cta-button:hover {
    background: linear-gradient(
      #75ab07,
      #1a8c38
    ); /* Slightly darker gradient on hover */
  }

  .countdown p {
    font-family: brandon-grotesque, sans-serif;
    font-weight: 450;
    font-size: 12px;
    line-height: 20px;
    color: #00227d;
    text-align: center;
    text-transform: uppercase;
  }

  .countdown span {
    font-family: brandon-grotesque, sans-serif;
    font-weight: 450;
    font-size: 36px;
    line-height: 20px;
    text-align: center;
    color: #00227d;
  }

  .countdown-indicators {
    display: flex;
    border-radius: 6px;
    height: 37px;
    justify-content: center;
    align-items: center;
    gap: 30px;
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

  .indicator {
    display: flex;
    align-items: center;
    font-family: brandon-grotesque, sans-serif;
    font-size: 14px;
    color: #00227d;
  }
</style>
