<template>
    <div>
        <CharacterDisplay
        :person="person" ></CharacterDisplay>
        <AccordianComponent
        title="Films"
        :characterItems="characterItems"
        />
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
    },
  components: {
    CharacterDisplay,
    AccordianComponent
  },
  computed: {
      person() {
          return this.$store.state.characterList.people.find(item => item.name === this.id) // create action  return this.$store.state.person
      },

  },
  beforeMount(){ // life cycle hook
    this.$store.dispatch('fetchAllFilms')
    // this.$store.dispatch('fetchAllStarships')
    // this.$store.dispatch('fetchAllSpecies')
    // this.$store.dispatch('fetchAllVehicles')
  },
  onMount() {
    this.$store.dispatch('characterSpecific')  // create action person dispatch
    this.$store.dispatch('compareCharacterFilms')
  },
}
</script>