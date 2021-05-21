<template>
  <ArticlesTemplate/>
  <CartTemplate/>
</template>

<script>
import ArticlesTemplate from '../components/articles/ArticlesTemplate'
import CartTemplate from '../components/Cart/CartTemplate'
export default {
  name: 'MainPage',
  components: { CartTemplate, ArticlesTemplate }
}
</script>

<style scoped>

</style>
