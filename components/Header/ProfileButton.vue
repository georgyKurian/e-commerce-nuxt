<template>
  <SfButton
    v-if="!store.user"
    aria-label="Log in"
    class="text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
    variant="tertiary"
    square
    @click="openLoginForm"
  >
    <template #prefix>
      <SfIconPerson class="bg-gray-100 rounded-full text-gray-400 fill-current w-7 h-7" />
    </template>
    <div class="hidden lg:flex flex-col items-start mr-2">
      <span class="whitespace-nowrap text-xs font-bold leading-3">
        {{ $t('Sign in / Register') }}
      </span>
      <span class="whitespace-nowrap text-sm font-bold">
        {{ $t('Orders & Accounts') }}
      </span>
    </div>
  </SfButton>
  <SfDropdown v-else v-model="isOpen">
    <template #trigger>
      <SfButton
        aria-label="My Account"
        class="text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
        variant="tertiary"
        square
        @click.stop="logout"
        @focus="open"
        @blur="close"
      >
        <template #prefix>
          <SfIconPerson class="bg-gray-100 rounded-full text-gray-400 fill-current w-7 h-7" />
        </template>
        <div class="hidden lg:flex flex-col items-start mr-2">
          <span class="whitespace-nowrap text-xs font-bold leading-3">
            {{ $t('Hello, {name}', { name: store.user.name }) }}
          </span>
          <span class="whitespace-nowrap text-sm font-bold">
            {{ $t('Orders & Accounts') }}
          </span>
        </div>
      </SfButton>
    </template>
    <ul class="p-2 rounded bg-gray-100 w-40">
      <li>My Account</li>
      <li>Settings</li>
      <li><SfButton @click.stop="logout">Logout</SfButton></li>
    </ul>
  </SfDropdown>
</template>
<script setup lang="ts">
import { SfButton } from '@storefront-ui/vue';
import { SfDropdown, useDisclosure } from '@storefront-ui/vue';

const { isOpen, toggle, open, close } = useDisclosure();
const store = useMainStore();

const emitter = useEventBus();

function openLoginForm() {
  emitter.emit('open-login-modal');
}
function logout() {
  store.logout();
}
</script>
