<template>
  <div class="col-xl c-articles">
    <h3>Articles</h3>
    <button class="btn btn-primary" @click="handleShowForm">Add Article</button>
    <FormArticle v-show="showForm"/>
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
