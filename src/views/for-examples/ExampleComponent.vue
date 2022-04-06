<template>
  <div>
    <h6>Tutaj nowy komponent</h6>
    <ul>
      <li>
        <div>{{ item }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style>
</style>