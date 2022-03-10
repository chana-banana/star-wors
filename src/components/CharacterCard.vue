<template>
    <div class="card-wrapper">
        <div>
            <h3>Luke Skywalker</h3>
        </div>
        <div class="character-arr">
            <div class="atribute"><h5>Birth Year:</h5><h5 class="arr-result">{{  }}</h5></div>
            <div class="atribute"><h5>Hair Color:</h5><h5 class="arr-result">blond</h5></div>
            <div class="atribute"><h5>Skin Color:</h5><h5 class="arr-result">fair</h5></div>
            <div class="atribute"><h5>Eye Color:</h5><h5 class="arr-result">blue</h5></div>
            <div class="atribute"><h5>Gender:</h5><h5 class="arr-result">male</h5></div>
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
    min-height: 344px;
    border-style: solid;
    border-color: #ffe81f;
    border-radius: 13px;
    border-width: 2px;
    margin: 3rem auto auto auto;
}

h3 {
    padding-top: 1rem;
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
    display: block;
}

.atribute {
    display: flex;
    padding: 0.75rem 0;
}

.arr-result {
    font-weight: 100;
}

</style>