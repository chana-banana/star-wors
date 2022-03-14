import { createStore } from 'vuex'

const baseUrl = "https://swapi.dev/api";

const store = createStore({
  state () {
    return {
      auth: {
        email: '',
        password: '',
        passwordType: 'password',
      },
      characterList: {
        people: [],
        filter: '',
      },
      cart: {
        items: []
      }
    }
  },
  mutations: {
    appendCart() {
      return
    }
  },
  actions: {
    fetchAllCharacters() {
      fetch(`${baseUrl}/people`)
      .then(response => response.json())
      .then(data => {
        this.state.characterList.people.push(...data.results)
      })
    }
  }
})

// Install the store instance as a plugin
export default store