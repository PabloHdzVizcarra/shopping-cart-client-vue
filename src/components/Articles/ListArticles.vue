<template>
  <div class="c-list-articles mt-4">
    <h3>List Articles</h3>
    <p v-if="articles.length === 0">Oops, apparently you don't have any articles, but don't worry you can add some</p>
      <div v-for="(article, index) in articles" :key="index" class="d-grid justify-content-center mb-2">
        <Article
          :name="article.name"
          :price="article.price"
          :brand="article.brand"
        />
      </div>
  </div>
</template>

<script>
import Article from '@/components/Articles/Article'
export default {
  name: 'ListArticles',
  components: { Article },
  props: {
    articles: Array
  }
}
</script>

<style scoped>
.c-list-articles {
  /*overflow-y: scroll;*/
}
</style>
