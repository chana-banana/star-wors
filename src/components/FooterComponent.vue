<template>
  <div class="footer">
    <div>
      <h3>
      Created this app, I have - Chanlé
      </h3>
    </div>
    <div>
      <fa :icon="['fab', 'linkedin']" class="brand-link" />
      <fa :icon="['fab', 'github']" class="brand-link" />
    </div>
  </div>
  </template>

<style scoped>

  .brand-link {
      height: 30px;
      padding-left: 10px;
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
    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

</style>