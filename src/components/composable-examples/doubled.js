import { ref } from "vue";
export function useDoubled() {
  const value = ref(0);
  const double = () => {
    value.value *= 2;
  };
  return { value, double };
}
