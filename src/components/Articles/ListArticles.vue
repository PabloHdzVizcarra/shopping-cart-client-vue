<template>
  <div class="c-list-articles mt-4">
    <p v-if="articles.length === 0">Oops, apparently you don't have any articles, but don't worry you can add some</p>
    <h3>{{ articles }}</h3>
  </div>
</template>

<script>
export default {
  name: 'ListArticles',
  props: {
    articles: Array
  }
}
</script>

<style scoped>
.c-list-articles {
}
</style>
