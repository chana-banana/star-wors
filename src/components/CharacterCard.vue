<template>
    <div class="card-wrapper">
        <div>
            <h3>Luke Skywalker</h3>
        </div>
        <div class="character-arr">
            <h5>Birth Year:</h5><h5>19BBY</h5>
        </div>
        <div class="price">
            <h5 class="price-text">R100</h5>
            <button class="add-cart"><fa icon="plus" class="fa-plus" /><img src="../assets/icons/cart-yellow.svg" alt="cart" class="cart-yellow"></button>
        </div>

    </div>
</template>

<style scoped>
.card-wrapper {
    width: 243px;
    height: 344px;
    border-style: solid;
    border-color: #ffe81f;
    border-radius: 13px;
    border-width: 2px;
    margin: auto;
}

h3, h5 {
    padding-left: 1rem;
}

.price {
    background-color: #ffe81f;
    width: 4.4375em;
    height: 2.125em;
    border-radius: 0.3125em;
    margin-left: 1rem;
    display: flex;
    justify-content: space-between;
}

.price-text {
    color: #000000;
}
.add-cart {
    background-color: #000000;
    width: 4.4375em;
    height: 2.125em;
    border-radius: 0.3125em;
    border-color: #ffe81f;
}

.cart-yellow {
    height: 18px;
    margin: 5px;
}

.character-arr {
    display: flex;
}

</style>