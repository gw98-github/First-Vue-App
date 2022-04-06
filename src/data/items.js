import StartingPage from "@/views/starting-page/StartingPage.vue";
import HtmlTesting from "@/views/html-testing/HtmlTesting.vue";
import TodoApp from "@/components/todo-app/TodoApp.vue";
import DirectivesExamples from "@/views/directives-examples/DirectivesExamples.vue";
import HandlingLoading from "@/components/handling-loading/HandlingLoading.vue";
import DebounceUsage from "@/components/debounce/DebounceUsage.vue";
import ForLoopExamplesVue from "@/views/for-examples/ForLoopExamples.vue";
import { shallowRef } from "vue";
const items = [
  {
    title: "Strona startowa Vue.js",
    desc: "",
    link: "starting-page",
    component: shallowRef(StartingPage),
  },
  {
    title: "Testowanie elementów HTML",
    desc: "",
    link: "html-testing",
    component: shallowRef(HtmlTesting),
  },
  {
    title: "Aplikacja TODO z poradnika",
    desc: "",
    link: "todo-app",
    component: shallowRef(TodoApp),
  },
  {
    title: "Różne dyrektywy Vue",
    desc: "",
    link: "directives",
    component: shallowRef(DirectivesExamples),
  },
  {
    title: "Ładowanie komponentu - // delay nie działa",
    desc: " 1. https://medium.com/js-dojo/7-vue-patterns-that-you-should-be-using-more-often-b13cde4d2ae6 https://www.youtube.com/watch?v=muaBCsVE-NM&list=WL&index=2",
    link: "handling-loading",
    component: shallowRef(HandlingLoading),
  },
  {
    title: "Przykład debounce",
    desc: "",
    link: "debounce",
    component: shallowRef(DebounceUsage),
  },
  {
    title: "For - różne przykłady użycia",
    desc: "",
    link: "for-examples",
    component: shallowRef(ForLoopExamplesVue),
  },
];

export default items;
