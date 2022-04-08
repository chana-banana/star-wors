import { createStore } from 'vuex'

const baseUrl = "https://swapi.dev/api";

const store = createStore({
  state () {
    return {
      users: [
        {
          storedEmail: 'example1@mail.com',
          storedPassword: 'example1'
        },
        {
          storedEmail: 'example2@mail.com',
          storedPassword: 'example2'
        },
        {
          storedEmail: 'example3@mail.com',
          storedPassword: 'example3'
        },
      ],
      characterList: {
        people: [],
        filter: '',
      },
      filteredCharacter: {
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
      },
      history: []
    }
  },
mutations: {
  appendCart(state, index) {
    this.state.cart.items[index].count +=1 // adds 1 item to cart
  },
  removeSingularItem(state, index) {
    this.state.cart.items[index].count -=1 // removes 1 item from cart
  },
  appendCartTotal(state) { // adds 1 to navbar cartTotal
    state.cart.totalCartCount +=1
  },
  appendCartTotalMinus(state) { // removes 1 from navbar cartTotal
    state.cart.totalCartCount -=1
  },
  updateCartTotalQty(state) { // removes itemTotal qty from navbar cartTotal
    this.state.cart.totalCartCount = state.cart.items.map(x => x.count).reduce((prev,current) => prev + current, 0)
  },
  cartRemoveItem(state, index) { // removes item from cart
    state.cart.items.splice([index], 1)
  },
  calculateCartTotalAmount(state) { // calculates cart total
    this.state.cart.totalCartAmount = state.cart.items.map(x => x.price * x.count).reduce((prev,current) => prev + current, 0)
  },
  appendCharacter(state, character) {
    this.state.characterItems.person = character
  },
  clearCart() {
    this.state.cart.items.splice(0, this.state.cart.items.length) // array
    this.state.cart.totalCartAmount = 0 // number
    this.state.cart.totalCartCount = 0 // number
  },
  updateCharacterItems (state, data) {
    this.state.characterItems = {
      ...state.characterItems,
      ...data
    }
  },
  updateFilteredCharacter (state, data) {
    this.state.filteredCharacter.people = data
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
      this.state.filteredCharacter.people = this.state.characterList.people
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
      commit('calculateCartTotalAmount')
  },

  updateCartItems({commit}, id) { // when increasing quantity of item in cart
    let cartItem = this.state.cart.items.find(x => x.id === id)
      if(cartItem){
        commit('appendCart', this.state.cart.items.indexOf(cartItem)) // getting actual index of where in array item, is, needed to update value
        commit('appendCartTotal')
        commit('calculateCartTotalAmount')
      }
  },
  updateCartItemsLess({commit}, id) { // when decreasing quantity of item in cart
    let cartItem = this.state.cart.items.find(x => x.id === id)
      if(cartItem){
        commit('removeSingularItem', this.state.cart.items.indexOf(cartItem))
        commit('appendCartTotalMinus')
        commit('calculateCartTotalAmount')
      }
  },
  removeCartItems({commit}, id) {
    let cartItem = this.state.cart.items.find(x => x.id === id)
      if(cartItem){
        commit('cartRemoveItem', this.state.cart.items.indexOf(cartItem))
        commit('calculateCartTotalAmount')
      }
  },
  storeOrder({commit}) {
    if(this.state.cart.totalCartCount >= 1) {
      const tempCart = {
        totalCartCount: this.state.cart.totalCartCount,
        totalCartAmount: this.state.cart.totalCartAmount,
        items: [],
        orderNumber: this.state.history.length === 0 ? 1 : this.state.history[this.state.history.length-1]?.orderNumber + 1,
      }
      tempCart.items.push(...this.state.cart.items) // item info kept on checkout
      this.state.history.push(tempCart)
      commit('clearCart')
    }
  },
  filteredList({commit}, searchInput) {
    let searchResults = this.state.characterList.people.filter(x => x.name.toLowerCase().includes(searchInput.toLowerCase()))
    if(searchResults) {
      commit('updateFilteredCharacter', searchResults)
    }
  }
}})

export default store