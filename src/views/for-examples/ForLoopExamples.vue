<template>
  <div id="main">
    <h5>Prosta pętla</h5>
    <span v-for="item in simpleItems" :key="item.id">{{ item }} - </span>
    <hr />
    <h5>Prosta pętla 1-10 (zaczyna od 1!)</h5>
    <span v-for="n in 10" :key="n">{{ n }} - </span>
    <hr />
    <h5>Prosta pętla z indeksem</h5>
    <span v-for="(item, index) in simpleItems" :key="item"
      >{{ item }} - index: {{ index }} |
    </span>
    <hr />
    <h5>Pętla wypisuje parametr obiektu w liście + indeks</h5>
    <ul>
      <li v-for="({ message }, index) in items" :key="index">
        {{ message }} {{ index }}
      </li>
    </ul>
    <hr />
    <h5>Pętla wypisuje parametry obiektu</h5>
    <ul>
      <li v-for="value in myObject" :key="value.id">
        {{ value }}
      </li>
    </ul>
    <hr />
    <h5>
      Pętla wypisuje parametry obiektu w formie (indeks, klucz (nazwa
      parametru), wartość parametru)
    </h5>
    <ul>
      <li v-for="(value, key, index) in myObject" :key="index">
        {{ index }} -- {{ key }} -- {{ value }}
      </li>
    </ul>
    <hr />
    <h5>Pętla wypisująca komponent Vue</h5>
    <ExampleComponent
      v-for="(item, index) in items"
      :item="item.message"
      :index="index"
      :key="item.id"
    ></ExampleComponent>
  </div>
</template>

<script>
import ExampleComponent from "./ExampleComponent.vue";
export default {
  components: { ExampleComponent },
  data() {
    return {
      simpleItems: [1, 2, 3, 4, 5, 6],
      items: [{ message: "Foo" }, { message: "Bar" }, { message: "Dog" }],
      myObject: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
    };
  },
};
</script>

<style>
#main {
  padding: 2em;
}
</style>