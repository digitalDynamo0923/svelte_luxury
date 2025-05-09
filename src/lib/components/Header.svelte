<script>
  import logo from "$lib/assets/images/logo.webp?enhanced";
</script>

<header class="header">
  <div class="logo">
    <enhanced:img src={logo} alt="Logo image" fetchpriority="high" />
  </div>
</header>

<style>
  .header {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    background-color: #fff;
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.0798);
  }

  .logo {
    width: 114px;
    height: 26px;
  }
</style>
