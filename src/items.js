import StartingPage from "./views/starting-page/StartingPage.vue";
import HtmlTesting from "./views/html-testing/HtmlTesting.vue";
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
];

export default items;
