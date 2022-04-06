<template>
  <div>Testowy div</div>
  <div @click.once="addOne">Jeden click event: {{ count }}</div>
  <div @click="addOne">Zwykły click: {{ count }}</div>
  <div @click.ctrl="addOne">Click tylko z ctrl: {{ count }}</div>
</template>

<script>
export default {
  name: "HtmlTesting",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    addOne() {
      this.count++;
    },
  },
};
</script>

<style>
</style>
