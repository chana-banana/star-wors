<template>
    <div>
        <CharacterDisplay
        :person="person" />
    </div>
</template>

<script>
import CharacterDisplay from '../components/CharacterDisplay'

export default {
    props: {
        id: { type: String, required: true }
    },
  components: {
    CharacterDisplay,
  },
  computed: {
      person() {
          return this.$store.state.characterList.people.find(item => item.name === this.id)
      }
  },
  beforeMount(){ // life cycle hook
    this.$store.dispatch('fetchAllFilms')
    // this.$store.dispatch('fetchAllStarships')
    // this.$store.dispatch('fetchAllSpecies')
    // this.$store.dispatch('fetchAllVehicles')
  },
  mounted() {
      console.log(this.id)
  }
}
</script>