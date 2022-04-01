<template>
  <h1>Strona do testowania Vue.js</h1>
  <div>
    <router-link to="/starting-page"
      ><button type="button" class="btn btn-primary">
        StartingPage
      </button></router-link
    >
  </div>
  <div>
    <router-link to="/item"
      ><button type="button" class="btn btn-primary">Item</button></router-link
    >
  </div>
</template>

<script>
export default {
  name: "ComponentList",
};
</script>

<style>
.info {
}
</style>
