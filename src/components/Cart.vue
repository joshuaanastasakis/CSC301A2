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

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.cart {
  width: 50%;
  min-width: 300px;
  max-width: 400px;
  /* border-right: 1px solid black; */
}

.container {
  display: flex;
  justify-content: space-around;

}


</style>
