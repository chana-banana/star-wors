<template>
  <div>
        <div>
          <form>
            <h1>Sign Up</h1>
            <input type="email" id="mail" name="user_email" placeholder="Email" v-model="email" />
            <input type="password" id="password" name="user_password" placeholder="Password" v-model="password" />
            <input type="password" id="password" name="user_password" placeholder="Confirm Password" v-model="password" />
            <button class="submit" type="submit" @click="signIn">Sign Up</button>
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

<style>

</style>
