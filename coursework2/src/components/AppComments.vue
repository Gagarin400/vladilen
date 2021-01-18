<template>
  <div class="container">
    <p>
      <app-button @action="$emit('loadComments')">{{ textButton }}</app-button>
    </p>
    <div class="card" v-for="comment in comments" :key="comment.id">
      <h2>{{ comment.name }}</h2>
      <ul class="list">
        <li class="list-item">
          <div>
            <p>
              <strong>{{ comment.email }}</strong>
            </p>
            <small>{{ comment.body }}</small>
          </div>
        </li>
      </ul>
    </div>
    <app-loader v-if="loading"></app-loader>
  </div>
</template>

<script>
import AppButton from "./AppButton";
import AppLoader from "./AppLoader";
export default {
  emit: ['loadComments'],
  props: {
    textButton: String,
    comments: {},
    loading: Boolean,
  },
  components: { AppButton, AppLoader },
};
</script>

<style scoped>
</style>