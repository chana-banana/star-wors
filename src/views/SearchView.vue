<template class="reverse">
    <NavBar />
      <div class="wrapper">
        <div>
          <img src="../assets/icons/stormtrooper-icon-yellow.svg" alt="stormtrooper" class="trooper">
        </div>
        <div>
          <img src="../assets/icons/star-wars-logo-yellow.svg" alt="star-wars-logo" class="star-wars-logo">
          <h2>Go ahead, search for any Star Wars character!</h2>
        </div>
      </div>
    <FooterComponent />
</template>


<script>


import FooterComponent from '../components/FooterComponent'
import NavBar from '../components/NavBar'

    export default {
    components: {
    FooterComponent,
    NavBar
  }
}

</script>

<style>
  .wrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  .trooper {
    display: none;
  }

  @media screen and (min-width: 1696px) {
    .trooper {
      display: block;
      height: 550px;
      padding: 125px;
   }
  }

</style>