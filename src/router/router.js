import { createRouter, createWebHistory } from "vue-router";
import ComponentList from "../components/component-list/ComponentList.vue";
import StartingPage from "../components/starting-page/StartingPage.vue";
import ComponentListItem from "../components/component-list-item/ComponentListItem.vue";

const routes = [
  { path: "/", name: "ComponentList", component: ComponentList },
  { path: "/starting-page", name: "StartingPage", component: StartingPage },
  { path: "/item", name: "Item", component: ComponentListItem },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
