<template>
    <div class="card-wrapper">
        <div>
            <h3>{{ people[0]?.name }}</h3>
        </div>
        <div class="character-arr">
            <div class="atribute"><h5>Birth Year:</h5><h5 class="arr-result">{{ people[0]?.birth_year }}</h5></div>
            <div class="atribute"><h5>Hair Color:</h5><h5 class="arr-result">{{ people[0]?.hair_color }}</h5></div>
            <div class="atribute"><h5>Skin Color:</h5><h5 class="arr-result">{{ people[0]?.skin_color }}</h5></div>
            <div class="atribute"><h5>Eye Color:</h5><h5 class="arr-result">{{ people[0]?.eye_color }}</h5></div>
            <div class="atribute"><h5>Gender:</h5><h5 class="arr-result">{{ people[0]?.gender }}</h5></div>
            <button class="fetch-all" @click="fetchAllCharacters"></button>
        </div>
        <div class="price">
            <h5 class="price-text">R100</h5>
            <button class="add-cart"><fa icon="plus" class="fa-plus" /><img src="../assets/icons/cart-yellow.svg" alt="cart" class="cart-yellow"></button>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                people: [],
            }
        },
        methods: {
            fetchAllCharacters() {
                fetch("https://swapi.dev/api/people")
                .then(response => response.json())
                .then(data => {
                    this.people.push(...data.results)
                })
                console.log(this.people)
            }
        }
    }
</script>


<style scoped>
.fetch-all {
    height: 30px;
    width: 30px;
    background-color: #ffffff;
}

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