import { ref } from "vue";
export function useDoubled(initVal) {
  const value = ref(initVal);
  const double = () => {
    value.value *= 2;
  };
  return { value, double };
}
