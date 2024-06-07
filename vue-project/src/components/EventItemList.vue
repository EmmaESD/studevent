<script setup>
import { RouterLink } from "vue-router";
import { defineProps } from "vue";

const props = defineProps({
  image_url: String,
  title: String,
  content: String,
  author: String,
  date: Number,
  eventItemList: Array,
  id: Number,
});
</script>

<template>
  <ul>
    <li v-for="item in props.eventItemList">
      <div class="img-title">
        <img :src="item.image_url" alt="" />
        <h3>{{ item.title }}</h3>
      </div>
      <h4>{{ item.content }}</h4>
      <div class="author-date">
        <h4>{{ item.author }}</h4>
        <h4>{{ item.date }}</h4>
      </div>

      <RouterLink :to="`/event/${item.id}`">Show Event</RouterLink>
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

li {
  display: flex;
  flex-direction: column;
  width: 400px;
  align-items: center;
  border: solid 1px;
  padding: 20px;
}
.img-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
img {
  width: 250px;
  height: 200px;
}

.author-date {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>
