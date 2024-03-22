<template>
  <div class="flex items-center">
    <SfCheckbox
      id="checkbox"
      v-model="modelValue"
      value="value"
      class="peer"
      :wrapper-class="{
        'peer !bg-disabled-100 !ring-disabled-300 !ring-1 !text-disabled-500': props.disabled || props.readonly,
      }"
    />
    <label
      v-if="props.label"
      class="ml-3 text-base text-gray-900 cursor-pointer font-body peer-disabled:text-disabled-900"
      for="checkbox"
    >
      {{ props.label }}
    </label>
  </div>
  <div class="flex justify-between ml-8">
    <div>
      <p v-if="props.invalid && !props.disabled" class="text-sm text-negative-700 font-medium mt-0.5">
        {{ props.errorText }}
      </p>
      <p
        v-if="props.helpText"
        :class="['typography-hint-xs mt-0.5', props.disabled ? 'text-disabled-500' : 'text-neutral-500']"
      >
        {{ helpText }}
      </p>
      <p
        v-if="props.requiredText && props.required"
        class="mt-1 text-sm font-normal text-neutral-500 before:content-['*']"
      >
        {{ props.requiredText }}
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { SfCheckbox } from '@storefront-ui/vue';
import { ref } from 'vue';

const props = defineProps<{
  readonly?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  required?: boolean;
  requiredText?: string;
  helpText?: string;
  label?: string;
  hideLabel?: boolean;
  errorText?: string;
}>();

const modelValue = ref([]);
</script>
