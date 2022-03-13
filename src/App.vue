<template>
  <Navbar v-if="!$route.meta.isPublic" />
  <router-view/>
</template>

<script>
  import Navbar from './components/NavBar.vue';

  export default {
    components: {
      Navbar
    }
  }
</script>

<style>

#app {
  font-family: 'Montserrat', sans-serif;
  text-align: center;
}
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&display=swap');
  @import 'assets/styles/main.css';
  @import 'assets/styles/typography.css'

</style>






