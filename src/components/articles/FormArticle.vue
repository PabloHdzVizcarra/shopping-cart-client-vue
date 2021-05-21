<template>
  <form class="p-4 text-start">
    <label for="article-name" class="form-label">Name</label>
    <input type="text" id="article-name" class="form-control mb-2">

    <label for="article-price" class="form-label">Price</label>
    <input type="number" id="article-price" class="form-control mb-2">

    <label for="article-brand" class="form-label">Brand</label>
    <input type="text" id="article-brand" class="form-control mb-2">

    <button type="submit" class="btn btn-success">Save</button>
  </form>
</template>

<script>
export default {
  name: 'FormArticle'
}
</script>

<style scoped>

</style>
