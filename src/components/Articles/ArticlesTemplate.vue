<template>
  <div class="col-lg c-articles">
    <Alert :text="errors" v-if="haveError"/>
    <h3>Articles</h3>
    <button
      :class="[showForm ? 'btn-danger' : 'btn-primary' ,'btn']"
      @click="handleShowForm"
    >{{ showForm ? 'Close' : 'Add Article' }}
    </button>

    <FormArticle
      v-show="showForm"
      @save-article="saveArticle"
      @validate-error="showErrors"
    />
  </div>
</template>

<script>
import FormArticle from './FormArticle'
import Alert from './Alert'

export default {
  name: 'ArticlesTemplate',
  components: {
    Alert,
    FormArticle
  },
  data () {
    return {
      articles: [],
      showForm: false,
      haveError: false,
      errors: ''
    }
  },
  methods: {
    handleShowForm () {
      this.showForm = !this.showForm
    },
    saveArticle (article) {
      console.log(article)
    },
    showErrors (error) {
      console.log(error)
      this.haveError = true
      this.errors = error
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
