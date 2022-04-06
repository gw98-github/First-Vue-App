<template>
  <div>
    <div>
      <h5>Przykład inputa textowego</h5>
      <p>Wiadomość to: {{ message }}</p>
      <input v-model="message" placeholder="Edytuj mnie" />
      <hr />
    </div>
    <div>
      <h5>Przykład inputa zmieniającego wartość po zapisie</h5>
      <p>Wiadomość to: {{ message1 }}</p>
      <input v-model.lazy="message1" placeholder="Edytuj mnie" />
      <hr />
    </div>
    <div>
      <h5>
        Przykład inputa z modelem numerycznym (wykorzystuje parsera z floata na
        inta, jak nie przejdzie wartość to przekazuje tekst)
      </h5>
      <p>Wiadomość to: {{ number }}</p>
      <input v-model.number="number" placeholder="Edytuj mnie" />
      <hr />
    </div>
    <div>
      <h5>Przykład radio z wartościami</h5>
      A<input type="radio" v-model="picked" value="A" /> B<input
        type="radio"
        v-model="picked"
        value="B"
      />
      wybrana wartość: {{ picked }}

      <hr />
    </div>
    <div>
      <h5>Przykład checkbox z wartościami</h5>
      <input
        type="checkbox"
        v-model="toggle"
        true-value="tak"
        false-value="nie"
      />
      wybrana wartość: {{ toggle }}

      <hr />
    </div>

    <div>
      <h5>Przykład checkbox z wartościami dynamicznymi</h5>
      <input
        type="checkbox"
        v-model="dynamicCheckbox"
        :true-value="selectedValue1"
        :false-value="selectedValue2"
      />
      <button @click="changeValues">
        Wartości: {{ selectedValue1 + "," + selectedValue2 }}
      </button>
      wybrana wartość: {{ dynamicCheckbox }}
      <hr />
    </div>

    <div>
      <h5>Przykład radio z wartościami dynamicznymi</h5>
      <input type="radio" v-model="pick" :value="selectedValue1" />
      <input type="radio" v-model="pick" :value="selectedValue2" />
      <button @click="changeValues">
        Wartości: {{ selectedValue1 + "," + selectedValue2 }}
      </button>
      wybrana wartość: {{ pick }}
      <hr />
    </div>
    <div>
      <h5>Przykład checkbox z wartościami</h5>
      <select v-model="selected">
        <!-- inline object literal -->
        <option :value="{ number: 123 }">123</option>
      </select>
      wybrana wartość: {{ selected }}
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      message1: "",
      number: 0,
      picked: undefined,
      toggle: false,
      pick: undefined,
      selected: undefined,
      dynamicCheckbox: false,
      selectedValue1: "AAA",
      selectedValue2: "BBB",
    };
  },
  methods: {
    changeValues() {
      if (this.selectedValue1 == "AAA" && this.selectedValue2 == "BBB") {
        this.selectedValue1 = "XXX";
        this.selectedValue2 = "YYY";
      } else {
        this.selectedValue1 = "AAA";
        this.selectedValue2 = "BBB";
      }
    },
  },
};
</script>

<style>
</style>