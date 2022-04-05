<template>
	<div class="wrapper">
    <div class="order-wrapper">
      <div class="order-number"># {{ order.orderNumber }}</div>
      <div>Items: {{ order.totalCartCount }}</div>
      <button class="view-order">view order</button>
      <div class="total-amount">R{{ order.totalCartAmount }}</div>
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


<style scoped>
.wrapper {
  display: block;
  max-width: 90vw;
  margin: auto;

}

.order-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ffe81f;
  text-align: left;
  padding: 15px 0;
}

.view-order {
  background-color: #ffe81f;
  border-color: #ffe81f;
  border-radius: 5px;
  align-items: center;
  padding: 0.5rem;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
}


@media screen and (min-width: 1440px) {
  .cart-wrapper {
    display: block;
    min-width: 972px;
  }
}

</style>