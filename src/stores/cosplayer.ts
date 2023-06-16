import { type Ref, ref } from 'vue'
import { defineStore } from "pinia";

import { Cosplayers } from '@/structures/api/Cosplayer';

export const useCosplayerStore = defineStore('cosplayers', () => {
  const cosplayers: Ref<Cosplayers> = ref(new Cosplayers())

  const hydrate = (data: Cosplayers): void => {
    cosplayers.value = data
  }

  return { cosplayers, hydrate }
})
