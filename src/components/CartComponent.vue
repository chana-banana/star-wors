<template>
    <div class="cart-wrapper">
        <div>Cart</div>
        <div class="item-wrapper">
            <div class="item-icon"></div>
            <div class="item-name">Luke Skywalker</div>
            <div class="quantity-wrapper">
                <button class="quantity-icon"><fa icon="minus" class="fa-quantity-icon" /></button>
                <div class="quantity">02</div>
                <button class="quantity-icon"><fa icon="plus" class="fa-quantity-icon" /></button>
            </div>
            <div class="quantity-price">R200</div>
            <button class="remove-item"><fa icon="xmark" class="fa-quantity-icon" /></button>
        </div>
    </div>
</template>

<style scoped>
.cart-wrapper {
    display: block;
}

.item-wrapper {
    display: inline-flex;
}

.quantity-wrapper {
    display: flex;
}

.quantity {
    border-radius: 5px;
    border: 1px solid #ffe81f;
    border-width: 2px;
    background-color: transparent;
    padding: 5px;
}

.quantity-icon, .remove-item {
    background-color: transparent;
    border: none;
    align-items: center;
    padding: 0.5rem;
    color: #ffe81f;
    height: 15px;
}

.quantity-icon:hover, .remove-item:hover {
    color: #ffffff;
}


</style>