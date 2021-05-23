<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{name}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ brand }}</h6>
      <p class="card-text">{{price}}</p>
      <button class="btn btn-warning">Update</button>
      <button class="btn btn-danger">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: {
    name: String,
    price: Number,
    brand: String
  }
}
</script>

<style scoped>

</style>
