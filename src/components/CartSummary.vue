<template>
    <div>
        <div class="wrapper-summary">
            <div class="summary-head">Summary</div>
            <div class="summary-content">
              <div>Cart Total: &nbsp;</div>
              <div>R400</div>
            </div>
            <button class="checkout-btn">checkout</button>
        </div>
    </div>
</template>

<style scoped>
* {
    font-weight: bold;
}

.wrapper-summary {
  border: 3px solid #ffe81f;
  width: 90vw;
  height: 166px;
  margin: auto;
}

.summary-head {
  background-color: #ffe81f;
  color: #000000;
  height: 43px;
}
.summary-content {
  display: flex;
  padding: 20px;
}

.checkout-btn {
    background-color: #ffe81f;
    border-color: #ffe81f;
    border-radius: 5px;
    align-items: center;
    padding: 0.5rem;
    text-transform: uppercase;
}

.checkout-btn:hover {
    background-color: #000000;
}

</style>