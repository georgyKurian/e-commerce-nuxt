<template>
  <div>
    <form>
      <select v-model="locale">
        <option v-for="lang in locales" :key="lang.code" :value="lang.code">
          {{ lang.name }}
        </option>
      </select>
    </form>
  </div>
</template>
<script setup>
const { locale, locales } = useI18n();
</script>
