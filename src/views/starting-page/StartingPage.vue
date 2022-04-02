<template>
  <div id="starting-page">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";

export default {
  name: "StartingPage",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#starting-page {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
