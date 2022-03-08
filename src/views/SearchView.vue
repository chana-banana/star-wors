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
    display: block;
    justify-content: center;
    align-items: center;
  }

  .trooper {
    display: block;
    height: 300px;

  }

   .star-wars-logo {
     display: none;
   }

  @media screen and (min-width: 1300px) {
    .trooper {
      display: block;
      height: 700px;
      padding: 125px;
   }

    .star-wars-logo {
      display: block;
   }
    .wrapper {
      display: inline-flex;
   }

  }

</style>