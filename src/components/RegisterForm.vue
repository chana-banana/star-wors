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
        <router-link id="sign-up" to="/"><button class="submit" type="submit" @click="signIn">Sign Up</button></router-link>
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

<style scoped>
.sign-label {
  text-align: center;
  font-family: 'Starjedi';
  font-weight: 300;
}

.toggle-password {
  position: absolute;
  right: 58px;
  bottom: 45px;
}

.input-button-wrap {
  display: flex;
  justify-content: center;
}

@media screen and (min-width: 393px) {
  .toggle-password {
    right: 30px;
    bottom: 45px;
  }
}

</style>
