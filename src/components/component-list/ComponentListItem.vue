<template>
  <div>
    <h1>{{ renderedItem.title }}</h1>
    <div class="menu">
      <router-link to="/"> Strona główna</router-link>
    </div>
    <div class="component-container">
      <component :is="renderedItem.component"></component>
    </div>
  </div>
</template>

<script>
import items from "@/data/items";
export default {
  name: "ComponentListItem",
  components: {},
  data() {
    return {
      items: items,
      renderedItem: items.find(
        (element) => element.link === this.$route.params.link
      ),
    };
  },
  methods: {},
};
</script>

<style>
h1 {
  margin-top: 1em;
  text-align: center;
}
.menu {
  text-align: center;
  margin-bottom: 3em;
}
.component-container {
  width: 90%;
  margin: auto;
  outline: 5px solid green;
}
</style>
