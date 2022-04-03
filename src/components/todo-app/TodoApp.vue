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
export default {
  data() {
    return {
      newItem: "",
      items: [
        { title: "Zrobić zakupy", completed: false, id: 1 },
        { title: "Nagrać kurs", completed: true, id: 2 },
      ],
    };
  },
  methods: {
    addItem() {
      this.items.push({
        title: this.newItem,
        completed: false,
        id: Math.random(),
      });
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