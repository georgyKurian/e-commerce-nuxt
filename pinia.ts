import { defineStore } from 'pinia';
import { createORM } from 'pinia-orm';
import { createPiniaOrmAxios } from '@pinia-orm/axios';
import axios from 'axios';

export const useStore = defineStore({
  id: 'main',
  state: () => ({
    // your state here
  }),
  actions: {
    // your actions here
  },
});

const piniaOrm = createORM();
piniaOrm().use(
  createPiniaOrmAxios({
    axios,
  }),
);
