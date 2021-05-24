<template>
  <nav class="c-header">
    <img src="https://img.icons8.com/nolan/64/fast-cart.png" alt="shopping"/>
    <div class="header-c-title">
      <a class="navbar-brand header__text" href="#">{{ text }}</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  props: ['text']
}
</script>

<style scoped>
.header__text {
  color: #555454;
  font-size: 1.8rem;
}

.c-header {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header-c-title {
  text-align: start;
  width: 100%;
}
</style>
