<template>
  <hr />
  <div>Myszka jest na pozycji: {{ x }}, {{ y }}</div>
  <hr />
  <input type="number" v-model="value" />
  <button @click="double">Podwój</button>
  <div>Wartość to: {{ value }}</div>
  <hr />
</template>

<script setup>
import { useMouse } from "./mouse.js";
import { useDoubled } from "./doubled.js";

const initVal = 12;
const { x, y } = useMouse();
const { value, double } = useDoubled(initVal);
</script>

<style>
</style>