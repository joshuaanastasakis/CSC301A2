<template>
  <div class="checkout">
    <div class="container">
      <h1>Checkout</h1>
      <Promotions @subtotal="handlePromoUpdate"/>
      <Subtotal :cartSubtotal="cartSubtotal"
                :promoSubtotal="promoSubtotal"
                :deliverySubtotal="deliverySubtotal"
                :taxSubtotal="taxSubtotal"
                />
      <div class="total">
        <div class="totalRow">
          <h2>Total</h2>
          <p>${{total}}</p>
        </div>
        <button @click="handleCheckout()" class="totalButton">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
import Promotions from './Promotions.vue';
import Subtotal from './Subtotal.vue';

export default {
  name: 'Checkout',
  components: {Promotions, Subtotal},
  data () {
    return {
      title: "Checkout Price Calculator",
      cartSubtotal: 0,
      promoSubtotal: 0,
      deliverySubtotal: 0,
      taxSubtotal: 0,
      total: 0,
    }
  },
  methods: {
    handleCartUpdate(value) {
      console.log(value);
      this.cartSubtotal=value || 0;
      this.updateTotal();
    },
    handlePromoUpdate(value) {
      console.log(value);
      this.promoSubtotal=value || 0;
      this.updateTotal();
    },
    handleDeliveryUpdate(value) {
      console.log(value);
      this.deliverySubtotal=value || 0;
      this.updateTotal();
    },
    handleTaxUpdate(value) {
      console.log(value);
      this.taxSubtotal=value || 0;
      this.updateTotal();
    },
    handleCheckout() {
      console.log("checking out, total is "+this.total);
    },
    updateTotal() {
      this.total = Math.max(this.cartSubtotal+this.deliverySubtotal+this.taxSubtotal - this.promoSubtotal, 0);
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

.total {
  display: flex;
  justify-content: left;
  flex-direction: column;
}

.totalRow {
  display: flex;
  flex-direction: row;
  margin-left: 8px;
  justify-content: space-between;
}

.totalButton {
  margin-left: 8px;
  background: #4EBA3C;
  height: 35px;
}

.totalButton:hover {
  cursor: pointer;
}

</style>
