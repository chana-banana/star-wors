<template>
  <div>
    <div class="bio-wrapper" v-if="person">
        <div class="column head">
            <h4 class="name">{{ person.name }}</h4>
        </div>
        <div class="column">
            <div class="atribute"><h5>Birth Year: &nbsp;</h5><h5 class="arr-result">{{ person.birth_year }}</h5></div>
            <div class="atribute"><h5>Hair Color: &nbsp;</h5><h5 class="arr-result">{{ person.hair_color }}</h5></div>
            <div class="atribute"><h5>Skin Color: &nbsp;</h5><h5 class="arr-result">{{ person.skin_color }}</h5></div>
        </div>
        <div class="column">
            <div class="atribute"><h5>Eye Color: &nbsp;</h5><h5 class="arr-result">{{ person.eye_color }}</h5></div>
            <div class="atribute"><h5>Gender: &nbsp;</h5><h5 class="arr-result">{{ person.gender }}</h5></div>
            <div class="price-wrapper">
                <div class="price-text">
                    <div>R{{ person.price }}</div>
                </div>
                <button @click.stop="addItemToCart" class="add-cart">
                    <fa icon="plus" class="fa-plus" />
                    <img src="../assets/icons/cart-yellow.svg" alt="cart" class="cart-yellow">
                    <img src="../assets/icons/cart-black.svg" alt="cart" class="cart-black">
                </button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        person: Object,
    },
    methods: {
        addItemToCart() {
            this.$store.dispatch('addItemToCart', this.person)
        }
    }
}

</script>

<style scoped>
.bio-wrapper {
    width: 278px;
    min-height: 344px;
    border-style: solid;
    border-color: #ffe81f;
    border-width: 2px;
    margin: 2rem auto;
    padding: 1rem;
    position: relative;
}

.price-wrapper {
    height: 2.125em;
    border-radius: 0.3125em;
    width: calc(100% - 2rem);
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 1rem;
}

.price-text {
    background-color: #ffe81f;
    color: #000000;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 0.5rem;
    font-weight: bold;
}
.add-cart {
    background-color: #000000;
    border-radius: 5px;
    border-color: #ffe81f;
    color: #ffe81f;
    display: flex;
    align-items: center;
    padding: 0.5rem;
}

.add-cart:hover {
    background-color: #ffe81f;
}

.add-cart:hover .cart-yellow {
    display: none;
}

.add-cart:hover .cart-black, .add-cart:hover .fa-plus {
    display: inline-block;
    color: #000000;
}

.cart-black {
    display: none;
}

.cart-yellow, .cart-black {
    height: 18px;
    margin: 5px;
}

.atribute {
    display: flex;
    padding: 0.75rem 0;
}

.arr-result {
    font-weight: 100;
}

@media screen and (min-width: 768px) {
    .bio-wrapper {
        width: 90vw;
        display: flex;
        min-height: 207px;
        justify-content: space-between;
    }
    .column {
        padding: 30px;
    }
    .name {
        font-size: 3rem;
    }
    .price-wrapper {
        margin-top: 20px;
        position: relative;
        bottom: 0;
    }
    .price-text {
        margin-right: 20px;
    }
    .head {
        margin: auto 0;
    }
}

</style>
