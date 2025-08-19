import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import Index from "./view/Index.vue";
import DartTrainer from "./view/DarttrainerView.vue";

const routes = [
  { path: "/", component: Index },
  { path: "/trainer", component: DartTrainer }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(router).mount("#app");
