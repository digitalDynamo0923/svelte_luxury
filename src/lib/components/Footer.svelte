<script>
  // Component props or state can be added here
</script>

<footer class="footer">
  <div class="footer-logo">
    <img src="/images/logo.webp" alt="logo" />
  </div>
  <div class="contact-container">
    <div class="position-container">
      <h5>NOVUS STUDIO LLC</h5>
      <div class="address-container">
        <p>
          111 Town Square Place<br />
          Suite 1203 PMB 1065<br />
          Jersey City, New Jersey 07310
        </p>
        <p>
          1501 Haines St.<br />
          Jacksonville, FL 32206<br />
          (888) 683-4875
        </p>
      </div>
    </div>

    <div class="information-container">
      <h5>INFO</h5>
      <div class="info-container">
        <p>
          <span>Shipping Information </span><br />
          UPS ground 2-7 business days <br />
          <span>Business Licensing Information </span><br />
          EIN: 83-3059849
        </p>
      </div>
    </div>

    <div class="support-container">
      <h5>CUSTOMER SUPPORT</h5>
      <div class="mail">
        <img src="/icons/mail.svg" alt="mail" />
        <p>hello@novus.studio</p>
      </div>
    </div>
  </div>

  <div class="description-container">
    <p>
      <span style="font-weight: 900">Disclaimer:</span> this is an advertisement,
      using a fictional customer but discussing experiences that are common to real
      customers of Miracle brand.
    </p>
    <p>
      This is an advertisement and not an actual news article, blog, or consumer
      protection update
    </p>
    <p>
      The story depicted on this site and the person depicted in the story are
      not actual news. Rather, this story is based on the results that some
      people who have used these products have achieved. The results portrayed
      in the story and in the comments are illustrative, and may not be the
      results that you achieve with these products. This page could receive
      compensation for clicks on or purchase of products featured on this site.
    </p>
  </div>
  <div class="footer-legal">
    <div>
      <p>Copyright 2022. Novus Studio LLC. All rights reserved.</p>
    </div>
    <div>
      <a href="/#">Privacy Policy</a>
      <span>|</span>
      <a href="/#">Care Guide</a>
      <span>|</span>
      <a href="/#">Terms of Use</a>
    </div>
  </div>
</footer>

<style>
  .footer {
    background-color: #e4f2ff;
    padding: 66px 10% 46px;
  }

  .footer-logo {
    width: 114px;
    height: 26px;
  }

  .footer-logo sup {
    margin-left: 5px;
    font-size: 10px;
    font-weight: 900;
    border-bottom: 2px solid #00207d;
  }

  .contact-container {
    display: flex;
    flex-direction: row;
    margin-top: 60px;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .contact-container p {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
  }

  .contact-container p span {
    font-weight: 900;
  }

  h5 {
    margin-bottom: 15px;
  }

  .contact-container .address-container {
    display: flex;
    flex-direction: row;

    gap: 18px;
    justify-content: space-between;
  }

  .contact-container .support-container {
    text-align: right;
  }

  .contact-container .mail {
    display: flex;

    flex-direction: row;
    align-items: center;
    gap: 30px;
  }

  .contact-container .mail img {
    width: 27px;
    height: 20px;
  }

  .contact-container .mail p {
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    margin: 0;
  }

  .description-container {
    margin-top: 40px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .description-container p {
    font-size: 14px;
    line-height: 14px;
    margin: 0;
  }

  .footer-legal {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
  }

  .footer-legal p {
    font-size: 14px;
    line-height: 14px;
    margin: 0;
  }

  .footer-legal span {
    color: #ffffff;
  }

  .footer-legal a {
    font-size: 14px;
    line-height: 14px;
    margin: 0;
    color: var(--primary-color);
    text-decoration: none;
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .contact-container {
      flex-direction: column;
      gap: 30px;
    }

    .contact-container .support-container {
      text-align: left;
    }

    .contact-container .mail {
      justify-content: flex-start;
    }

    .description-container {
      flex-direction: column;
      text-align: left;
      border-top: 1px solid rgba(0, 34, 125, 0.2); /* Primary color with 20% opacity */
      padding-top: 20px;
    }

    .footer-legal {
      flex-direction: column;
      align-items: flex-start;
      gap: 15px;
      margin-top: 30px;
    }

    .footer-legal span {
      color: var(--primary-color);
      font-size: 12px;
    }

    .footer-legal div {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
    }
  }
</style>
