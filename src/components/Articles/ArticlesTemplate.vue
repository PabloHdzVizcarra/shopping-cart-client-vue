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

    <div v-for="article in articles" :key="article.price">
      <p>{{ article.name }}</p>
    </div>
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
      this.errors = ''
      this.haveError = false
      this.saveArticleInDatabase(article)
    },
    showErrors (error) {
      this.haveError = true
      this.errors = error
    },
    async saveArticleInDatabase (article) {
      fetch('api/v1/article', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(article)
      })
        .then(response => response.json())
        .then(data => {
          this.articles.push(data)
          console.log(data)
        })
        .catch(console.log)
    },
    async getArticlesToDatabase () {
      const response = await fetch('api/v1/article')
      const data = await response.json()

      this.articles = [...data]
    }
  },
  mounted () {
    this.getArticlesToDatabase()
  }
}
</script>

<style scoped>
.c-articles {
  background-color: rgba(202, 210, 197, .2);
  border: 4px;
}
</style>
