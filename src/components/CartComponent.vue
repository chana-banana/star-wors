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
    .item-wrapper {
        display: inline-flex;
    }

    .quantity-wrapper {
        display: flex;
    }
</style>