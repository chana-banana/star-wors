<template>
  <div>
        <div>
          <form>
            <h1>Sign In</h1>
            <input type="email" id="mail" name="user_email" placeholder="Email" v-model="email" />
            <input type="password" id="password" name="user_password" placeholder="Password" v-model="password" />
            <button class="submit" type="submit" @click="signIn">Submit</button>
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

<style>

  form {
  width: 400px;
  height: 300px;
  display: block;
}

  @media screen and (max-width: 393px) {
  input {
    width: 300px;
  }
}

  @media screen and (max-width: 393px) {
  .submit {
    width: 300px;
  }
}

</style>
