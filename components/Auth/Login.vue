<template>
  <!-- Backdrop -->
  <transition
    enter-active-class="transition duration-200 ease-out"
    leave-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="isOpen" class="fixed inset-0 bg-neutral-700 bg-opacity-50 z-40" />
  </transition>

  <!-- Modal -->
  <transition
    enter-active-class="transition duration-200 ease-out"
    leave-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0 translate-y-10"
    enter-to-class="opacity-100 translate-y-0"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-10"
  >
    <SfModal
      v-model="isOpen"
      class="max-w-[90%] md:max-w-lg w-full z-40"
      tag="section"
      role="alertdialog"
      aria-labelledby="promoModalTitle"
      aria-describedby="promoModalDesc"
    >
      <header>
        <SfButton square variant="tertiary" class="absolute right-2 top-2" @click="close">
          <SfIconClose class="text-gray-600" />
        </SfButton>
        <h3 id="promoModalTitle" class="font-bold typography-headline-4 md:typography-headline-3">
          {{ $t('Log In') }}
        </h3>
      </header>
      <div id="promoModalDesc" class="mt-2 w-full">
        <form class="px-3 py-2 space-y-4" @submit.prevent="handleLogin">
          <FormInput
            v-model="form.email"
            label="Email address"
            type="email"
            class="form-control"
            placeholder="email"
            required
            :invalid="!!errors?.email"
            :error-text="errors?.email"
          />

          <div>
            <FormInput
              v-model="form.password"
              label="Password"
              type="password"
              placeholder="password"
              autocomplete="current-password"
              required
              :invalid="!!errors?.password"
              :error-text="errors?.password"
            />
            <NuxtLink href="/forgot-password" class="text-primary-700 block text-sm mt-1">
              Reset your password?
            </NuxtLink>
          </div>
          <SfButton class="w-full mt-8" type="submit"> Continue </SfButton>
          <div class="text-center text-sm">
            Don't have an account?
            <NuxtLink href="/register" class="text-primary-700"> Register </NuxtLink>
          </div>
        </form>
      </div>
      <footer class="flex justify-end gap-4 mt-4" />
    </SfModal>
  </transition>
</template>
<script setup lang="ts">
import { SfButton, SfModal, useDisclosure, SfIconClose } from '@storefront-ui/vue';
import { onMounted } from 'vue';

const { isOpen, open, close } = useDisclosure({ initialValue: false });
const emitter = useEventBus();
const store = useMainStore();
const { login } = useSanctumAuth();
const errors = ref<Record<string, string[]>>({});

onMounted(async () => {
  emitter.on('open-login-modal', () => open());
  emitter.on('close-login-modal', () => close());
});

watchEffect(async () => {
  if (store.isAuthenticated) {
    close();
  }
});

const form = ref({
  email: 'georgi@worksite.ca',
  password: 'password',
  remember: true,
});

async function handleLogin() {
  try {
    await login(form.value);
    close();
  } catch (e) {
    const { isValidationError, bag } = useApiError(e);
    if (isValidationError) {
      errors.value = bag;
    }
  }
}
</script>
