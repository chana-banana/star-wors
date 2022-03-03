<template>
    <div class="view">
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
  .view {
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background-color: black;
    /* background-size: cover; */
  }

</style>
