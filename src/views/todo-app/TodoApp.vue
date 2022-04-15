<template>
  <div class="container">
    <div class="item">
      <div>Nowe todo: {{ newItem }}</div>
      <input type="text" placeholder="todo" v-model="newItem" />
      <button @click="addItem">Dodaj</button>
    </div>

    <TodoItem
      :item="item"
      v-for="item in items"
      :key="item.id"
      @completed-clicked="(id) => setCompletedStatus(id)"
    />
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export class Item {
  constructor(title, completed, id) {
    this.title = title;
    this.completed = completed;
    this.id = id;
  }
}

export default {
  data() {
    return {
      newItem: "",
      items: [
        new Item("Zrobić zakupy", false, 1),
        new Item("Nagrać kurs", true, 2),
      ],
    };
  },
  methods: {
    addItem() {
      this.items.push(new Item(this.newItem, false, Math.random()));
      console.log(this.items);
      this.newItem = "";
    },
    setCompletedStatus(id) {
      const index = this.items.findIndex((el) => el.id === id);
      this.items[index].completed = true;
    },
  },
  components: { TodoItem },
};
</script>

<style>
.container {
  padding: 1em;
}
.item {
  border: 1px solid black;
  margin: 1em;
  padding: 1em;
}
.completed {
  opacity: 0.5;
}
.completed h5 {
  text-decoration: line-through;
}
</style>