<template>
  <div>
    <h1>Strona do testowania Vue.js</h1>
    <div class="table">
      <div class="main-grid">
        <div class="line-grid" v-for="item in items" :key="item.title">
          <div>
            <h3>{{ item.title }}</h3>
          </div>
          <router-link
            :to="{ name: 'Item', params: { link: item.link } }"
            class="grid-element-center"
          >
            <button type="button" class="btn btn-success">
              Przejdź do strony
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import items from "@/data/items";

export default {
  data() {
    return {
      items: items,
    };
  },
};
</script>

<style>
.table {
  margin-top: 3em;
}
h1 {
  margin-top: 1em;
  text-align: center;
}
.main-grid {
  display: grid;
  width: 80%;
  margin: auto;
  grid-template-columns: repeat(auto-fit);
  outline: 5px solid green;
  padding: 1px;
}
.line-grid {
  outline: 1px solid black;
  display: grid;
  grid-template-columns: 3fr 1fr;
}

.grid-element-center {
  justify-self: right;
  align-self: center;
  margin-right: 1em;
}
</style>
