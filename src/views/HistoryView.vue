<template>
  <div class="order-wrapper">
    <h4 class="order-head">
      Order History
    </h4>
    <OrderComponent />
  </div>
</template>

<script>
import OrderComponent from '../components/OrderComponent'

export default {
  components: {
    OrderComponent
  }
}
</script>

<style scoped>
.order-wrapper {
    display: block;
}

.order-head {
    border-bottom: 2px solid #ffe81f;
    padding-bottom: 10px;
    max-width: 90vw;
    margin: auto;
    text-align: left;
    font-weight: bold;
    padding-top: 40px;
}
</style>