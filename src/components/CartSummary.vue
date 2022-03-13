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

.wrapper-summary {
  border-color: #ffe81f;
  border-width: 3px;
  width: 261px;
  height: 166px;
}

.summary-head {
  background-color: #ffe81f;
  color: #000000;
  width: 261px;
  height: 43px;
  font-weight: bold;
}
.summary-content {
  display: flex;
}

.checkout-btn {
    background-color: #ffe81f;
    border-color: #ffe81f;
    border-radius: 5px;
    align-items: center;
    padding: 0.5rem;
    text-transform: uppercase;
    font-weight: bold;
}

.checkout-btn:hover {
    background-color: #000000;
}

</style>