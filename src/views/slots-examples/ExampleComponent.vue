<template>
  <div v-if="value == 0">
    <div>Tutaj będzie:</div>
    <slot>Default zawartość</slot>
    <div>... kontent ze slota</div>
  </div>

  <div v-if="value == 1">
    <div>Name1:</div>
    <slot name="name1"></slot>
    <div>Name2:</div>
    <slot name="name2"></slot>
  </div>

  <div v-if="value == 2">
    <div>Tutaj będzie:</div>
    <slot :count="1" :textMsg="msg"></slot>
    <div>... kontent ze slota</div>
  </div>

  <div v-if="value == 3">
    <div>Name3:</div>
    <slot name="name3" message="hello" cos-jeszcze="cos jeszcze"></slot>
    <div>Name4:</div>
    <slot name="name4"></slot>
  </div>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      msg: "Ala ma kota",
      message: "",
    };
  },
};
</script>

<style>
</style>