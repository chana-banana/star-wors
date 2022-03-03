<template>
    <div class="view login">
        <LoginForm />
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
    width: 100vw;
    justify-content: center;
    align-items: center;
  }

  /* @media screen and (min-width: 720px) {
  .view {
    background-color: lightgreen;
  }
} */

</style>
