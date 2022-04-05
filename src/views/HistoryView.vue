<template>
  <div class="order-wrapper">
    <h4 class="order-head">
      Order History
    </h4>
    <OrderComponent
      v-for="order in OrderHistory"
      :key="order"
      :order="order"
    />
  </div>
</template>

<script>
import OrderComponent from '../components/OrderComponent'

export default {
  computed: {
    OrderHistory() {
      return this.$store.state.history
    }
  },
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
  padding-top: 40px;
  padding-bottom: 10px;
  max-width: 90vw;
  margin: auto;
  text-align: left;
  font-weight: bold;
}
</style>