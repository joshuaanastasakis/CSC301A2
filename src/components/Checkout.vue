<template>
  <div class="checkout">
    <div class="container">
      <h1>Checkout</h1>
      <Promotions />
      <div class="container-subtotal">
        <h2>Subtotal</h2>
        <div class="cart-subtotal">
          <h3>Cart</h3>
          <p>{{cartSubtotal}}</p>
        </div>
      </div>
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
      cartSubtotal: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.checkout {
  width: 30%;
  min-width: 300px;
  max-width: 400px;
}
.container {
  
  display: flex;
  justify-content: left;
  flex-direction: column;
}

.container-subtotal {
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-left: 8px;
  border-bottom: 2px solid grey;
  padding-bottom: 8px;
}

.cart-subtotal {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-inline: 8px 8px;
}

@media only screen and (min-width: 716px) {
  .container {
    border-left: 1px solid black;
  }
}

</style>
