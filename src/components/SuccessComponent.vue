<template>
    <div class="success-wrapper">
        <div>
          <img src="../assets/icons/success-R2D2-yellow.svg" alt="R2D2" class="r2d2">
        </div>
        <div class="success-right">
          <p class="hero-text">Success.. We have received the order we were looking for</p>
          <router-link to="/cart"><button class="back-btn">back to search</button></router-link>
        </div>
    </div>
</template>

<style scoped>
.success-wrapper {
  display: block;
  justify-content: space-between;
  align-items: center;
  max-width: 90vw;
  margin: auto;
  padding-top: 75px;
}

.r2d2 {
  max-width: 145px;
}

.back-btn {
  color: #000000;
  background-color: #ffe81f;
  border-radius: 5px;
  border-color: #ffe81f;
  color: #000000;
  position: relative;
  margin: 0 auto;
  padding: 0.5rem;
  font-weight: bold;
}

.back-btn:hover {
  background-color: #000000;
  border-color: #ffe81f;
  color: #ffe81f;
}

@media screen and (min-width: 768px) {
  .success-wrapper {
    padding-top: 170px;
  }

  .r2d2 {
    min-width: 400px;
    padding-bottom: 50px;
  }

  .hero-text {
    font-size: 2.5rem;
  }
}

@media screen and (min-width: 1440px) {
  .success-wrapper {
    display: flex;
    max-width: 80vw;
  }

  .r2d2 {
    min-width: 460px;
  }
  .success-right {
    max-width: 45vw;
  }
}

@media screen and (min-width: 2560px) {
  .success-wrapper {
    padding-top: 300px;
  }

  .r2d2 {
  min-width: 900px;
  }

  .hero-text {
    font-size: 4rem;
  }

  .success-right {
    max-width: 40vw;
  }
}

  @media screen and (min-width: 3072px) {
    .r2d2 {
  min-width: 1100px;
  }

  .hero-text {
    font-size: 5rem;
  }
}

</style>

