<template>
  <SfButton variant="tertiary" class="bg-white text-black dark:bg-black dark:text-white" square @click="toggle">
    <SfIconBase v-if="darkMode" viewBox="0 0 24 24" size="sm" :aria-label="$t('Dark Mode')">
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
      />
    </SfIconBase>
    <SfIconBase v-else viewBox="0 0 20 20" size="sm" :aria-label="$t('Light Mode')">
      <path
        d="M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 5.404a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM6.464 14.596a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10ZM14.596 15.657a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 1 0-1.06 1.06l1.06 1.06ZM5.404 6.464a.75.75 0 0 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06Z"
      />
    </SfIconBase>
  </SfButton>
</template>
<script lang="ts" setup>
import { SfButton, SfIconBase } from '@storefront-ui/vue';
const darkMode = ref(false);

function toggle() {
  darkMode.value = darkMode.value ? false : true;
}

watch(darkMode, () => {
  if (darkMode.value) {
    localStorage.theme = 'dark';
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  } else {
    localStorage.theme = 'light';
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  }
});

onMounted(() => {
  if (localStorage.theme === undefined) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localStorage.theme = 'dark';
      darkMode.value = true;
    } else {
      localStorage.theme = 'light';
      darkMode.value = false;
    }
  } else {
    darkMode.value = localStorage.theme === 'dark';
  }
});
</script>
