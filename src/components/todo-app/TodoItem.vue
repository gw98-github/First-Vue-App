<template>
  <div class="item" :class="{ completed: item.completed }">
    <h5>{{ item.title }}</h5>
    <button v-if="!item.completed" @click="sendCompletedStatus">
      Zrobione
    </button>
  </div>
</template>

<script>
import Item from "./TodoApp.vue";

export default {
  props: {
    item: Item,
  },
  methods: {
    sendCompletedStatus() {
      this.$emit("completedClicked", this.item.id);
    },
  },
};
</script>

<style>
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