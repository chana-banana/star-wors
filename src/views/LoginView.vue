<template>
<div class="columns">
  <div class="cut">
    <img src="../assets/star-wars-cut.png" alt="">
  </div>
  <div class="view login">
    <LoginForm />
  </div>
</div>
</template>

<script>
    import LoginForm from '../components/LoginForm'

    export default {
    components: {
    LoginForm
  }
}

</script>

<style scoped>
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
    width: 60vw;
    padding: 0;
    margin: 0;
  }

  img{
    float:left;
    max-height: 98vh;
  }

  @media screen and (max-width: 1043px) {
  .cut {
    display: none;
  }
}

</style>
