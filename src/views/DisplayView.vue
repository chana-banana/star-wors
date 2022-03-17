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
  mounted() {
      console.log(this.id)
  }
}
</script>