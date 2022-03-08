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
    height: 150px;
    margin-top: 5em;
    margin: 5em auto 1em auto;
  }

   .star-wars-logo {
     display: none;
   }

  @media screen and (min-width: 375px) {
    .trooper {
      margin-top: 9em;
    }
  }

  @media screen and (min-width: 768px) {
    .trooper {
      height: 500px;
      margin: 7em auto 5em auto;
    }
  }

  @media screen and (min-width: 1024px) {
    .trooper {
      margin-left: 160px;
      margin: 9em auto 5em auto;
    }
  }

  @media screen and (min-width: 1440px) {
    .trooper {
      margin-left: 50px;
    }
    .star-wars-logo {
     display: block;
    }
  }

</style>