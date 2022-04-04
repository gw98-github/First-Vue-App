<template>
  <button @click="show = true">Pokaż komponent</button>
  <div v-if="show"><async-component></async-component></div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import ErrorComponent from "./ErrorComponent.vue";

export default {
  data() {
    return {
      show: false,
    };
  },
  components: {
    AsyncComponent: defineAsyncComponent({
      loader: () => import("./ExampleDataComponent.vue"),
      loading: () => import("./LoadingComponent.vue"),
      delay: 200,
      errorComponent: ErrorComponent,

      timeout: 3000,
    }),
  },
};
</script>

<style>
</style>