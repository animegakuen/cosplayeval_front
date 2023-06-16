import { type Ref, ref } from 'vue'
import { defineStore } from "pinia";

import { CosplayerAPI, Cosplayers, type CosplayerPayload } from '@/structures/api/Cosplayer';

export const useCosplayerStore = defineStore('cosplayers', () => {
  const cosplayers: Ref<Cosplayers> = ref(new Cosplayers())

  const setCosplayers = async (cosplayer?: CosplayerPayload): Promise<void> => {
    await CosplayerAPI.send(cosplayer)

    cosplayers.value = await CosplayerAPI.fetch()
  }

  return { setCosplayers, cosplayers }
})
