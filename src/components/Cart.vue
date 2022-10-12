<template>
  <div class="cart">
    <div class="container">
      <h1>Cart</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      title: "Checkout Price Calculator",
      items: [],
    }
  },
  methods: {
    addItem(id) {
      if (this.promotions.filter(p => !p.valid).length>0 || this.promotions.length===5) return;
      this.promotions.push({text: "", id, value: 10});
    },
    deleteItem(id) {
      this.promotions = this.promotions.filter(promo => promo.id !==id);
      this.updateSubtotal();
      console.log("deleted item "+id);
    },
    getLatestItemId() {
      return this.promotions.map(promo => promo.id).sort()[this.promotions.length-1]+1 || 1;
    },
    handleItemChange(item) {
      console.log(promo.text);
      let index = this.promotions.indexOf(promo);
      this.promotions[index].valid=this.validatePromoCode(promo.text);
      this.updateSubtotal(); // if (this.promotions[index].valid) this.updateSubtotal();
    },
    updateSubtotal() {
      this.$emit('subtotal', this.promotions.filter(p => p.valid).reduce((prev, next) => prev + next.value, 0));
    },
    validatePromoCode(code) {
      const sameCount = this.promotions.filter(p => p.text===code).length;
      console.log(sameCount);
      return (sameCount===1 && code.length===10) || false;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.cart {
  width: 70%;
  min-width: 300px;
  max-width: 400px;
  /* border-right: 1px solid black; */
}

.container {
  display: flex;
  justify-content: space-around;

}


</style>
