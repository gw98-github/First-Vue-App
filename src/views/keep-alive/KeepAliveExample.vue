<template>
  <button @click="changeComp">Zmień komponent z {{ comp }}</button>
  <KeepAlive>
    <component :is="comp"></component>
  </KeepAlive>
</template>

<script>
import ComponentOne from "./ComponentOne.vue";
import ComponentTwo from "./ComponentTwo.vue";
export default {
  components: {
    ComponentOne,
    ComponentTwo,
  },
  data() {
    return {
      comp: "ComponentOne",
    };
  },
  methods: {
    changeComp() {
      if (this.comp == "ComponentOne") this.comp = "ComponentTwo";
      else this.comp = "ComponentOne";
    },
  },
};
</script>

<style>
</style>