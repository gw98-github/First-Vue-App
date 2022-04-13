<template>
  <h1>Komponent, który chciałem otworzyć</h1>
</template>

<script>
export default {
  beforeCreate: function () {
    for (let i = 0; i < 300; i++) {
      for (let j = 0; j < 3; j++) {
        const a = 2;
        const b = 2;
        const c = a + b;
        console.log(c);
      }
    }
  },
};
</script>

<style>
h1 {
  text-align: center;
}
</style>