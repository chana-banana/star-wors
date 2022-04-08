<template>
  <div>
    <div>
      <form>
        <h1 class="sign-label">sign in</h1>
        <input type="email" id="userEmail" name="user_email" placeholder="Email" v-model="email" />
        <div class="input-button-wrap">
          <input :type="passwordType" id="userPassword" name="user_password" placeholder="Password" v-model="password" />
          <button @click.prevent="toggleShow" class="toggle-password"><fa icon="eye" class="input-icon" /></button>
        </div>
        <button class="submit" type="submit" @click.prevent="signIn">Submit</button>
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
        passwordType: 'password'    // need this for show/hide password
      }
    },
    methods: {
      signIn() {
        let sameDetails = this.$store.state.users.find(userDetails => userDetails.storedEmail == this.email && userDetails.storedPassword == this.password)
        if (sameDetails) {
          localStorage.setItem('key-anuReeves', this.w1a2s3d4)
          this.$router.push('/')
        } else {
          console.log('no user') // insert: 'email or password is incorrect'
        }
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
  font-family: 'Starjedi';
  font-weight: 300;
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
