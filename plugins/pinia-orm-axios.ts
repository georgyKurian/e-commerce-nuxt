import { createORM } from 'pinia-orm';
import { setActivePinia } from 'pinia';
import { defineNuxtPlugin } from '#app';

import { piniaOrmPluginAxios } from '@pinia-orm/axios';

export default defineNuxtPlugin((nuxtApp) => {
  const piniaOrm = createORM();
  piniaOrm().use(piniaOrmPluginAxios);
  nuxtApp.$pinia.use(piniaOrm);
  setActivePinia(nuxtApp.$pinia);
});
