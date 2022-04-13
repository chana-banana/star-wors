<template>
	<div class="wrapper">
    <div class="order-wrapper">
      <table>
        <tr>
          <th class="column-1">
            <div class="order-number"># {{ order.orderNumber }}</div>
          </th>
          <th class="column-2">
            <div>Items: {{ order.totalCartCount }}</div>
          </th>
          <th class="column-3">
            <button @click="viewOrder" class="view-order">view order</button>
          </th>
          <th class="column-4">
            <div class="total-amount">R{{ order.totalCartAmount }}</div>
          </th>
        </tr>
        </table>
    </div>
	</div>
</template>

<script>
  export default {
    props: {
      order: Object
    },
    methods: {
      viewOrder() {
        this.$router.push({ name: 'OrderView', params: { id: this.order.orderNumber } })
      }
    }
  }
</script>


<style scoped>
table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border-bottom: 2px solid #ffe81f;
}

.column-1 {
  padding: 20px 0;
  text-align: left;
}

.column-2 {
  text-align: left;
}

.column-4 {
  text-align: right;
}

.wrapper {
  display: block;
  max-width: 90vw;
  margin: auto;
}

.order-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
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