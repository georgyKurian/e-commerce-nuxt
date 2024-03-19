<template>
  <div>
    <div class="relative">
      <label>
        <span
          :class="[
            'text-sm font-medium',
            {
              'cursor-not-allowed text-disabled-500': props.disabled,
              'absolute -z-[1]': props.hideLabel,
            },
          ]"
        >
          {{ label }}
          <span v-if="required" class="text-red-500">*</span>
        </span>
        <SfInput
          v-model="modelValue"
          :type="props.type"
          :wrapper-class="{
            'peer !bg-disabled-100 !ring-disabled-300 !ring-1 !text-disabled-500':
              props.disabled || props.readonly,
          }"
          v-bind="$attrs"
        />
      </label>
    </div>
    <div class="flex justify-between">
      <div>
        <p
          v-if="props.invalid && !props.disabled"
          class="text-sm text-negative-700 font-medium mt-0.5"
        >
          {{ props.errorText }}
        </p>
        <p
          v-if="props.helpText"
          :class="[
            'typography-hint-xs mt-0.5',
            props.disabled ? 'text-disabled-500' : 'text-neutral-500',
          ]"
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
      <p
        v-if="characterLimit && !readonly"
        :class="[
          'typography-error-xs mt-0.5',
          disabled
            ? 'text-disabled-500'
            : isAboveLimit
            ? 'text-negative-700 font-medium'
            : 'text-neutral-500',
        ]"
      >
        {{ charsCount }}
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from "vue";
import { SfInput } from "@storefront-ui/vue";
defineOptions({
  inheritAttrs: false,
});
const props = defineProps<{
  type?: string;
  characterLimit?: number;
  readonly?: boolean;
  invalid: boolean;
  disabled: boolean;
  required?: boolean;
  requiredText?: string;
  helpText?: string;
  label?: string;
  hideLabel?: boolean;
  errorText?: string;
}>();

const modelValue: number | string = defineModel<string, number>();

const isAboveLimit = computed(() =>
  props.characterLimit ? modelValue.length > props.characterLimit : false
);
const charsCount = computed(() =>
  props.characterLimit
    ? props.characterLimit - modelValue.length
    : modelValue.length
);
</script>
