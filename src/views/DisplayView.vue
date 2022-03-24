<template>
    <div>
        <CharacterDisplay
        :person="characterItems.person" ></CharacterDisplay>
        <AccordianComponent
        title="Films"
        :data="characterItems.films"
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
      characterItems() {
          return this.$store.state.characterItems // create action  return this.$store.state.person
      },

  },
  // async beforeMount(){ // life cycle hook
  //   await this.$store.dispatch('fetchAllFilms')
  //   // this.$store.dispatch('fetchAllStarships')
  //   // this.$store.dispatch('fetchAllSpecies')
  //   // this.$store.dispatch('fetchAllVehicles')
  // },
  mounted() {
    this.$store.dispatch('characterSpecific', this.id)  // create action person dispatch
    this.$store.dispatch('compareCharacterFilms')
  },
}
</script>