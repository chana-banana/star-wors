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
        totalCartCount: 0,
        items: [ // array of objects
          { // object
            id: 'name', //string
            count: 0, //number
          }
        ]
      }
    }
  },
  mutations: {
    appendCart(state, index) { // index number
      console.log(this.state.cart.items[index])
      this.state.cart.items[index].count +=1 // mutate count by adding 1
    },
    appendCartTotal(state) { // index number
      state.cart.totalCartCount +=1 // mutate count by adding 1
    },

  },
  actions: {
    fetchAllCharacters() {
      fetch(`${baseUrl}/people`)
      .then(response => response.json())
      .then(data => {
        this.state.characterList.people.push(...data.results)
      })
    },
    addItemToCart({commit}, name){
      let findCharacter = (this.state.cart.items.find(x => x.id === name)) // object  - looking for object in array of objects using the name
      console.log('addItemToCart')
      console.log(findCharacter)
      if(findCharacter){
        console.log('found character')
        console.log(this.state.cart.items.indexOf(findCharacter))
        commit('appendCart', this.state.cart.items.indexOf(findCharacter));
      }
      else {
        console.log('not found')
        const cartItemObject = {
          id: name,
          count: 1
        }
        this.state.cart.items.push(cartItemObject)
      }

      commit('appendCartTotal')
    }
  }
})

export default store

// properties of undefined - the thing you are trying to change does nnot exist (cannot be read)