<template>
  <div class="checkout">
    <div class="container">
      <h1>Checkout</h1>
      <Promotions />
    </div>
  </div>
</template>

<script>
import Promotions from './Promotions.vue';

export default {
  name: 'Checkout',
  components: {Promotions},
  data () {
    return {
      title: "Checkout Price Calculator",

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.checkout {
  width: 50%;
  min-width: 300px;
  max-width: 400px;
}
.container {

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

@media only screen and (min-width: 616px) {
  .container {
    border-left: 1px solid black;
  }
}

</style>
