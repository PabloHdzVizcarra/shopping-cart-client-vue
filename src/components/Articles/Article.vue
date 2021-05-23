<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">

      <div class="d-flex justify-content-around">
        <div>
          <h5 class="card-title">{{name}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ brand }}</h6>
        </div>
        <div>
        <p class="card-text article__price">${{price}}</p>
        </div>
      </div>

      <div class="article__buttons">
        <button class="btn btn-success">Add</button>
        <button class="btn btn-warning">Update</button>
        <button class="btn btn-danger">Delete</button>
      </div>
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

.article__price {
  font-weight: bold;
  font-size: 1.8rem;
}

.article__buttons {
  display: flex;
  height: 35px;
  justify-content: space-evenly;
}
</style>
