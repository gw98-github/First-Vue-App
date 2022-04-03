<template>
  <div>Item {{ $route.params.link }}</div>
  <component :is="component"></component>
</template>

<script>
import items from "@/data/items";
export default {
  name: "ComponentListItem",
  components: {},
  data() {
    return {
      items: items,
      component: items.find(
        (element) => element.link === this.$route.params.link
      ).component,
    };
  },
  methods: {},
};
</script>

<style>
</style>
