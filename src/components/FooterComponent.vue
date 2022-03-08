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
    padding: 10px 30px 10px 0px;
  }

  .footer {
    height: 100px;
    width: 90vw;
    display: block;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (min-width: 615px) {
    .footer {
    height: 50px;
    width: 80vw;
    display: flex;
    }
  }

</style>