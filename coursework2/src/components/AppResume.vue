<template>
  <div class="card card-w70">
    <h1>{{ content.title }}</h1>
    <div class="avatar">
      <img :src="content.avatar" />
    </div>
    <h2>{{ content.subtitle }}</h2>
    <p>
      {{ content.text }}
    </p>
    <h3 v-if="empty">Добавьте первый блок, чтобы увидеть результат</h3>
  </div>
</template>

<script>
export default {
  props: {
    empty: Boolean,
    content: {},
  },
};
</script>

<style scoped>
</style>