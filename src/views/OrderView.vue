<template>
  <div class="wrapper">
    <div class="btn-wrap">
      <router-link to="/history" >
        <button class="back">back to order history</button>
      </router-link>
    </div>
    <h4 class="header">Order # {{ id }}</h4>
    <div v-for="item in orderLog.items" :key="item.id">
      <table>
        <tr>
        <th class="column-1">
          <div>{{item.id}}</div>
        </th>
        <th class="column-2">
          <div class="count">{{item.count}}</div>
        </th>
        <th class="column-3">
          <div>R{{item.price * item.count}}</div>
        </th>
        </tr>
      </table>
    </div>
    <div class="total" v-if="orderLog" >
      <div>Total: R{{ orderLog.totalCartAmount }}</div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    id: { type: String, required: true },
  },
  computed: {
    orderLog() {
      return this.$store.state.history?.find(order => order.orderNumber == this.id)
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
  text-align: left;
}

.column-2 {
  display: flex;
  text-align: center;
  justify-content: center;
  align-content: center;
  padding: 20px 0;
}

.column-3 {
  text-align: right;
}

.wrapper {
  display: block;
  max-width: 90vw;
  margin: auto;
  font-weight: bold;
}

.count {
  width: 30px;
  border: 1px solid #ffe81f;
  border-radius: 5px;
  padding: 5px;
}

.total {
  padding-top: 25px;
  text-align: right;
}

.header {
  border-bottom: 2px solid #ffe81f;
  padding: 30px 0;
  max-width: 90vw;
  margin: auto;
  text-align: left;
  font-weight: bold;
}

.back {
  background-color: #ffe81f;
  border-color: #ffe81f;
  border-radius: 5px;
  margin-top: 35px;
  padding: 0.25rem 0.5rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
}

.btn-wrap {
  display: flex;
  align-items: left;
}
</style>

