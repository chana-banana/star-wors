<template>
  <div class="footer">
    <div class="footer-wrap">
      <div>
        <h5 class="footer-txt">
          Created this app, I have - Chanlé
        </h5>
      </div>
      <div>
        <a href="https://linkedin.com/in/chanlé-van-der-merwe-15506019b" target="_blank"><fa :icon="['fab', 'linkedin']" class="brand-link" /></a>
        <a href="https://github.com/Chana-98" target="_blank"><fa :icon="['fab', 'github']" class="brand-link" /></a>
      </div>
    </div>
  </div>
  </template>

<style scoped>

  .brand-link {
      height: 30px;
      padding-left: 10px;
      color: #000000;
  }

  .brand-link:hover {
      color: #ffffff;
  }

  .footer-txt {
    color: #000000;
  }

  .footer-wrap {
    width: 95vw;
    display: block;
    padding-top: 10px;
  }

  .footer {
      background-color: #ffe81f;
      min-height: 50px;
      width: 100vw;
      position: fixed;
      bottom: 0;
      padding: 0px 20px 0 20px;
    }

  @media screen and (min-width: 615px) {
    .footer-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

</style>