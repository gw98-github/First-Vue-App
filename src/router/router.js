import { createRouter, createWebHistory } from "vue-router";
import ComponentList from "../components/component-list/ComponentList.vue";
import ComponentListItem from "../components/component-list/ComponentListItem.vue";

const routes = [
  { path: "/", name: "ComponentList", component: ComponentList },
  { path: "/item/:link", name: "Item", component: ComponentListItem },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
