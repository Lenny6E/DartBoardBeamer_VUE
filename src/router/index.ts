// router/index.ts
import { createRouter, createWebHashHistory } from "vue-router";
import IndexView from "@/view/Index.vue";
import TrainerView from "@/view/DarttrainerView.vue";
import ScoringTrainerView from "@/view/ScoringTrainerView.vue";
import WichtigeDoppelView from "@/view/WichtigDoppelTrainingView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: IndexView,
  },
  {
    path: "/scoring",
    name: "Scoring",
    component: ScoringTrainerView,
    props: () => ({ trainerNumbers: [20, 2, 11] }),
  },
  {
    path: "/trainer",
    name: "Trainer",
    component: TrainerView,
    props: () => ({
      trainerNumbers: Array.from({ length: 20 }, (_, i) => i + 1),
    }),
  },
  {
    path: "/wichtigeDoppel",
    name: "WichtigeDoppel",
    component: WichtigeDoppelView,
    props: () => ({ trainerNumbers: [20, 1, 6, 8, 13, 14, 18] }),
  },
  {
    path: "/doppel",
    name: "Doppel",
    component: WichtigeDoppelView,
    props: () => ({ trainerNumbers: [20, 2, 11] }),
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
