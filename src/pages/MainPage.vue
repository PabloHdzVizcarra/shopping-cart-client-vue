<template>
  <Header text="Shopping Cart" class="c-header"/>
  <div class="container row c-main">
    <ArticlesTemplate/>
    <CartTemplate/>
  </div>
</template>

<script>
import ArticlesTemplate from '../components/Articles/ArticlesTemplate'
import CartTemplate from '../components/Cart/CartTemplate'
import Header from '../components/Header'
export default {
  name: 'MainPage',
  components: { Header, CartTemplate, ArticlesTemplate }
}
</script>

<style scoped>

.c-header {
  height: 10%;
}

.c-main {
  margin: 0;
  height: 90%;
}
</style>
