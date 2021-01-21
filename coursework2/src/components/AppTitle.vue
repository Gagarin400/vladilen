<template>
  <h1>{{ $attrs.value }}</h1>
  <button @click="$emit('delete')">Удалить</button>
</template>

<script>
export default {
  emits: ["delete"],
};
</script>

<style scoped>
</style>