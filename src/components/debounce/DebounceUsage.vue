<template>
  <div>
    <DebounceExample :value="1"></DebounceExample>
    <DebounceExample :value="2"></DebounceExample>
  </div>
</template>

<script>
import DebounceExample from "./DebounceExample.vue";
export default {
  components: { DebounceExample },
};
</script>

<style>
</style>