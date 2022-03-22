<template>
    <div>
        <CharacterDisplay
        :person="person" ></CharacterDisplay>
        <AccordianComponent
        v-for="film in films"
        :key="film.id"
        :film="same"
        title="Films" />
        <!-- <AccordianComponent
        title="Starships" />
        <AccordianComponent
        title="Species" />
        <AccordianComponent
        title="Vehicles" /> -->
    </div>
</template>

<script>
import CharacterDisplay from '../components/CharacterDisplay'
import AccordianComponent from '../components/AccordianComponent'

export default {
    props: {
        id: { type: String, required: true },
        same: Array

    },
  components: {
    CharacterDisplay,
    AccordianComponent
  },
  computed: {
      person() {
          return this.$store.state.characterList.people.find(item => item.name === this.id)
      },
    //   characterFilms() {
    //       return this.$store.actions.compareCharacterFilms.same
    //   }
  },
  beforeMount(){ // life cycle hook
    this.$store.dispatch('fetchAllFilms')
    // this.$store.dispatch('fetchAllStarships')
    // this.$store.dispatch('fetchAllSpecies')
    // this.$store.dispatch('fetchAllVehicles')
  },
  onMount() {
    this.$store.dispatch('compareCharacterFilms')
  },
  mounted() {
      console.log(this.id)
  },

}
</script>