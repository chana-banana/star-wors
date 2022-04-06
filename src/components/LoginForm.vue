<template>
  <div>
        <div>
          <form>
            <h1 class="sign-label">Sign In</h1>
              <input type="email" id="mail" name="user_email" placeholder="Email" v-model="email" />
              <div class="input-button-wrap">
                <input :type="passwordType" id="password" name="user_password" placeholder="Password" v-model="password" />
                <button @click.prevent="toggleShow" class="toggle-password"><fa icon="eye" class="input-icon" /></button>
              </div>
              <button class="submit" type="submit" @click="signIn">Submit</button>
            <p>Not a member yet? <router-link id="sign-up" to="/register">Sign up here</router-link></p>
          </form>
        </div>
  </div>
</template>

<script>
  export default {
    computed: {
      authentication(){
          return this.$store.state.auth
      }
    },
    mounted() {
      console.log(this.authentication.email)
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

.sign-label {
  text-align: center;
}

.toggle-password {
  margin-left: -35px;
  margin-top: -25px;
  z-index: 2;
}

.input-button-wrap {
  display: flex;
  justify-content: center;
  padding-right: 9px;
}

p {
  font-family: 'Montserrat', sans-serif;
}

#sign-up {
  font-family: 'Montserrat', sans-serif;
}

</style>
