<template>
    <div>
        <div class="r2d2-wrapper">
          <img src="../assets/icons/success-R2D2-yellow.svg" alt="R2D2" class="r2d2">
        </div>
        <div>
          <p class="hero-text">Success.. We have received the order we were looking for</p>
          <button class="back-btn"><router-link to="/cart">back to search</router-link></button>
        </div>
    </div>
</template>

<style>
.r2d2-wrapper {
    display: block;
    justify-content: center;
    align-items: center;
  }

.back-btn {
    background-color: #ffe81f;
    border-radius: 5px;
    border-color: #ffe81f;
    color: #000000;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    font-weight: bold;
}

.back-btn:hover {
    background-color: #000000;
    border-color: #ffe81f;
    color: #ffe81f;
}
</style>

