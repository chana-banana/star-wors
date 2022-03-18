<template>
    <div>
        <div class="bio-wrapper" v-if="person">
            <h4>{{ person.name }}</h4>
            <div class="atribute"><h5>Birth Year: &nbsp;</h5><h5 class="arr-result">{{ person.birth_year }}</h5></div>
            <div class="atribute"><h5>Hair Color: &nbsp;</h5><h5 class="arr-result">{{ person.hair_color }}</h5></div>
            <div class="atribute"><h5>Skin Color: &nbsp;</h5><h5 class="arr-result">{{ person.skin_color }}</h5></div>
            <div class="atribute"><h5>Eye Color: &nbsp;</h5><h5 class="arr-result">{{ person.eye_color }}</h5></div>
            <div class="atribute"><h5>Gender: &nbsp;</h5><h5 class="arr-result">{{ person.gender }}</h5></div>
            <div class="atribute"><h5>Starships: &nbsp;</h5><h5 class="arr-result">{{ person.starships }}</h5></div>

            <div class="price-wrapper">
            <div class="price-text">
            <div>R100</div>
            </div>
            <button @click.stop="addItemToCart(person.name)" class="add-cart">
            <fa icon="plus" class="fa-plus" />
            <img src="../assets/icons/cart-yellow.svg" alt="cart" class="cart-yellow">
            <img src="../assets/icons/cart-black.svg" alt="cart" class="cart-black">
            </button>
            </div>
        </div>
        <!-- <div class="container vue">
            <div v-for="(group, name) in groups">
                <a @click="group.open = !group.open" v-text="group.name"></a>
                    <ul v-show="group.open">
                        <li v-for="item in group.items" v-text="item"></li>
                    </ul>
                <hr>
            </div>
        </div> -->
        <div @click="toggleAccordian" class="accordian-wrapper">
            <button class="accordion">Films</button>
                <div class="panel">
                    <p>All the films</p>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        person: Object
    },
    methods: {
        addItemToCart(name) {
            this.$store.dispatch('addItemToCart', name)
        },
            toggleAccordian() {
      var acc = document.getElementsByClassName("accordion");
      var i;

      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click",
        function() {
          this.classList.toggle("active");        // Toggle between adding and removing the "active" class, to highlight the button that controls the panel
          var panel = this.nextElementSibling;    // Toggle between hiding and showing the active panel
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
            panel.style.display = "block";
          }
        });
      }
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

/* .accordian-wrapper {
  display: block;
  justify-content: center;
  align-items: center;
} */

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