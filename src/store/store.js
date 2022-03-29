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
    var directPath = '/people/';

    do {
      var queryParams = `?page=${page}`

      try {
        fetch(`${baseUrl}${directPath}${queryParams}`) // if st om te check of daar klaar data is, then  no run again
            .then(response => response.json())
            .then(data => {
              this.state.characterList.people.push(...data.results)
              lastResult = data
              console.log(lastResult)
            });
             // increment the page with 1 on each loop
      } catch (err) {
        console.error(`Oops, something is wrong ${err}`)
      }
      page++;
    } while (lastResult.next === null || page < 10)
      console.log('After loop')
},
  fetchAllFilms() {
    fetch(`${baseUrl}/films`)
    .then(response => response.json())
    .then(data => {
      this.state.filmList.films.push(...data.results)
    })
  },
  fetchAllStarships() {
    fetch(`${baseUrl}/starships`)
    .then(response => response.json())
    .then(data => {
      this.state.starshipList.starships.push(...data.results)
    })
  },
  fetchAllSpecies() {
    fetch(`${baseUrl}/species`)
    .then(response => response.json())
    .then(data => {
      this.state.speciesList.species.push(...data.results)
    })
  },
  fetchAllVehicles() {
    fetch(`${baseUrl}/vehicles`)
    .then(response => response.json())
    .then(data => {
      this.state.vehicleList.vehicles.push(...data.results)
    })
  },

  characterSpecific({commit}, characterId) {
    let getPerson = this.state.characterList.people.find(item => item.name === characterId)
    commit('appendCharacter', getPerson)
  },

  compareCharacterFilms({commit}) {
    let sameFilm = []
    this.state.characterItems.person.films.forEach(characterFilm => { // loop through all films of character
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
    this.state.characterItems.person.starships.forEach(characterStarship => { // loop through all starships of character
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
    this.state.characterItems.person.species.forEach(characterSpecies => { // loop through all starships of character
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
    this.state.characterItems.person.vehicles.forEach(characterVehicles => { // loop through all starships of character
      let foundVehicles = this.state.vehicleList.vehicles.find(vehicles => vehicles.url === characterVehicles);
      if (foundVehicles) {
        sameVehicles.push(foundVehicles)
      }
    });
    if (sameVehicles.length > 0) {
      commit('updateCharacterItems', {vehicles: sameVehicles});
    }
  },

  addItemToCart({commit}, name){
    let foundCharacter = (this.state.cart.items.find(x => x.id === name)) // object  - looking for object in array of objects using the name
    if(foundCharacter){
      commit('appendCart', this.state.cart.items.indexOf(foundCharacter));
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
}})

export default store