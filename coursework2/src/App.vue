<template>
  <div>
    <div class="container column">
      <form class="card card-w30" @submit.prevent="addBlock">
        <app-select
          label="Тип блока"
          :partSelect="typeBlock"
          v-model="selectValue"
        ></app-select>
        <app-text-area label="Значение" v-model="textAreaValue"></app-text-area>
        <app-button :disabled="disabledBtn">Добавить</app-button>
      </form>
      <app-resume
        :content="resume"
        :loading="load"
        @delete="(id) => deleteResume(id)"
      ></app-resume>
    </div>
    <app-comments
      textButton="Загрузить комментарии"
      :comments="comments"
      :loading="load"
      @loadComments="loadComments"
    ></app-comments>
  </div>
</template>

<script>
import AppButton from "./components/AppButton";
import AppSelect from "./components/AppSelect";
import AppTextArea from "./components/AppTextArea";
import AppResume from "./components/AppResume";
import AppComments from "./components/AppComments";
import axios from "axios";
export default {
  components: { AppSelect, AppTextArea, AppButton, AppResume, AppComments },
  data() {
    return {
      selectValue: "title",
      textAreaValue: "",
      typeBlock: [
        { type: "title", text: "Заголовок" },
        { type: "subtitle", text: "Подзаголовок" },
        { type: "avatar", text: "Аватар" },
        { type: "text", text: "Текст" },
      ],
      resume: [],
      emptyResume: true,
      load: false,
      comments: [],
    };
  },
  mounted() {
    this.loadResume();
  },
  methods: {
    async addBlock() {
      try {
        const { data } = await axios.post(
          "https://vue-with-http-d9231-default-rtdb.firebaseio.com/resume.json",
          {
            type: this.selectValue,
            text: this.textAreaValue,
          }
        );

        this.resume.push({
          id: data.name,
          type: this.selectValue,
          text: this.textAreaValue,
        });
        this.selectValue = "title";
        this.textAreaValue = "";
      } catch (e) {
        console.log(e.message);
      }
    },
    async loadResume() {
      try {
        const { data } = await axios.get(
          "https://vue-with-http-d9231-default-rtdb.firebaseio.com/resume.json"
        );
        this.resume = Object.keys(data).map((key) => {
          return {
            id: key,
            ...data[key],
          };
        });
        console.log(this.resume);
      } catch (e) {
        console.log(e.message);
      }
    },
    async loadComments() {
      try {
        this.load = true;
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/comments?_limit=42"
        );
        this.comments = Object.keys(data).map((key) => {
          return {
            id: key,
            ...data[key],
          };
        });
        this.load = false;
      } catch (e) {
        console.log(e.message);
        this.load = false;
      }
    },
    async deleteResume(id) {
      try {
        await axios.delete(
          `https://vue-with-http-d9231-default-rtdb.firebaseio.com/resume/${id}.json`
        );
        this.resume = this.resume.filter((i) => i.id !== id);
      } catch (e) {
        console.log(e.message);
      }
    },
  },
  computed: {
    disabledBtn() {
      return this.textAreaValue.length < 4;
    },
  },
};
</script>

<style>
.avatar {
  display: flex;
  justify-content: center;
}

.avatar img {
  width: 150px;
  height: auto;
  border-radius: 50%;
}
</style>
