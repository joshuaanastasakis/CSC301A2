<template>
  <div class="item">
    <div class="container">
      <button @click="handleDelete(item.id)" class="deleteButton">&times</button>
      <h3>{{item.name}}</h3>
      <p>{{item.price}}</p>
      <p>{{item.quantity}}</p>
      <p>{{item.total}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {item: {}},
  data () {
    return {
      item: null
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
      console.log("emitting subtotal");
      this.$emit('itemSubtotal', this.promotions.filter(p => p.valid).reduce((prev, next) => prev + next.value, 0));
    },
    validatePromoCode(code) {
      const sameCount = this.promotions.filter(p => p.text===code).length;
      console.log(sameCount);
      return (sameCount===1 && code.length===10) || false;
    },
  },
  created: function() {
    this.updateSubtotal();
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
  flex-direction: column;
  justify-content: space-around;

}

.addItembutton {
  margin-inline: 8px;
  height: 35px;
  background: orange;
}

.addItembutton:hover {
  cursor: pointer;
}

.deleteButton {
  color: red;
  font-size: 30px;
  margin-right: 8px;
}

.deleteButton:hover {
  cursor: pointer;
}


</style>