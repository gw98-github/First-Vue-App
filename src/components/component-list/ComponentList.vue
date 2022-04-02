<template>
  <div class="main-container">
    <h1>Strona do testowania Vue.js</h1>
    <div class="table">
      <div class="main-grid">
        <div class="line-grid" v-for="item in items" :key="item.title">
          <div>
            <h3>{{ item.title }}</h3>
          </div>
          <router-link :to="item.link">
            <button type="button" class="btn btn-primary">
              Przejdź do strony
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Strona startowa Vue.js",
          desc: "",
          link: "/starting-page",
        },
        {
          title: "Testowanie elementów HTML",
          desc: "",
          link: "/html-testing",
        },
        { title: "Item", desc: "", link: "/item" },
      ],
    };
  },
};
</script>

<style>
.main-container {
}
.table {
  margin: 3em 8em 0em 8em;
}
h1 {
  margin-top: 1em;
  text-align: center;
}
.main-grid {
  display: grid;
  width: calc(100% - 16em);
  grid-template-columns: repeat(auto-fit);
  outline: 5px solid green;
  padding: 1px;
}
.line-grid {
  outline: 1px solid black;
  display: grid;
  grid-template-columns: 4fr 1fr;
}
button {
  width: 90%;
}
</style>
