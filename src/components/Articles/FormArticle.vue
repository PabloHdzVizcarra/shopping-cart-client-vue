<template>
  <form
    class="p-4 text-start"
    @submit.prevent="validateForm"
  >
    <label for="article-name" class="form-label">Name</label>
    <input
      type="text"
      id="article-name"
      class="form-control mb-2"
      v-model.trim="newArticle.name"
    >

    <label for="article-price" class="form-label">Price</label>
    <input
      type="number"
      id="article-price"
      class="form-control mb-2"
      v-model.number="newArticle.price"
    >

    <label for="article-brand" class="form-label">Brand</label>
    <input
      type="text"
      id="article-brand"
      class="form-control mb-2"
      v-model.trim="newArticle.brand"
    >

    <button type="submit" class="btn btn-success">Save</button>
  </form>
</template>

<script>
export default {
  name: 'FormArticle',
  data () {
    return {
      newArticle: {
        name: '',
        price: 0,
        brand: ''
      },
      errors: ''
    }
  },
  emits: ['save-article', 'validate-error'],
  methods: {
    validateForm () {
      if (
        this.newArticle.name === '' ||
        this.newArticle.price <= 0 ||
        this.newArticle.brand === ''
      ) {
        this.errors = 'You have a empty fields'
      } else {
        this.errors = ''
      }

      if (this.errors) {
        this.$emit('validate-error', this.errors)
        return
      }
      this.$emit('save-article', this.newArticle)
      this.cleanInputs()
    },
    cleanInputs () {
      this.newArticle.name = ''
      this.newArticle.price = 0
      this.newArticle.brand = ''
    }
  }
}
</script>

<style scoped>

</style>
