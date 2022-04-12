<template class="reverse">
  <div>
    <div v-if="!characters.length">
      <div v-if="!filter" class="search-cta">
        <div>
          <img src="../assets/icons/stormtrooper-icon-yellow.svg" alt="stormtrooper" class="trooper">
          <p class="load">loading . . . </p>
        </div>
      </div>
      <div v-else class="no-results">
          <p>Oops</p>
      </div>
    </div>
      <div v-else class="character-cards">
          <CharacterCard
          v-for="person in characters"
          :key="person.id"
          :person="person"
          />
        </div>
  </div>
</template>

<script>

import CharacterCard from '../components/CharacterCard'

export default {
  computed: {
    characters(){
          return this.$store.state.filteredCharacter?.people
      }
  },
  components: {
    CharacterCard,
  },
  beforeMount(){
    this.$store.dispatch('fetchAllCharacters')
    this.$store.dispatch('fetchAllFilms')
    this.$store.dispatch('fetchAllStarships')
    this.$store.dispatch('fetchAllSpecies')
    this.$store.dispatch('fetchAllVehicles')
  }
}
</script>

<style>
.character-cards {
  display: flex;
  flex-wrap: wrap;
  max-width: 1500px;
  margin: auto;
  justify-content: center;
}

.search-cta {
  display: block;
  justify-content: center;
  align-items: center;
}

.trooper {
  height: 150px;
  margin-top: 5rem;
  margin: 5rem auto 1rem auto;
}

.star-wars-logo {
  display: none;
}

@media screen and (min-width: 375px) {
  .trooper {
    margin-top: 9rem;
  }
}

@media screen and (min-width: 768px) {
  .trooper {
    height: 500px;
    margin: 7rem auto 5rem auto;
  }
  .load {
    font-size: 3rem;
  }
}

@media screen and (min-width: 1024px) {
  .trooper {
    margin: 15rem auto 5rem auto;
  }
}

@media screen and (min-width: 1440px) {
  .trooper {
    margin: 4rem 8rem auto auto;
  }
  .star-wars-logo {
    height: 250px;
    display: block;
    margin: 13rem auto 7rem auto;
  }
  .wrapper {
    display: inline-flex;
  }
}

@media screen and (min-width: 2560px) {
  .trooper {
    height: 900px;
  }
  .star-wars-logo {
    height: 550px;
    margin: 25rem auto 7rem auto;
  }
}

@media screen and (min-width: 3072px) {
  .trooper {
    height: 1200px;
  }
}

</style>