<template>
    <div class="cart-wrapper">
        <div class="cart-head">Cart</div>
        <div class="item-wrapper">
            <div class="item-left">
                <img src="../assets/icons/user-outline-yellow.svg" class="user-icon">
                <div class="item-name">{{}}name of character</div>
            </div>
            <div class="item-middle">
                <button class="quantity-icon"><fa icon="minus" class="fa-quantity-icon" /></button>
                <div class="quantity">02</div>
                <button class="quantity-icon"><fa icon="plus" class="fa-quantity-icon" /></button>
            </div>
            <div class="item-end">
                <div class="quantity-price">R200</div>
                <button class="remove-item"><fa icon="xmark" class="fa-quantity-icon" /></button>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        props: {
            person: Object
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
    padding: 30px 0;
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

.cart-head {
    border-bottom: 2px solid #ffe81f;
    padding-bottom: 10px;
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