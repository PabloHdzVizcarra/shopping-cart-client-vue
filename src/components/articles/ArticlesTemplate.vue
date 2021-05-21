<template>
  <div class="col-lg c-articles">
    <h3>Articles</h3>
    <button
      :class="[showForm ? 'btn-danger' : 'btn-primary' ,'btn']"
      @click="handleShowForm"
    >{{ showForm ? 'Close' : 'Add Article' }}
    </button>

    <FormArticle v-show="showForm" @save-article="saveArticle"/>
  </div>
</template>

<script>
import FormArticle from './FormArticle'

export default {
  name: 'ArticlesTemplate',
  components: { FormArticle },
  data () {
    return {
      articles: [],
      showForm: false
    }
  },
  methods: {
    handleShowForm () {
      this.showForm = !this.showForm
    },
    saveArticle (article) {
      console.log(article)
    }
  }
}
</script>

<style scoped>
.c-articles {
  background-color: rgba(202, 210, 197, .2);
  border: 4px;
}
</style>
