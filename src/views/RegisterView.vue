<template>
<div class="columns">
  <div class="cut">
    <img src="../assets/images/star-wars-logo-black.png" alt="">
  </div>
  <div class="view login reverse">
    <RegisterForm />
  </div>
</div>
</template>

<script>
    import RegisterForm from '../components/RegisterForm'

    export default {
    components: {
    RegisterForm
  }
}

</script>

<style scoped>

  * {
  background-color: #ffe81f !important;
  }

  .login.view {
    display: flex;
    height: 100vh;
    width: 40vw;
    justify-content: center;
    align-items: center;
  }

  .columns {
    display: inline-flex;
  }

  .cut {
  display: none;
  }

  img{
    width: 903px;
    height: 387px;
  }

  @media screen and (min-width: 1696px) {
    .cut {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
  }
}

</style>
