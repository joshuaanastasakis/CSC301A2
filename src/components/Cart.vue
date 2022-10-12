''<template>
  <div class="cart">
    <div class="container">
      <h1>Cart</h1>
      <button @click="addItem()" class="addItembutton" :disabled="newItemName==='' || !newItemQuantity || !newItemPrice">Add Item</button>
      <div class="newItemContainer">
        <input class="itemInput" type="text" placeholder="Item Name" v-model="newItemName"/>
        <input class="itemInput" type="number" placeholder="Quantity" v-model="newItemQuantity"/>
        <input class="itemInput" type="number" placeholder="Price" v-model="newItemPrice"/>
      </div>
      <h5 class="emptyItemsList" v-if="items.length===0">Nothing</h5>
      <table v-if="items.length>0">
        <thead>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </thead>
        <tbody>
          <tr class="item-row" :id="item.id" v-for="item in items">
            <td class="itemName">{{item.name}}</td>
            <td class="itemQuantity">
              <button class="quantityButton" @click="handleDecreaseQuantity(item.id)">-</button>
              <p>{{item.quantity || 0}}</p>
              <button class="quantityButton" @click="handleIncreaseQuantity(item.id)">+</button>
            </td>
            <td class="itemPrice">${{item.price*item.quantity || 0}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      title: "Checkout Price Calculator",
      items: [{id: 1, name: "Coffee Filters", quantity: 3, price: 5},
              {id: 2, name: "Coffee Machine", quantity: 1, price: 100},
              {id: 3, name: "Maricchino Cherries", quantity: 1, price: 100},
      ],
      newItemName: "",
      newItemQuantity: null,
      newItemPrice: null,
    }
  },
  methods: {
    addItem() {
      let id = this.getLatestItemId();
      this.items.push({name: this.newItemName, id, quantity: parseInt(this.newItemQuantity), price: parseInt(this.newItemPrice)});
      this.newItemName="";
      this.newItemQuantity=null;
      this.newItemPrice=null;
    },
    deleteItem(id) {
      console.log("deleting item "+this.items.filter(item => item.id === id)[0].name)
      this.items = this.items.filter(item => item.id !==id);
      // this.updateSubtotal();
      console.log("deleted item "+id);
    },
    getLatestItemId() {
      return this.items.map(item => item.id).sort()[this.items.length-1]+1 || 1;
    },
    handleItemChange(item) {
      console.log(promo.text);
      let index = this.promotions.indexOf(promo);
      this.promotions[index].valid=this.validatePromoCode(promo.text);
      // this.updateSubtotal(); // if (this.promotions[index].valid) this.updateSubtotal();
    },
    updateSubtotal() {
      this.$emit('subtotal', this.promotions.filter(p => p.valid).reduce((prev, next) => prev + next.value, 0));
    },
    validatePromoCode(code) {
      const sameCount = this.promotions.filter(p => p.text===code).length;
      console.log(sameCount);
      return (sameCount===1 && code.length===10) || false;
    },
    handleDecreaseQuantity(id) {
      console.log(id);
      let item = this.items.filter(i => i.id===id)[0];
      let index = this.items.indexOf(item);
      const currQuantity = this.items[index].quantity;
      if (currQuantity===1) this.deleteItem(this.items[index].id);
      else this.items[index].quantity -= 1;
    },
    handleIncreaseQuantity(id) {
      console.log(id);
      let item = this.items.filter(i => i.id===id)[0];
      let index = this.items.indexOf(item);
      const currQuantity = this.items[index].quantity;
      this.items[index].quantity += 1;
    }
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
  margin-bottom: 16px;
}

.addItembutton:hover {
  cursor: pointer;
}

.addItembutton:disabled:hover {
  cursor: auto;
}

.emptyItemsList {
  margin-inline: auto;
}

th {
  width: 33%;
}

.itemName {
  text-align: left;
}

.itemQuantity {
  padding: 10px;

  display: flex;
  
  justify-content: space-evenly;
  
  align-items: center;
}

.quantityButton {
  background: none;
  border: 1px solid black;
  /* border-radius: 5px; */
}

.quantityButton:hover {
  cursor: pointer;
}

.itemPrice {
  color: green;
}

table {
  border-collapse: collapse;
  margin: 8px;
}

table tr, table thead {
  border: 1px solid black;
}

tr:hover {
  background: lightgray;
}

.itemInput {
  width: 29%;
}

</style>
