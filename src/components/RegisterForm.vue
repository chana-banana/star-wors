<template>
  <div>
    <div>
      <form>
        <h1 class="sign-label">Sign Up</h1>
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
}

.toggle-password {
  margin-left: -35px;
  margin-top: -25px;
  z-index: 2;
}

.fok-wrap {
  display: flex;
  justify-content: center;
  padding-right: 9px;
}

</style>
