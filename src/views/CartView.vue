<template>
    <div class="cart-wrapper">
        <div class="cart-head">Cart</div>
        <CartComponent
          v-for="item in CartItems"
          :key="item"
          :item="item"
        />
        <CartSummary/>
    </div>
</template>

<script>
import CartComponent from '../components/CartComponent'
import CartSummary from '../components/CartSummary'

export default {
    computed: {
        CartItems() {
                return this.$store.state.cart?.items
        }
    },
    components: {
        CartComponent,
        CartSummary,
    }
}

</script>

<style>
.cart-wrapper {
    display: block;
}

.cart-head {
    border-bottom: 2px solid #ffe81f;
    padding-bottom: 10px;
    max-width: 90vw;
    margin: auto;
    text-align: left;
    font-weight: bold;
    padding-top: 40px;
}
</style>