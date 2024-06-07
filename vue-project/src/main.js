import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";
import SingleEvent from "./views/SingleEvent.vue";
import App from "./App.vue";
import EventItemList from "./components/EventItemList.vue";

const routes = [
  { path: "/", component: EventItemList },
  { path: "/event/:id", component: SingleEvent },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
