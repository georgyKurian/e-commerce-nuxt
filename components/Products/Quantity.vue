<template>
  <div>
    <SfInput
      v-if="modelValue > maxDropDownValue"
      v-model="modelValue"
      type="number"
      class="sf-quantity__input"
      :min="1"
      :max="max"
    />
    <div v-else class="flex flex-col gap-y-6 font-body">
      <label>
        <span class="pb-1 text-sm font-medium text-neutral-900"> Label </span>
        <SfSelect v-model="modelValue" size="sm" placeholder="-- Select --">
          <option v-for="index in maxDropDownValue" :key="index" :value="index">
            {{ index }}
          </option>
          <option :value="`${maxDropDownValue + 1}+`">
            {{ `${maxDropDownValue + 1}+` }}
          </option>
        </SfSelect>
      </label>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SfSelect, SfInput } from "@storefront-ui/vue";
const maxDropDownValue = 19;

const props = defineProps<{
  max?: number;
  defaultQuantity?: number;
}>();
const modelValue = defineModel({
  required: true,
  set(value) {
    debugger;
    if (value == `${maxDropDownValue + 1}+`) {
      return maxDropDownValue + 1;
    }
    return value;
  },
});
</script>
