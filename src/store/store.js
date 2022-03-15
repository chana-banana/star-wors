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
        items: [
          {
            id: 'name',
            count: 0,
          }
        ]
      }
    }
  },
  mutations: {
    appendCart(index) {
      this.state.cart.items[index].count +=1
    }
  },
  actions: {
    fetchAllCharacters() {
      fetch(`${baseUrl}/people`)
      .then(response => response.json())
      .then(data => {
        this.state.characterList.people.push(...data.results)
      })
    },
    addItemToCart(name){
      let index = this.state.cart.items.filter(x => x.id === name)?.index

      if(index){
        this.mutations.appendCart(index)
      }
      else {
        console.log(String(name))
        var cartItemObject = {
          id: name,
          count: 1
        }
        this.state.cart.items.push(cartItemObject)
        console.log(cartItemObject)
      }
    }
  }
})

// Install the store instance as a plugin
export default store