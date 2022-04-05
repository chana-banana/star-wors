<template>
    <div class="component-wrapper">
        <div class="wrapper-summary">
            <div class="summary-head">
              <h5 class="summary-text">Summary</h5>
            </div>
            <div class="summary-content">
              <div>Cart Total: &nbsp;</div>
              <div>R{{ totalCartAmount }}</div>
            </div>
            <!-- <router-link to="/success"> -->
              <button @click.stop="storeOrder" class="checkout-btn">checkout</button>
            <!-- </router-link> -->
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      item: Object
    },
    computed: {
      totalCartAmount() {
        return this.$store.state.cart?.totalCartAmount
      }
    },
    methods: {
      storeOrder() {
        this.$store.dispatch('storeOrder')
      }
    }
  }
</script>

<style scoped>
* {
  font-weight: bold;
}
.component-wrapper {
  padding-top: 50px;
}

.wrapper-summary {
  border: 3px solid #ffe81f;
  width: 90vw;
  height: 166px;
  margin: auto;
}

.summary-head {
  background-color: #ffe81f;
  height: 43px;
  text-align: left;
  padding: 10px 20px;
}
.summary-content {
  display: flex;
  padding: 20px;
}

.summary-text {
  color: #000000;
}

.checkout-btn {
    background-color: #ffe81f;
    border-color: #ffe81f;
    border-radius: 5px;
    align-items: center;
    padding: 0.5rem;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
}

.checkout-btn:hover {
    background-color: #000000;
}

@media screen and (min-width: 1440px) {
  .wrapper-summary {
    width: 508px;
    height: 166px;
  }
}

</style>