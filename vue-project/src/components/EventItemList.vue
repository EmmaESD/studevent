<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  image_url: String,
  title: String,
  content: String,
  author: String,
  date: Number,
  eventItemList: Array,
});

const router = useRouter();

function goSingleEvent() {
  router.push("/about");
}
</script>

<template>
  <ul>
    <li v-for="item in props.eventItemList">
      <img :src="item.image_url" alt="" />
      <h3>{{ item.title }}</h3>
      <h4>{{ item.content }}</h4>
      <h4>{{ item.author }}</h4>
      <h4>{{ item.date }}</h4>
      <button @click="goSingleEvent">Plus d'infos</button>
    </li>
  </ul>
</template>
