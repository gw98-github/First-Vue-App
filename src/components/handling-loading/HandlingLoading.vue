<template>
  <button @click="show = true">Pokaż komponent</button>
  <div v-if="show"><AsyncComp></AsyncComp></div>
  <div v-if="show">Drugi komponent po 2s:</div>
  <div v-if="show"><AsyncComp2></AsyncComp2></div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import ErrorComponent from "./ErrorComponent.vue";

import LoadingComponent from "./LoadingComponent.vue";

const AsyncComp = defineAsyncComponent({
  loader: () => import("./ExampleDataComponent.vue"),
  loadingComponent: LoadingComponent,
  delay: 0,
  errorComponent: ErrorComponent,

  timeout: 3000,
});

const AsyncComp2 = defineAsyncComponent(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./ExampleDataComponent.vue"));
    }, 2000);
  });
});
export default {
  data() {
    return {
      show: false,
    };
  },
  components: {
    AsyncComp,
    AsyncComp2,
  },
};
</script>

<style>
</style>