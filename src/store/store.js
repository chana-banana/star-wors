import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
        email: '',
        password: '',
        passwordType: 'password'
    }
  }
})

// Install the store instance as a plugin
export default store