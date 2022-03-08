<template>
  <nav>
    <div class="nav-left">
      <router-link id="home" to="/"><img src="../assets/icons/falcon-yellow.svg" alt="home" class="home"></router-link>
      <input type="text" class="search" placeholder="Search" />
    </div>
    <div class="nav-right">
      <router-link id="history" to=""><p>Order History</p></router-link>
      <router-link id="cart" to=""><img src="../assets/icons/cart-yellow.svg" alt="cart" class="nav-icon"></router-link>
      <router-link id="exit" to=""><img src="../assets/icons/exit-yellow.svg" alt="exit" class="nav-icon"></router-link>
    </div>
  </nav>
</template>

<style scoped>
  nav {
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    position: sticky;
    left: 0;
    top: 0;
    background-color: black;
  }

  .nav-right {
    position: absolute;
    right: 0px;
    padding-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-icon {
    padding-left: 20px;
  }

  .home {
    height: 55px;
    margin: 0 20px 0 20px;
  }

</style>

