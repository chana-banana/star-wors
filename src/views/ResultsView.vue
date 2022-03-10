<template>
    <div>
      <NavBar />
        <div>
            <CharacterCard />
        </div>
      <FooterComponent />
    </div>
</template>

<script>
import FooterComponent from '../components/FooterComponent'
import NavBar from '../components/NavBar'
import CharacterCard from '../components/CharacterCard'

    export default {
    components: {
    FooterComponent,
    NavBar,
    CharacterCard
  }
}
</script>