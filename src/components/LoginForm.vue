<template>
  <div>
        <div>
          <form>
            <h1>Sign In</h1>
            <input type="email" id="mail" name="user_email" placeholder="Email" v-model="email" />
            <input :type=passwordType id="password" name="user_password" placeholder="Password" v-model="password" />
            <button @click.prevent="toggleShow" class="toggle-password"><fa icon="eye" class="input-icon" /></button>
            <button class="submit" type="submit" @click="signIn">Submit</button>
            <p>Not a member yet? <router-link id="sign-up" to="/register">Sign up here</router-link></p>
          </form>
        </div>
  </div>
</template>

<script>
  export default {
    data() {
    return {
      email: '',
      password: '',
      passwordType: 'password'
    }
  },
    methods: {
      signIn() {
        console.log(this.email,this.password)
      },
      toggleShow() {
        if (this.passwordType === 'password') {
          this.passwordType = 'text'
        } else {
          this.passwordType = 'password'
        }
      }
    }
  }
</script>

<style>

</style>
