<template>
  <h3>v-html - renderowanie html z paramsa</h3>
  <div v-html="rawHtml"></div>
  <hr />

  <h3>:id - zmiana id elementu</h3>
  <button @click="changeId">Zmień id</button>
  <div :id="dynamicId">Aktualne id: {{ dynamicId }}</div>
  <hr />

  <h3>:disabled - sprawdzanie booleana</h3>
  <button :disabled="{}">Disabled</button>
  <button :disabled="false">Enabled</button>
  <hr />

  <h3>v-bind - binduje obiekt z parametrami jak: id, class, style itp.</h3>
  <div v-bind="objectOfAttrs">
    Zbindowany obiekt z parametrami "id" i "class"
  </div>
  <hr />

  <h3>v-if - wyrażenie warunkowe</h3>
  <div v-if="ifValue == 5">Wyświetla diva jeśli wartość ifValue to 5</div>
  <hr />

  <h3>:href - umieszczenie adresu url</h3>
  <a :href="url">Strona główna vue - umieszczać w 'a' bo to argument</a>
  <hr />

  <h3>:[] i @[] - dynamiczne bindowanie i wywoływanie eventu</h3>
  <a :[hrefBind]="url">Strona główna vue - dynamicznie bind : </a>
  <a @[clickBind]="openUrl">Strona główna vue - dynamicznie event @ </a>
  <hr />
</template>

<script>
export default {
  data() {
    return {
      rawHtml: `<div class="rawHtml"> Testowa treść</div>`,
      dynamicId: "first",
      objectOfAttrs: {
        id: "v-bind",
        class: "wrapper",
      },
      ifValue: 5,
      url: "https://vuejs.org/",
      hrefBind: "href",
      clickBind: "click",
    };
  },
  methods: {
    changeId() {
      if (this.dynamicId == "first") {
        this.dynamicId = "second";
      } else {
        this.dynamicId = "first";
      }
    },
    openUrl() {
      window.location.href = this.url;
    },
  },
};
</script>

<style>
#first {
  background-color: yellow;
}
#second {
  background-color: fuchsia;
}
#v-bind {
  text-decoration: underline;
}
.wrapper {
  color: brown;
}
.rawHtml {
  color: red;
  size: 20px;
}
</style>