<template>
    <div class="card-wrapper" @click="viewCharacter">
        <div>
            <h4>{{ person.name }}</h4>
        </div>
        <div class="character-arr">
            <div class="atribute"><h5>Birth Year: &nbsp;</h5><h5 class="arr-result">{{ person.birth_year }}</h5></div>
            <div class="atribute"><h5>Hair Color: &nbsp;</h5><h5 class="arr-result">{{ person.hair_color }}</h5></div>
            <div class="atribute"><h5>Skin Color: &nbsp;</h5><h5 class="arr-result">{{ person.skin_color }}</h5></div>
            <div class="atribute"><h5>Eye Color: &nbsp;</h5><h5 class="arr-result">{{ person.eye_color }}</h5></div>
            <div class="atribute"><h5>Gender: &nbsp;</h5><h5 class="arr-result">{{ person.gender }}</h5></div>
        </div>
        <div class="price-wrapper">
            <div class="price-text">
                <div>R{{ person.price }}</div>
            </div>
            <button @click.stop="addItemToCart(person.name)" class="add-cart">
                <fa icon="plus" class="fa-plus" />
                <img src="../assets/icons/cart-yellow.svg" alt="cart" class="cart-yellow">
                <img src="../assets/icons/cart-black.svg" alt="cart" class="cart-black">
            </button>
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
        },
        viewCharacter() {
            this.$router.push({ name: 'DisplayView', params: { id: this.person.name } })
        }
    }
}
</script>

<style scoped>
.card-wrapper {
    width: 243px;
    min-height: 344px;
    border-style: solid;
    border-color: #ffe81f;
    border-radius: 13px;
    border-width: 2px;
    margin: 1rem 3rem;
    padding: 1rem;
    position: relative;
    cursor: pointer;
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

.price-text {
    font-weight: bold;
}

</style>