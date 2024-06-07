<script setup>
import Form from "./components/Form.vue";
import EventItemList from "./components/EventItemList.vue";
import { ref } from "vue";
import { RouterView } from "vue-router";

const eventItemList = ref([
  {
    id: 1,
    title: "Event n°1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    date: "01/04/2024",
    image_url:
      "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=600",
    author: "Emma",
  },
  {
    id: 2,
    title: "Event n°2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    date: "01/04/2024",
    image_url:
      "https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=600",
    author: "Emma",
  },
  {
    id: 3,
    title: "Event n°3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    date: "01/04/2024",
    image_url:
      "https://images.pexels.com/photos/16408/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
    author: "Emma",
  },
  {
    id: 4,
    title: "Event n°4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    date: "01/04/2024",
    image_url:
      "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600",
    author: "Emma",
  },
]);

const addItemIntoCard = (item) => {
  console.log("ad new item");
  eventItemList.value.push(item);
};

const title = ref("");
const content = ref("");
const date = ref("");
const image_url = ref("");
const author = ref("");
</script>

<template>
  <!-- <Form @addItemIntoCard="addItemIntoCard"></Form> -->
  <!-- <EventItemList
    :title="title"
    :content="content"
    :date="date"
    :image_url="image_url"
    :author="author"
    :eventItemList="eventItemList"
  ></EventItemList> -->

  <RouterView
    :title="title"
    :content="content"
    :date="date"
    :image_url="image_url"
    :author="author"
    :eventItemList="eventItemList"
  />
</template>

<style scoped></style>
