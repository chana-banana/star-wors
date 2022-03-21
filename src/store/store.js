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
      filmList: {
        films: [],
        filter: '',
      },
      // starshipList: {
      //   starships: [],
      //   filter: '',
      // },
      // speciesList: {
      //   species: [],
      //   filter: '',
      // },
      // vehicleList: {
      //   vehicles: [],
      //   filter: '',
      // },
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
    fetchAllFilms() {
      fetch(`${baseUrl}/films`)
      .then(response => response.json())
      .then(data => {
        this.state.filmList.films.push(...data.results)
      })
      console.log(this.state.filmList.films)
    },
    // fetchAllStarships() {
    //   fetch(`${baseUrl}/starships`)
    //   .then(response => response.json())
    //   .then(data => {
    //     this.state.starshipList.starships.push(...data.results)
    //   })
    // },
    // fetchAllSpecies() {
    //   fetch(`${baseUrl}/species`)
    //   .then(response => response.json())
    //   .then(data => {
    //     this.state.speciesList.species.push(...data.results)
    //   })
    // },
    // fetchAllVehicles() {
    //   fetch(`${baseUrl}/vehicles`)
    //   .then(response => response.json())
    //   .then(data => {
    //     this.state.vehicleList.vehicles.push(...data.results)
    //   })
    // },
    addItemToCart({commit}, name){
      let findCharacter = (this.state.cart.items.find(x => x.id === name)) // object  - looking for object in array of objects using the name
      if(findCharacter){
        commit('appendCart', this.state.cart.items.indexOf(findCharacter));
      }
      else {
        const cartItemObject = {
          id: name,
          count: 1
        }
        this.state.cart.items.push(cartItemObject)
      }

      commit('appendCartTotal')
    },
  }
})

export default store