<template>
  <button @click="$emit('action')" class="btn primary" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    disabled: Boolean,
  },
  emit: ["action"],
};
</script>

<style scoped>
</style>