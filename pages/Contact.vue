<template>
  <ContactForm />
</template>

<script lang="ts" setup>
const { t } = useI18n();

definePageMeta({
  title: () => t('Contact-Us'),
});

useHead({
  link: [{ rel: 'canonical', href: 'https://vue-ecom.vercel.app/contact' }],
});
</script>
