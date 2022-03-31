<template>
    <div class="cart-wrapper">
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
        CartItems(){
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

</style>