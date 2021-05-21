<template>
  <Header text="Shopping Cart"/>
  <div class="container row c-main">
    <ArticlesTemplate/>
    <CartTemplate/>
  </div>
</template>

<script>
import ArticlesTemplate from '../components/articles/ArticlesTemplate'
import CartTemplate from '../components/Cart/CartTemplate'
import Header from '../components/Header'
export default {
  name: 'MainPage',
  components: { Header, CartTemplate, ArticlesTemplate }
}
</script>

<style scoped>

.c-main {
  margin: 0;
}
</style>
