<template>
  <div class="card card-w70">
    <template v-if="content.length">
      <component
        v-for="(value, key) in content"
        :key="key"
        :is="`app-${value.type}`"
        v-bind="{ value: value.text }"
      ></component>
    </template>
    <h3 v-else>Добавьте первый блок, чтобы увидеть результат</h3>
  </div>
</template>

<script>
import AppTitle from "./AppTitle";
import AppAvatar from "./AppAvatar";
import AppSubtitle from "./AppSubtitle";
import AppText from "./AppText";

export default {
  components: { AppTitle, AppAvatar, AppSubtitle, AppText },
  props: {
    empty: Boolean,
    content: [],
  },
};
</script>

<style scoped>
</style>