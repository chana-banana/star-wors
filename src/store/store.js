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
    if (this.state.characterList?.people?.length <= 0) {
    do {
      var queryParams = `?page=${page}`

      try {
        fetch(`${baseUrl}${directPath}${queryParams}`)
            .then(response => response.json())
            .then(data => {
              this.state.characterList.people.push(...data.results)
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
    var directPath = '/starships/';
    if(this.state.starshipList?.starships?.length <= 0) {
      do {
        var queryParams = `?page=${page}`

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
      } while (lastResult.next === null || page < 4)
    }
  },
  fetchAllSpecies() {
    let page = 1;
    let lastResult = {};
    var directPath = '/species/';
    if(this.state.speciesList?.species?.length <= 0) {
      do {
        var queryParams = `?page=${page}`

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
      } while (lastResult.next === null || page < 4)
    }
  },
  fetchAllVehicles() {
    let page = 1;
    let lastResult = {};
    var directPath = '/vehicles/';
    if(this.state.vehicleList?.vehicles?.length <= 0) {
      do {
        var queryParams = `?page=${page}`

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
      } while (lastResult.next === null || page < 4)
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