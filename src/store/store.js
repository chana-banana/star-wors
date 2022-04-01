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
      starshipList: {
        starships: [],
        filter: '',
      },
      speciesList: {
        species: [],
        filter: '',
      },
      vehicleList: {
        vehicles: [],
        filter: '',
      },
      characterItems: {
        person: [],
        films: [],
        starships: [],
        species: [],
        vehicles: []
      },

      cart: {
        totalCartCount: 0,
        totalCartAmount: 0,
        items: []
      }
    }
  },
mutations: {
  appendCart(state, index) {
    this.state.cart.items[index].count +=1
  },
  appendCartLess(state, index) {
    this.state.cart.items[index].count -=1
  },
  appendCartTotal(state) { // adds to navbar cartTotal
    state.cart.totalCartCount +=1
  },
  appendCartTotalMinus(state) { // removes from navbar cartTotal
    state.cart.totalCartCount -=1
  },
  appendCartTotalAmount(state) {
    this.state.cart.totalCartAmount = state.cart.items.map(x => x.price * x.count).reduce((prev,current) => prev + current, 0)
  },
  appendCharacter(state, character) {
    this.state.characterItems.person = character
  },
  updateCharacterItems (state, data) {
    this.state.characterItems = {
      ...state.characterItems,
      ...data
    }
  }
},

actions: {

  fetchAllCharacters() {
    let page = 1;
    let lastResult = {};
    let directPath = '/people/';
    if (this.state.characterList?.people?.length <= 0) {
      do {
        let queryParams = `?page=${page}`

        try {
          fetch(`${baseUrl}${directPath}${queryParams}`)
              .then(response => response.json())
              .then(data => {
                this.state.characterList.people.push(...data.results.map(x => ({...x, price: 175})))
                lastResult = data
              });
        } catch (err) {
          console.error(`Oops, something is wrong ${err}`)
        }
        page++;
      } while (lastResult.next === null || page < 10)
    }
  },
  fetchAllFilms() {
    if(this.state.filmList?.films?.length <= 0) {
      fetch(`${baseUrl}/films`)
      .then(response => response.json())
      .then(data => {
        this.state.filmList.films.push(...data.results)
      })
    }
  },
  fetchAllStarships() {
    let page = 1;
    let lastResult = {};
    let directPath = '/starships/';
    if(this.state.starshipList?.starships?.length <= 0) {
      do {
        let queryParams = `?page=${page}`

        try {
          fetch(`${baseUrl}${directPath}${queryParams}`)
              .then(response => response.json())
              .then(data => {
                this.state.starshipList.starships.push(...data.results)
                lastResult = data
              });
        } catch (err) {
          console.error(`Oops, something is wrong ${err}`)
        }
        page++;
      } while (lastResult.next === null || page < 5)
    }
  },
  fetchAllSpecies() {
    let page = 1;
    let lastResult = {};
    let directPath = '/species/';
    if(this.state.speciesList?.species?.length <= 0) {
      do {
        let queryParams = `?page=${page}`

        try {
          fetch(`${baseUrl}${directPath}${queryParams}`)
              .then(response => response.json())
              .then(data => {
                this.state.speciesList.species.push(...data.results)
                lastResult = data
              });
        } catch (err) {
          console.error(`Oops, something is wrong ${err}`)
        }
        page++;
      } while (lastResult.next === null || page < 5)
    }
  },
  fetchAllVehicles() {
    let page = 1;
    let lastResult = {};
    let directPath = '/vehicles/';
    if(this.state.vehicleList?.vehicles?.length <= 0) {
      do {
        let queryParams = `?page=${page}`

        try {
          fetch(`${baseUrl}${directPath}${queryParams}`)
              .then(response => response.json())
              .then(data => {
                this.state.vehicleList.vehicles.push(...data.results)
                lastResult = data
              });
        } catch (err) {
          console.error(`Oops, something is wrong ${err}`)
        }
        page++;
      } while (lastResult.next === null || page < 5)
    }
  },

  characterSpecific({commit}, characterId) {
    let getPerson = this.state.characterList.people.find(item => item.name === characterId)
    commit('appendCharacter', getPerson)
  },

  compareCharacterFilms({commit}) {
    let sameFilm = []
    this.state.characterItems.person.films.forEach(characterFilm => {
    let foundFilm = this.state.filmList.films.find(film => film.url === characterFilm);
      if (foundFilm) {
        sameFilm.push(foundFilm)
      }
    });
    if (sameFilm.length > 0) {
      commit('updateCharacterItems', {films: sameFilm});
    }
  },

  compareCharacterStarships({commit}) {
    let sameShip = []
    this.state.characterItems.person.starships.forEach(characterStarship => {
      let foundStarship = this.state.starshipList.starships.find(starship => starship.url === characterStarship);
      if (foundStarship) {
        sameShip.push(foundStarship)
      }
    });
    if (sameShip.length > 0) {
      commit('updateCharacterItems', {starships: sameShip});
    }
  },

  compareCharacterSpecies({commit}) {
    let sameSpecies = []
    this.state.characterItems.person.species.forEach(characterSpecies => {
      let foundSpecies = this.state.speciesList.species.find(species => species.url === characterSpecies);
      if (foundSpecies) {
        sameSpecies.push(foundSpecies)
      }
    });
    if (sameSpecies.length > 0) {
      commit('updateCharacterItems', {species: sameSpecies});
    }
  },

  compareCharacterVehicles({commit}) {
    let sameVehicles = []
    this.state.characterItems.person.vehicles.forEach(characterVehicles => {
      let foundVehicles = this.state.vehicleList.vehicles.find(vehicles => vehicles.url === characterVehicles);
      if (foundVehicles) {
        sameVehicles.push(foundVehicles)
      }
    });
    if (sameVehicles.length > 0) {
      commit('updateCharacterItems', {vehicles: sameVehicles});
    }
  },

  addItemToCart({commit}, character){
    let foundCharacter = (this.state.cart.items.find(x => x.id === character.name)) // object  - looking for object in array of objects using the name
    if(foundCharacter){
      commit('appendCart', this.state.cart.items.indexOf(foundCharacter));
    }
    else {
      const cartItemObject = {
        id: character.name,
        count: 1,
        price: character.price
      }
      this.state.cart.items.push(cartItemObject)
    }
      commit('appendCartTotal')
      commit('appendCartTotalAmount')
  },

  updateCartItems({commit}, id) { // when increasing quantity of item in cart
    let cartItem = this.state.cart.items.find(x => x.id === id)
      if(cartItem){
        commit('appendCart', this.state.cart.items.indexOf(cartItem)) // getting actual index of where in array item, is, needed to update value
        commit('appendCartTotal')
        commit('appendCartTotalAmount')
      }
  },
  updateCartItemsLess({commit}, id) { // when decreasing quantity of item in cart
    let cartItem = this.state.cart.items.find(x => x.id === id)
      if(cartItem){
        commit('appendCartLess', this.state.cart.items.indexOf(cartItem)) // getting actual index of where in array item, is, needed to update value
        commit('appendCartTotalMinus')
        commit('appendCartTotalAmount')
      }
  },
  removeCartItems() {

  }
}})

export default store