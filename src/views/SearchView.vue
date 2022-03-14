<template class="reverse">
  <div>
    <div v-if="!characters.people.length">
      <div v-if="!filter" class="search-cta">
        <div>
          <img src="../assets/icons/stormtrooper-icon-yellow.svg" alt="stormtrooper" class="trooper">
        </div>
        <div>
          <img src="../assets/icons/star-wars-logo-yellow.svg" alt="star-wars-logo" class="star-wars-logo">
          <p class="hero-text">Go ahead, search for any Star Wars character!</p>
        </div>
      </div>
      <div v-else class="no-results">
          <p>Oops</p>
      </div>
    </div>
      <div v-else class="character-cards">
          <CharacterCard
          v-for="person in characters.people" :key="person.id"
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
          return this.$store.state.characterList
      }
  },
  methods: {
    fetchAllCharacters() {
      this.$store.dispatch('fetchAllCharacters')
    }
  },
  components: {
    CharacterCard,
  },
  beforeMount(){
    this.$store.dispatch('fetchAllCharacters')
  }
}
</script>

<style>
.character-cards {
  display: flex;
  flex-wrap: wrap;
  max-width: 1280px;
  margin: 0 auto;
  justify-content: left;
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
  }

  @media screen and (min-width: 1024px) {
    .trooper {
      margin: 15rem auto 5rem auto;
    }
  }

  @media screen and (min-width: 1440px) {
    .trooper {
      margin: 8rem 8rem auto auto;
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
      margin-top: 15rem;
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