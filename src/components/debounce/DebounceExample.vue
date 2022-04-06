<template>
  <div>
    <button @click="click">Dodaj {{ value }}</button>
    <div>{{ this.count }}</div>
  </div>
</template>

<script>
import { debounce } from "lodash";
import { nextTick } from "@vue/runtime-core";
export default {
  props: ["value"],
  data() {
    return {
      count: 0,
    };
  },
  created() {
    this.debouncedClick = debounce(this.click, 5000);
  },
  unmounted() {
    this.debouncedClick.cancel();
  },
  methods: {
    async click() {
      await nextTick();
      this.count += this.value;
    },
  },
};
</script>

<style>
</style>