<template>
  <nav>
    <div class="nav-left">
        <div @click="router.push('/')" class="home-btn-wrapper">
          <img src="../assets/icons/falcon-yellow.svg" alt="home" class="home">
        </div>
      <input type="text" class="search" placeholder="Search" />
    </div>
    <div class="nav-right">
      <router-link to=""><p>Order History</p></router-link>
<<<<<<< HEAD
      <router-link to="/cart"><img src="../assets/icons/cart-yellow.svg" alt="cart" class="nav-icon"></router-link>
      <div class="cart-quantity">(0)</div>
      <router-link to="/login"><img src="../assets/icons/exit-yellow.svg" alt="exit" class="nav-icon"></router-link>
=======
      <router-link to=""><img src="../assets/icons/cart-yellow.svg" alt="cart" class="nav-icon"></router-link>
      <div class="cart-quantity">({{ countItems }})</div>
      <router-link to=""><img src="../assets/icons/exit-yellow.svg" alt="exit" class="nav-icon"></router-link>
>>>>>>> develop
    </div>
  </nav>
</template>


<script>
export default {
    computed: {
      countItems() {
        return this.$store.state.cart?.totalCartCount
      }
    }
}
</script>

<style scoped>

  nav {
    height: 80px;
    width: 100vw;
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

</style>

