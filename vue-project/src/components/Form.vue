<script setup>
import { defineProps, ref, defineEmits } from "vue";

// Définir les événements d'émission
const emit = defineEmits(["addItemIntoCard"]);

// Références pour les champs de formulaire
const events = ref({
  image_url: "",
  author: "",
  title: "",
  date: "",
  content: "",
});

function handleEmitEvent(e) {
  e.preventDefault();
  emit("addItemIntoCard", { ...events.value });
  events.value = {
    image_url: "",
    author: "",
    title: "",
    date: "",
    content: "",
  };
}

const props = defineProps({
  image_url: String,
  title: String,
  content: String,
  author: String,
  date: String,
});
</script>

<template>
  <div class="form-column">
    <form @submit="handleEmitEvent">
      <div class="form-row">
        <input type="text" v-model="events.title" placeholder="Title" />
        <input type="text" v-model="events.author" placeholder="Author" />
      </div>
      <div class="form-row">
        <input type="date" v-model="events.date" placeholder="Date" />
        <input type="text" v-model="events.image_url" placeholder="Image URL" />
      </div>
      <textarea
        cols="30"
        rows="10"
        v-model="events.content"
        placeholder="content"
      ></textarea>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<style scoped></style>
