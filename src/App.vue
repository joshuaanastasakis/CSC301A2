<template>
  <div id="app">
    <div class="container">
      <Cart />
      <Checkout />
    </div>
  </div>
</template>

<script>
  import Cart from './components/Cart.vue'
  import Checkout from './components/Checkout.vue'
  export default {
    name: 'App',
    components: {Cart, Checkout},
    data() {
      return {
        items: []
      }
    },
    methods: {
      addItem(item) {
        this.items.push(item);
      },
      deleteItem(id) {
        this.items = this.items.filter(item => item.id!==id);
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-right: auto;
  margin-left: auto;
  max-width: 1000px;
}

.container {
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items: top;
  flex-wrap: wrap;

  /* border: 1px solid red; */
}

h1 {
  color: #1277B0;
  /* font-family: 'Inter'; */
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 18px;
}

h2 {
  color: #1277B0;
  /* font-family: 'Inter'; */
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 18px;
}

h3 {
  color: #3C3C3C;
  /* font-family: 'Inter'; */
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
}

p {
  color: #3C3C3C;
  /* font-family: 'Inter'; */
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
}
</style>
