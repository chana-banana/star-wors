<template>
  <div>
      <div class="item-wrapper" v-if="order" >
        <div>{{ order.OrderNumber }}</div>
        <div>{{ order.id }}</div>
        <div>{{ order.count }}</div>
        <div>{{ order.price }}</div>
        <div>{{ order.totalCartAmount }}</div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    order: Object
  }
}

</script>

