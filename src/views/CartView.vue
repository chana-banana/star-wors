<template>
    <div>
        <CartComponent />
        <CartSummary />
    </div>
</template>

<script>
    import CartComponent from '../components/CartComponent'
    import CartSummary from '../components/CartSummary'

    export default {
    components: {
    CartComponent,
    CartSummary,
  }
}

</script>