<template>
  <div class="form-control">
    <label for="value">{{ label }}</label>
    <textarea
      id="value"
      rows="3"
      :value="modelValue"
      @input="change"
    ></textarea>
  </div>
</template>

<script>
export default {
  emits: ["update:modelValue"],
  props: {
    modelValue: String,
    label: String,
  },
  data() {
    return {
      id: "text-area-" + Math.round,
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