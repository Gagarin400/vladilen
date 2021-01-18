<template>
  <div class="form-control">
    <label :for="id">{{ label }}</label>
    <select :id="id" @change="change" :value="modelValue">
      <option v-for="(value, key) in partSelect" :key="key" :value="value">
        {{ value }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  emits: ["update:modelValue"],
  props: {
    modelValue: String,
    label: String,
    partSelect: Object,
  },
  data() {
    return {
      id: "select-" + Math.random,
    };
  },
  methods: {
    change() {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
</style>