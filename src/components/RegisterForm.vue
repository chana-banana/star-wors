<template>
  <div>
    <div>
      <form>
        <h1 class="sign-label">sign up</h1>
          <input type="email" id="mail" name="user_email" placeholder="Email" v-model="email" />
          <div class="input-button-wrap">
            <input :type="passwordType" id="password" name="user_password" placeholder="Password" v-model="password" />
            <button @click.prevent="toggleShow" class="toggle-password"><fa icon="eye" class="input-icon" /></button>
          </div>
          <div class="input-button-wrap">
            <input :type="passwordType" id="confirm-password" name="confirm_password" placeholder="Confirm Password" v-model="confirmPassword" />
            <button @click.prevent="toggleShow" class="toggle-password"><fa icon="eye" class="input-icon" /></button>
          </div>
          <div v-if="this.password !== this.confirmPassword" class="error">*passwords do not match</div>
        <router-link id="sign-up" to="/"><button class="submit" type="submit" @click.prevent="signUp">Sign Up</button></router-link>
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
      passwordType: 'password',
      confirmPassword: ''
    }
  },
    methods: {
      signUp() {
        let samePass = this.password === this.confirmPassword
        let newUser = {
          storedEmail: this.email,
          storedPassword: this.password
        }
        if (samePass) {
          localStorage.setItem('key-anuReeves', this.w1a2s3d4)
          this.$store.state.users.push(newUser)
          this.$router.push('/')
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

<style scoped>
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

.error {
  color: red;
  margin-bottom: 30px;
}

</style>
