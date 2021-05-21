<template>
    <div class="alert alert-danger alert__error" role="alert">
      {{text}}
    </div>
</template>

<script>
export default {
  name: 'Alert',
  props: ['text']
}
</script>

<style scoped>
.alert__error {
  position: fixed;
  right: 5px;
  top: 5px;
}
</style>
