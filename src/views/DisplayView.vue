<template>
    <div>
        <CharacterDisplay :person="characterItems.person" ></CharacterDisplay>
        <AccordianComponent
        title="Films"
        :items="characterItems.films?.map(film => film.title)"
        ></AccordianComponent>
        <AccordianComponent
        title="Starships"
        :items="characterItems.starships?.map(ship => ship.name)"
        ></AccordianComponent>
        <AccordianComponent
        title="Species"
        :items="characterItems.species?.map(species => species.name)"
        ></AccordianComponent>
        <AccordianComponent
        title="Vehicles"
        :items="characterItems.vehicles?.map(vehicles => vehicles.name)"
        ></AccordianComponent>
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
          return this.$store.state.characterItems
      }
  },
  mounted() {
    this.$store.dispatch('characterSpecific', this.id)  // create action person dispatch
    this.$store.dispatch('compareCharacterFilms')
    this.$store.dispatch('compareCharacterStarships')
    this.$store.dispatch('compareCharacterSpecies')
    this.$store.dispatch('compareCharacterVehicles')
  },
}
</script>