<script>
  // Component props or state can be added here
</script>

<footer class="footer">
  <div class="footer-logo">MAN<sup>ST</sup></div>
  
  <div class="footer-sections">
    <div class="footer-company">
      <h5>MANSH SHEETS LLC</h5>
      <address>
        123 Cooling Street<br>
        Suite 1001, Floor 10<br>
        New York, NY 10001<br>
        United States
      </address>
    </div>
    
    <div class="footer-links">
      <h5>INFO</h5>
      <ul>
        <li><a href="/about">About Us</a></li>
        <li><a href="/shipping">Shipping & Returns</a></li>
        <li><a href="/faq">FAQ</a></li>
      </ul>
    </div>
    
    <div class="footer-contact">
      <h5>CUSTOMER SUPPORT</h5>
      <a href="mailto:help@mansh.studio" class="email-link">help@mansh.studio</a>
    </div>
  </div>
  
  <div class="footer-bottom">
    <p class="copyright">Copyright © 2023. All Rights Reserved.</p>
    <div class="footer-legal">
      <a href="/privacy">Privacy Policy</a>
      <a href="/terms">Terms of Service</a>
      <a href="/shipping">Shipping Policy</a>
    </div>
  </div>
</footer>

<style>
  .footer {
    background-color: #f5f5f5;
    padding: 60px 20px 20px;
  }

  .footer-logo {
    color: #20245f;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 30px;
  }

  .footer-sections {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 40px;
  }

  .footer-company, .footer-links, .footer-contact {
    margin-bottom: 20px;
  }

  h5 {
    color: #20245f;
    margin-bottom: 15px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul li {
    margin-bottom: 10px;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .email-link {
    display: inline-flex;
    align-items: center;
  }

  .email-link:before {
    content: '';
    width: 20px;
    height: 20px;
    background-color: #20245f;
    margin-right: 10px;
    mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>');
    -webkit-mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>');
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    border-top: 1px solid #ddd;
    flex-wrap: wrap;
  }

  .copyright {
    font-size: 0.8rem;
    color: #666;
    margin: 0;
  }

  .footer-legal {
    display: flex;
  }

  .footer-legal a {
    font-size: 0.8rem;
    color: #666;
    margin-left: 15px;
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .footer-sections {
      flex-direction: column;
    }

    .footer-bottom {
      flex-direction: column;
      text-align: center;
    }

    .footer-legal {
      margin-top: 15px;
      justify-content: center;
    }

    .footer-legal a {
      margin: 0 8px;
    }
  }
</style> 