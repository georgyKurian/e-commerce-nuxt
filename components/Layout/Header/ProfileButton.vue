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
      <li><SfLink>My Account</SfLink></li>
      <li><SfLink>Settings</SfLink></li>
      <li><SfButton @click.stop="logout">Logout</SfButton></li>
    </ul>
  </SfDropdown>
</template>
<script setup lang="ts">
import { SfButton } from '@storefront-ui/vue';
import { SfDropdown, useDisclosure, SfLink, SfIconPerson } from '@storefront-ui/vue';

const { isOpen, toggle, open, close } = useDisclosure();
const store = useMainStore();
const loginBus = useEventBus();
const sanctumUser = useSanctumUser<User>();

interface User {
  id: number;
  name: string;
  email: string;
}

function openLoginForm() {
  loginBus.emit('open-login-modal');
}
function logout() {
  sanctumUser.value = null;
  store.resetData();
}

// Watch for changes in sanctumUser and update store.user accordingly
watch(
  sanctumUser,
  (newValue, oldValue) => {
    store.user = newValue; // Assuming store has a user property that you want to update
  },
  { deep: true },
); // Use deep watch if sanctumUser is an object to detect nested changes
</script>
