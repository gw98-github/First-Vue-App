<template>
  <div>
    <h5>Podstawowy slot</h5>
    <div>
      <ExampleComponent :value="0">
        <div class="slot-content">Ala ma kota</div>
      </ExampleComponent>
    </div>
    <hr />
  </div>
  <div>
    <h5>Podstawowy slot z default wartością</h5>
    <div>
      <ExampleComponent :value="0"> </ExampleComponent>
    </div>
    <hr />
  </div>
  <div>
    <h5>Nazwane sloty</h5>
    <h5>1. name1</h5>
    <div>
      <ExampleComponent :value="1">
        <template #name1> tu kontent name 1</template>
      </ExampleComponent>
    </div>
    <h5>2. name2</h5>
    <div>
      <ExampleComponent :value="1"
        ><template #name2> tu kontent name 2</template>
      </ExampleComponent>
    </div>
    <hr />
  </div>
  <div>
    <h5>Przekazywanie elementów z childa</h5>
    <div>
      <ExampleComponent :value="2" v-slot="slotProps">
        msg: {{ slotProps.textMsg }}, count: {{ slotProps.count + 3 }}
      </ExampleComponent>
    </div>
    <hr />
  </div>
  <div>
    <h5>Przekazywanie wartości dla named slota</h5>
    <div>
      <ExampleComponent :value="3">
        <template #name3="name3Props">
          {{ name3Props }}
        </template>
      </ExampleComponent>
    </div>
    <hr />
  </div>
</template>

<script>
import ExampleComponent from "./ExampleComponent.vue";
export default {
  components: {
    ExampleComponent,
  },
};
</script>

<style>
h5 {
  margin-top: 1em;
}
.slot-content {
  font-style: italic;
}
</style>