<script setup>
import Form from "./components/Form.vue";
import EventItemList from "./components/EventItemList.vue";
import { ref } from "vue";

const eventItemList = ref([]);

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
  <Form @addItemIntoCard="addItemIntoCard"></Form>
  <EventItemList
    :title="title"
    :content="content"
    :date="date"
    :image_url="image_url"
    :author="author"
    :eventItemList="eventItemList"
  ></EventItemList>
</template>

<style scoped></style>
