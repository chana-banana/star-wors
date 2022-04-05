<template>
  <div>
    <div>{{ order.OrderNumber }}</div>
      <div class="item-wrapper" v-if="order" >
        <div>{{ order.id }}</div>
        <div>{{ order.count }}</div>
        <div>{{ order.price }}</div>
      </div>
    <div>{{ order.totalCartAmount }}</div>
  </div>
</template>