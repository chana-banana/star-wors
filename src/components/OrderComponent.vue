<template>
	<div class="wrapper">
    <div class="order-wrapper">
      <div class="order-number">{{ orderNumber }}orderNumber</div>
      <button class="view-order">view order</button>
      <div class="total-amount">R{{ totalCartAmount }}totalCartAmount</div>
    </div>
	</div>
</template>



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
}

@media screen and (min-width: 1440px) {
  .cart-wrapper {
    display: block;
    min-width: 972px;
  }
}

</style>