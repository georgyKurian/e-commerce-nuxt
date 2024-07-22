<template>
  <form class="p-4 flex gap-4 flex-wrap text-neutral-900" @submit.prevent="onSubmit">
    <h2 class="w-full typography-headline-4 md:typography-headline-3 font-bold">Billing address</h2>
    <div class="w-full flex flex-wrap gap-4 mt-4 md:mt-0">
      <label class="w-full md:w-auto grow flex flex-col gap-0.5">
        <span class="typography-text-sm font-medium">First Name</span>
        <SfInput v-model="address.firstName" name="firstName" autocomplete="given-name" required />
      </label>
      <label class="w-full md:w-auto grow flex flex-col gap-0.5">
        <span class="typography-text-sm font-medium">Last Name</span>
        <SfInput v-model="address.lastName" name="lastName" autocomplete="family-name" required />
      </label>
    </div>
    <label class="w-full flex flex-col gap-0.5">
      <span class="typography-text-sm font-medium">Phone</span>
      <SfInput name="phone" type="tel" autocomplete="tel" required />
    </label>
    <label class="w-full flex flex-col gap-0.5 flex flex-col gap-0.5">
      <span class="typography-text-sm font-medium">Country</span>
      <SfSelect
        v-model="address.country"
        name="country"
        placeholder="-- Select --"
        autocomplete="country-name"
        required
      >
        <option v-for="countryName in countries" :key="countryName">{{ countryName }}</option>
      </SfSelect>
    </label>
    <div class="w-full md:w-auto grow flex flex-col gap-0.5">
      <label>
        <span class="typography-text-sm font-medium">Street</span>
        <SfInput
          v-model="address.lineOne"
          name="street"
          autocomplete="address-line1"
          class="mt-0.5"
          required
          :invalid="!streetIsValid"
          @blur="streetIsValid = !!$event.target.value"
          @update:model-value="streetIsValid = !!$event"
        />
      </label>
      <div class="flex flex-colr mt-0.5">
        <strong v-if="!streetIsValid" class="typography-error-sm text-negative-700 font-medium">
          Please provide a valid street name
        </strong>
        <small class="typography-hint-xs text-neutral-500">Street address or P.O. Box</small>
      </div>
    </div>
    <div class="w-full flex flex-col gap-0.5 md:w-[120px]">
      <label>
        <span class="typography-text-sm font-medium">Apt#, Suite, etc</span>
        <SfInput v-model="address.lineTwo" name="aptNo" class="mt-0.5" />
      </label>
      <small class="typography-hint-xs text-neutral-500 mt-0.5">Optional</small>
    </div>
    <label class="w-full flex flex-col gap-0.5">
      <span class="typography-text-sm font-medium">City</span>
      <SfInput v-model="address.city" name="city" autocomplete="address-level2" required />
    </label>
    <label class="w-full md:w-auto flex flex-col gap-0.5 grow">
      <span class="typography-text-sm font-medium">State</span>
      <SfSelect v-model="address.state" name="state" placeholder="-- Select --" autocomplete="address-level1" required>
        <option v-for="stateName in states" :key="stateName">{{ stateName }}</option>
      </SfSelect>
    </label>
    <label class="w-full flex flex-col gap-0.5 md:w-[120px]">
      <span class="typography-text-sm font-medium">ZIP Code</span>
      <SfInput
        v-model="address.postalCode"
        name="postalCode"
        placeholder="eg. N3W1K8"
        autocomplete="postal-code"
        class="uppercase"
        required
      />
    </label>

    <label class="w-full flex items-center gap-2">
      <SfCheckbox name="useAsShippingAddress" />
      Use as shipping address
    </label>

    <div class="w-full flex gap-4 mt-4 md:mt-0 md:justify-end">
      <SfButton type="reset" variant="secondary" class="w-full md:w-auto">Clear all</SfButton>
      <SfButton type="submit" class="w-full md:w-auto">Save</SfButton>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfSelect, SfInput, SfCheckbox, SfButton } from '@storefront-ui/vue';

const countries = ['Canada'] as const;
const states = [
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Northwest Territories',
  'Nova Scotia',
  'Nunavut',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
  'Yukon',
] as const;

const address = defineModel<BillingAddress>();
const streetIsValid = ref(true);
</script>
