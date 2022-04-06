<template>
  <div class="wrapper">
    <div class="btn-wrap">
      <router-link to="/history" >
        <button class="back">back to order history</button>
      </router-link>
    </div>
    <h4 class="header">Order # {{ id }}</h4>
    <div>
      <div class="items" v-for="item in orderLog.items" :key="item.id">
        <div>{{item.id}}</div>
        <div class="count">{{item.count}}</div>
        <div>R{{item.price * item.count}}</div>
      </div>
      <div class="total" v-if="orderLog" >
        <div>Total: R{{ orderLog.totalCartAmount }}</div>
      </div>
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
.wrapper {
  display: block;
  max-width: 90vw;
  margin: auto;
  font-weight: bold;
}
.items {
  border-bottom: 2px solid #ffe81f;
  padding: 15px 0;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.count {
  border: 1px solid #ffe81f;
  border-radius: 5px;
  padding: 10px;
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

