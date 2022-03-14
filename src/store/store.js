import { createStore } from 'vuex'

// Create a new store instance.
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
      }
    }
  },
  actions: {
    fetchAllCharacters() {
      fetch("https://swapi.dev/api/people")
      .then(response => response.json())
      .then(data => {
        this.state.characterList.people.push(...data.results)
      })
    }
  }
})

// Install the store instance as a plugin
export default store