<template>
  <div class="promotions">
    <div class="container">
      <div class="header">
        <h2>{{title}}</h2>
        <button @click="addPromotion(getLatestPromoId())">+</button>
        <p>{{promotions.length}} / 5</p>
      </div>
      <div class="promo-row" :id="promo.id" v-for="promo in promotions">
        <p>Promo Code</p>
        <input type="text"
               :class="{isValid: promo.valid}"
               placeholder="Enter code" 
               v-model="promo.text" 
               @input="handlePromoChange(promo)" />
        <span @click="deletePromotion(promo.id)" class="deleteRow">&times</span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Promotions',
  data () {
    return {
      title: "Promotions",
      promotions: []
    }
  },
  methods: {
    addPromotion(id) {
      if (this.promotions.filter(p => !p.valid).length>0 || this.promotions.length===5) return;
      this.promotions.push({text: "", id, value: 10});
    },
    deletePromotion(id) {
      this.promotions = this.promotions.filter(promo => promo.id !==id);
      this.updateSubtotal();
      console.log("deleted item "+id);
    },
    getLatestPromoId() {
      return this.promotions.map(promo => promo.id).sort()[this.promotions.length-1]+1 || 1;
    },
    handlePromoChange(promo) {
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
.promotions {
  width: calc(100% - 8px);
  margin-left: 8px;
}
.container {
  display: flex;
  justify-content: left;
  flex-direction: column;
  border-bottom: 2px solid grey;
  padding-bottom: 8px;
}

.header {
  display: flex;
  flex-direction: row;
}

.header > p {
  margin-left: auto;
}

button {
  height: 50%;
  margin: auto 0px auto 8px;
}

input {
  border: 1px solid grey;
  background: lightcoral;
}

.promo-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: left;

  /* border: 1px solid red; */
  border: 1px solid grey;
  border-radius: 5px;
  /* display: block; */
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
}

.promo-row > p {
  margin-left: 8px;

  color: #3C3C3C;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
}

.promo-row > input {
  margin: auto;
  width: 160px;
  height: 20px;
}

.deleteRow {
  color: red;
  font-size: 30px;
  margin-right: 8px;
}

.deleteRow:hover {
  cursor: pointer;
}

.isValid {
  background: lightgreen;
}

</style>
