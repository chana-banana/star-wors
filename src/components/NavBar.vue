<template>
  <nav>
    <div class="nav-left">
      <div @click="$router.push('/')" class="home-btn-wrapper">
        <img src="../assets/icons/falcon-yellow.svg" alt="home" class="home">
      </div>
      <div class="input-button-wrap">
        <input type="text" class="search" placeholder="Search" v-model="searchInput" />
        <button class="search-button"
         @click.prevent="filteredList">
          <img src="../assets/icons/magnifying-glass-yellow.svg" alt="search" class="search-icon">
        </button>
      </div>
    </div>
    <div class="nav-right">
      <router-link to="/history"><p>Order History</p></router-link>
      <router-link to="/cart"><img src="../assets/icons/cart-yellow.svg" alt="cart" class="nav-icon"></router-link>
      <div class="cart-quantity">({{ countItems }})</div>
      <button @click="logOut" class="log-out"><img src="../assets/icons/exit-yellow.svg" alt="exit" class="nav-icon"></button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      searchInput: ''
    }
  },
  computed: {
    countItems() {
      return this.$store.state.cart?.totalCartCount
    }
  },
  methods: {
    logOut() {
      localStorage.removeItem('key-anuReeves')
      this.$router.push('/login')
    },
    filteredList() {
      this.$store.dispatch('filteredList', this.searchInput)
    }
  }
}
</script>

<style scoped>

  nav {
    height: 80px;
    width: 95vw;
    display: flex;
    justify-content: space-between;
    position: sticky;
    left: 0;
    top: 0;
    background-color: #000000;
    align-items: center;
  }

  .nav-right {
    position: absolute;
    right: 0;
    padding-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-left {
    display: flex;
    align-items: stretch;
    padding-top: 35px;
  }

  .nav-icon {
    padding-left: 20px;
  }

  .home {
    height: 55px;
    margin: 0 20px;
  }

  .home-btn-wrapper {
    height: 55px;
    cursor: pointer;
  }

  .cart-quantity {
    padding: 0 1rem;
  }

  .log-out {
    background-color: transparent;
    border: none;
  }

  .search-button {
    background-color: transparent;
    border: none;
    position: absolute;
    right: 11px;
    bottom: 40px;
    cursor: pointer;
  }

@media screen and (max-width: 1024px) {
  nav {
    display: none;
  }
  .input-button-wrap {
    display: flex;
    justify-content: center;
    position: relative;
  }
}

</style>

