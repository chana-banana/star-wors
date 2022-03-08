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
      margin: 15em auto 5em auto;
    }
  }

  @media screen and (min-width: 1440px) {
    .trooper {
      margin: 8em 8em auto auto;
    }
    .star-wars-logo {
      height: 250px;
      display: block;
      margin: 13em auto 7em auto;
    }
    .wrapper {
      display: inline-flex;
    }
  }

  @media screen and (min-width: 2560px) {
    .trooper {
      height: 900px;
      margin: 15em 10em auto auto;
    }
    .star-wars-logo {
      height: 550px;
      margin: 25em auto 7em auto;
    }
  }

  @media screen and (min-width: 3072px) {
    .trooper {
      height: 1200px;
    }
  }

</style>