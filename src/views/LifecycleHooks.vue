<template>
  <ul>
    <li>
      setup: Hook setup() interfejsu Composition API jest wywoływany przed
      wszelkimi hookami interfejsu Options API, nawet przed utworzeniem funkcji
      Create().
    </li>
    <li></li>
    <li>
      before create: {{ beforeCreateVal }} // Wywoływana natychmiast, gdy
      instancja jest inicjowana, po rozwiązaniu propsów, przed przetworzeniem
      innych opcji, takich jak data() lub computed.
    </li>
    <li></li>
    <li>
      created: {{ createdVal }} // Kiedy ten hook jest wywoływany,
      skonfigurowano: dane reaktywne, obliczone właściwości, metody i
      obserwatory. Jednak faza montażu nie została rozpoczęta, a właściwość $el
      nie będzie jeszcze dostępna.
    </li>
    <li></li>
    <li>
      beforeMount: {{ beforeMountVal }} // Po wywołaniu tego hooka komponent
      zakończył konfigurowanie swojego stanu reaktywnego, ale nie utworzono
      jeszcze żadnych węzłów DOM. Za chwilę wykona swój efekt renderowania DOM
      po raz pierwszy.
    </li>
    <li></li>
    <li>
      mounted: {{ mountedVal }} // Ten hook jest zwykle używany do wykonywania
      efektów ubocznych, które wymagają dostępu do renderowanego modelu DOM lub
      do ograniczania kodu związanego z DOM do klienta w aplikacji renderowanej
      przez serwer.
    </li>
    <li></li>
    <li>
      beforeUpdate: {{ beforeUpdateVal }} // Ten hook może być użyty do
      uzyskania dostępu do stanu DOM, zanim Vue zaktualizuje DOM. Bezpiecznie
      jest również modyfikowanie stanu komponentu wewnątrz tego hooka.
    </li>
    <li></li>
    <li>
      updated: {{ updatedVal }} // Zaktualizowany hook parenta jest wywoływany
      po zaczepie jego childów. Ten hook jest wywoływany po każdej aktualizacji
      DOM komponentu, która może być spowodowana różnymi zmianami stanu. Jeśli
      potrzebujesz dostępu do zaktualizowanego DOM po określonej zmianie stanu,
      użyj zamiast tego nextTick().
    </li>
    <li></li>
    <li>
      beforeUnmount: {{ beforeUnmountVal }} // Po wywołaniu tego hooku instancja
      komponentu jest nadal w pełni funkcjonalna. Ten hook nie jest wywoływany
      podczas renderowania po stronie serwera.
    </li>
    <li></li>
    <li>
      unmounted: {{ unmountedVal }} // Wywoływana po odłączeniu komponentu.
    </li>
    <li></li>
    <li>końcowa wartość: {{ numberVal }} //</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      numberVal: 0,
      beforeCreateVal: 0,
      createdVal: 0,
      beforeMountVal: 0,
      mountedVal: 0,
      beforeUpdateVal: 0,
      updatedVal: 0,
      beforeUnmountVal: 0,
      unmountedVal: 0,
    };
  },
  setup() {},
  beforeCreate() {
    this.numberVal++;
    this.beforeCreate = this.numberVal;
  },
  created() {
    this.numberVal++;
    this.createdVal = this.numberVal;
  },
  beforeMount() {
    this.numberVal++;
    this.beforeMountVal = this.numberVal;
  },
  mounted() {
    this.numberVal++;
    this.mountedVal = this.numberVal;
  },
  beforeUpdate() {
    this.numberVal++;
    this.beforeUpdateVal = this.numberVal;
  },
  updated() {
    this.numberVal++;
    this.updatedVal = this.numberVal;
  },
  beforeUnmount() {
    this.numberVal++;
    this.beforeUnmountVal = this.numberVal;
  },
  unmounted() {
    this.numberVal++;
    this.unmountedVal = this.numberVal;
  },
};
</script>

<style>
</style>