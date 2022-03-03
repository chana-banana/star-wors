<template>
  <div class="login-form">
        <div>
          <form id="form">
            <h1>Sign In</h1>
            <input class="input-block" type="email" id="mail" name="user_email" placeholder="Email" v-model="email" />
            <input class="input-block" type="password" id="password" name="user_password" placeholder="Password" v-model="password" />
            <button class="submit input-block" type="submit" @click="signIn">Submit</button>
            <p>Not a member yet? <a id="sign-up" href="#">Sign up here</a></p>
          </form>
        </div>
  </div>
</template>

<script>
  export default {
    data() {
    return {
      email: '',
      password: ''
    }
  },
    methods: {
      signIn() {
        console.log(this.email,this.password)
      }
    }
  }
</script>

<style scoped>

</style>
