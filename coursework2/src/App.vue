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
      <app-resume :content="resume" :empty="emptyResume"></app-resume>
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
      selectValue: "Заголовок",
      textAreaValue: "",
      typeBlock: {
        title: "Заголовок",
        subtitle: "Подзаголовок",
        avatar: "Аватар",
        text: "Текст",
      },
      resume: [
        {
          title: "",
          subtitle: "",
          avatar: "",
          text: "",
        },
      ],
      emptyResume: true,
      load: false,
      comments: [],
    };
  },
  methods: {
    addBlock() {
      this.emptyResume = false;
      console.log(this.selectValue);
      console.log(this.textAreaValue);

      this.resume[
        Object.keys(this.typeBlock).find(
          (key) => this.typeBlock[key] === this.selectValue
        )
      ] = this.textAreaValue;
      this.selectValue = "Заголовок";
      this.textAreaValue = "";
    },
    loadComments() {
      this.load = true;
      (this.comments = []), (this.load = true);
      setTimeout(async () => {
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
      }, 1500);
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
