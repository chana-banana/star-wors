<template>
    <div>
        <CharacterDisplay
        :person="characterItems.person" ></CharacterDisplay>
        <AccordianComponent
        title="Films"
        :data="characterItems.films"
        />
        <AccordianComponent
        title="Starships"
        :data="characterItems.starships"
        />
        <!-- <AccordianComponent
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
  mounted() {
    this.$store.dispatch('characterSpecific', this.id)  // create action person dispatch
    this.$store.dispatch('compareCharacterFilms')
    this.$store.dispatch('compareCharacterStarships')
  },
}
</script>