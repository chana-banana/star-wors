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
        name: String
    },
  components: {
    CharacterDisplay,
  }
}
</script>