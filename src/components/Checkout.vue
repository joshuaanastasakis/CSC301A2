<template>
  <div class="checkout">
    <div class="container">
      <h1>Checkout</h1>
      <Promotions @subtotal="handlePromoUpdate"/>
      <Subtotal :cartSubtotal="cartSubtotal"
                :promoSubtotal="promo"
                :deliverySubtotal="cartQuantity * 30"
                :taxSubtotal="cartSubtotal * 1.13"
                />
      <div class="total">
        <div class="totalRow">
          <h2>Total</h2>
          <p>${{this.getTotal().toFixed(2)}}</p>
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
  props: {cartSubtotal: Number, cartQuantity: Number},
  data () {
    return {
      title: "Checkout Price Calculator",
      cart: this.cartSubtotal,
      promo: 0,
      delivery: this.cartQuantity * 30 || 0,
      tax: this.cartSubtotal * 1.13 || 0,
      total: 0,
    }
  },
  methods: {
    getCart() {
      return this.cartSubtotal;
    },
    getDelivery() {
      return this.cartQuantity*30;
    },
    getTax() {
      return this.cartSubtotal * 1.13;
    },
    handleCartUpdate(value) {
      console.log(value);
      this.cart=value || 0;
      this.updateTotal();
    },
    handlePromoUpdate(value) {
      console.log(value);
      this.promo=value || 0;
      this.updateTotal();
    },
    handleDeliveryUpdate(value) {
      console.log(value);
      this.delivery=value || 0;
      this.updateTotal();
    },
    handleTaxUpdate(value) {
      console.log(value);
      this.tax=value || 0;
      this.updateTotal();
    },
    handleCheckout() {
      console.log("checking out, total is "+this.total);
    },
    updateTotal() {
      // this.total = Math.max(this.cartSubtotal+this.delivery+this.tax - this.promo, 0);
      this.total = Math.max(this.getCart()+this.getDelivery()+this.getTax() - this.promo, 0);
    },
    getTotal() {
      this.updateTotal();
      return this.total;
    }
  },
  created: function() {
    this.updateTotal();
  },
  watch: {
    cartSubtotal: function() {
      if (this.cartSubtotal) {
        console.log("in Checkout, cart subtotal updated");
        this.updateTotal();
      }
    },
    promo: function() {
      if (this.promo) {
        console.log("in Checkout, promo subtotal updated");
        this.updateTotal();
      }
    },
    cartQuantity: function() {
      if (this.cartQuantity) {
        console.log("in Checkout, cart quantity updated");
        this.updateTotal();
      }
    },
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
  margin-inline: 8px;
  /* width: calc(100% - 8px); */
  background: #4EBA3C;
  height: 35px;
}

.totalButton:hover {
  cursor: pointer;
}

</style>
