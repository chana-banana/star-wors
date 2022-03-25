<template>
    <div>
        <CharacterDisplay
        :person="characterItems.person" ></CharacterDisplay>
        <AccordianComponent
        title="Films"
        :items="films"
        ></AccordianComponent>
        <!-- <AccordianComponent
        title="Starships"
        :items="characterItems.starships?.map(ship => ship.name)"
        ></AccordianComponent> -->
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
      films(){
        return this.characterItems?.films?.map(film => film.title)
      }
  },
  mounted() {
    this.$store.dispatch('characterSpecific', this.id)  // create action person dispatch
    this.$store.dispatch('compareCharacterFilms')
    this.$store.dispatch('compareCharacterStarships')
    this.$store.dispatch('compareCharacterFilms')
    this.$store.dispatch('compareCharacterStarships')
  },
}
</script>