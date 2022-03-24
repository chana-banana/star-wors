<template>
    <div>
        <div class="bio-wrapper">
            <h4>{{ title }}</h4>
             <div class="atribute"><h5>Label: &nbsp;</h5><h5 class="arr-result">{{ data.title }}xx</h5></div>
            </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        data: Object
    },
    onMount() {
        this.$store.dispatch('compareCharacterFilms')
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

/* accordian styling */
.accordion {
  background-color: #ffe81f;
  color: #000000;
  cursor: pointer;
  padding: 18px;
  width: 278px;
  text-align: left;
  font-weight: bold;
  display: block;
  border: none;
  outline: none;
  margin: auto;
}


/* .active, .accordion:hover {

} */

.panel {
  padding: 0 1rem;
  background-color: transparent;
  border: 2px solid #ffe81f;
  display: none;
  overflow: hidden;
  /* width: 278px */
  text-align: left;
}
</style>