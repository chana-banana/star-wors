<template>
  <div>
    <NavBurger v-if="!$route.meta.isPublic" />
    <Navbar v-if="!$route.meta.isPublic" />
      <router-view/>
    <FooterComponent v-if="!$route.meta.isPublic" />
  </div>
</template>

<script>
  import Navbar from './components/NavBar.vue';
  import FooterComponent from './components/FooterComponent.vue';
  import NavBurger from './components/NavBurger.vue';

  export default {
    components: {
      Navbar,
      FooterComponent,
      NavBurger
    }
  }
</script>

<style>

#app {
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  color: #ffe81f;
}

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&display=swap');
  @import 'assets/styles/main.css';
  @import 'assets/styles/typography.css'

</style>






