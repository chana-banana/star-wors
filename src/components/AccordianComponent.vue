<template>
    <div>
        <div v-if="items.length > 0" class="bio-wrapper">
            <div class="title-div">
                <img src="../assets/icons/plus-solid-black.svg" class="plus">
                <h5 @click="notVisible" class="title">{{ title }}</h5>
            </div>
            <div v-if="isVisible">
                <div
                    v-for="item in items" :key="item"
                    class="isVisible">
                    {{ item }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isVisible: false
        }
    },
    props: {
        title: String,
        items: Array
    },
    methods: {
        notVisible() {
            this.isVisible = !this.isVisible
        }
    }
}
</script>

<style scoped>
.bio-wrapper {
    width: 278px;
    margin: 2rem auto;
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

.isVisible {
    border: 1px solid #ffe81f;
    display: flex;
    padding: 1rem;
}

.title {
    background-color: #ffe81f;
    color: #000000;
    padding: 1rem;
}

.title-div {
    position: relative;
}

.arr-result {
    font-weight: 100;
}

.plus {
    position: absolute;
    width: 15px;
    right: 15px;
    bottom: 18px;
}

@media screen and (min-width: 768px) {
    .bio-wrapper {
        width: 40vw;
    }
}

</style>