<template>
  <div>
    <div
      v-if="modelValue < maxDropDownValue"
      class="flex flex-col gap-y-6 font-body"
    >
      <label class="relative">
        <span class="pb-1 text-sm font-medium text-neutral-900 absolute -z-[1]">
          Quantity
        </span>
        <SfSelect
          v-model="modelValue"
          size="sm"
          placeholder="-- Select --"
          wrapper-class="absolute -z-1"
        >
          <option
            v-for="index in maxDropDownValue - 1"
            :key="index"
            :value="index"
          >
            {{ index }}
          </option>
          <option :value="`${maxDropDownValue}+`">
            {{ `${maxDropDownValue}+` }}
          </option>
        </SfSelect>
      </label>
    </div>
    <Input
      v-else
      v-model="modelValue"
      label="Quantity"
      type="number"
      class="w-full"
      :min="1"
      :max="max"
      :hide-label="true"
    />
  </div>
</template>

<script lang="ts" setup>
import { SfSelect } from "@storefront-ui/vue";
import Input from "../Form/Input.vue";
const maxDropDownValue = 20;

const props = defineProps<{
  max?: number;
  defaultQuantity?: number;
}>();
const modelValue = defineModel({
  required: true,
  set(value) {
    if (value == `${maxDropDownValue}+`) {
      return maxDropDownValue;
    }
    return value;
  },
});
</script>
