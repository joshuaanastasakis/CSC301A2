<template>
  <div class="subtotal">
    <div class="container">
      <h2 class="header">{{title}}</h2>
      <div class="subtotal-row">
        <h3>Cart</h3>
        <p>${{cartSubtotal.toFixed(2) || 0}}</p>
      </div>
      <div class="subtotal-row">
        <h3>Promos</h3>
        <p>-${{promoSubtotal.toFixed(2) || 0}}</p>
      </div>
      <div class="subtotal-row">
        <h3>Delivery</h3>
        <p>${{deliverySubtotal.toFixed(2) || 0}}</p>
      </div>
      <div class="subtotal-row">
        <h3>Tax</h3>
        <p>${{taxSubtotal.toFixed(2) || 0}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  function validatePromoCode(code) {
    return code.length===10 || false;
  }
export default {
  name: 'Subtotal',
  props: {cartSubtotal: Number, promoSubtotal: Number, deliverySubtotal: Number, taxSubtotal: Number},
  data () {
    return {
      title: "Subtotal",
    }
  },
  methods: {
    addPromotion(id) {
      if (this.promotions.filter(p => !p.valid).length>0 || this.promotions.length===5) return;
      this.promotions.push({text: "", id});
    },
    deletePromotion(id) {
      this.promotions = this.promotions.filter(promo => promo.id !==id);
      console.log("deleted item "+id);
    },
    getLatestPromoId() {
      return this.promotions.map(promo => promo.id).sort()[this.promotions.length-1]+1 || 1;
    },
    handlePromoChange(promo) {
      console.log(promo.text);
      let index = this.promotions.indexOf(promo);
      this.promotions[index].valid=validatePromoCode(promo.text);
    }
  },
  created: function() {
    console.log(this.cartSubtotal);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.subtotal {
  width: calc(100% - 8px);
  margin-left: 8px;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 2px solid grey;
  padding-bottom: 8px;
}

.header {
  display: flex;
  flex-direction: row;
}

.subtotal-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
}

</style>
