<template>
  <span class="">${{ formattedAmount }}</span>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  computed: {
    formattedAmount() {
      const dollar = (this.value / 100).toFixed(2);
      return dollar.toLocaleString("en-CA", {
        style: "currency",
        currency: "CAD",
      });
    },
  },
});
</script>
