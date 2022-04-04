<template>
    <div class="cart-wrapper">
        <div class="item-wrapper">
            <div class="item-left">
                <img src="../assets/icons/user-outline-yellow.svg" class="user-icon">
                <div class="item-name">{{ item.id }}</div>
            </div>
            <div class="item-middle">
                <button @click.stop="updateCartItemsLess(item.id)" class="quantity-icon"><fa icon="minus" class="fa-quantity-icon" /></button>
                <div class="quantity">{{ item.count }}</div>
                <button @click.stop="updateCartItems(item.id)" class="quantity-icon"><fa icon="plus" class="fa-quantity-icon" /></button>
            </div>
            <div class="item-end">
                <div class="quantity-price">R{{ item.price * item.count }}</div>
                <button @click.stop="removeCartItems(item.id)" class="remove-item"><fa icon="xmark" class="fa-quantity-icon" /></button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            item: Object
        },
        methods: {
            updateCartItems(id) {
                this.$store.dispatch('updateCartItems', id)
            },
            updateCartItemsLess(id) {
                this.$store.dispatch('updateCartItemsLess', id)
            },
            removeCartItems(id) {
                this.$store.dispatch('removeCartItems', id)
            }
        }
    }
</script>

<style scoped>
* {
    font-weight: bold;
    text-align: left;
}

.cart-wrapper {
    display: block;
    max-width: 90vw;
    margin: auto;
}

.item-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #ffe81f;
}

.item-middle, .item-end {
    display: flex;
}

.item-left {
    display: flex;
    justify-content: center;
    align-items: center;
}

.item-name {
    padding: 20px 0;
}

.quantity {
    border-radius: 5px;
    border: 2px solid #ffe81f;
    padding: 5px;
}

.quantity-icon {
    background-color: transparent;
    border: none;
    padding: 0.5rem;
    color: #ffe81f;
    height: 15px;
}

.remove-item {
    background-color: transparent;
    border: none;
    color: #ffe81f;
}

.quantity-icon:hover, .remove-item:hover {
    color: #ffffff;
}

.user-icon {
    display: none;
    width: 41px;
    height: 47px;
    margin-right: 15px;
}

@media screen and (min-width: 1440px) {
    .user-icon {
        display: block;
    }

    .cart-wrapper {
        display: block;
        min-width: 972px;
    }
  }

</style>