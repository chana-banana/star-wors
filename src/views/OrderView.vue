<template>
  <div>
    <div>hallo tis order</div>
    <!-- <OrderDisplay :order="orderItems[index].orderNumber" ></OrderDisplay> -->
  </div>
</template>

<script>
  // import OrderDisplay from '..components/OrderDisplay'

export default {
  props: {
    id: { type: Number, required: true },
  },
  components: {
    // OrderDisplay,
  },
  computed: {
    orderItems() {
      return this.$store.state.history
    }
  },
  mounted() {
    this.$store.dispatch('orderSpecific', this.id)
  }
}
</script>

