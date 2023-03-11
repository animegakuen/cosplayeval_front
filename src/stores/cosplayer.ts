import { type Ref, ref } from 'vue'
import { defineStore } from "pinia";

const endpoint = 'http://localhost:5000/cosplayers'

/**
 * What we send to the API to register a cosplayer.
 */
export interface CosplayerPayload {
  images: string[]
  name: string
  stageName: string
}

/**
 * What we receive when searching the API for cosplayers.
 */
export interface Cosplayer extends CosplayerPayload {
  id: number
}

export const useCosplayerStore = defineStore('cosplayers', () => {
  const cosplayers: Ref<Cosplayer[]> = ref([])

  const setCosplayers = async (cosplayer?: CosplayerPayload): Promise<void> => {
    if (cosplayer)
      await fetch(endpoint, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cosplayer)
      })

    cosplayers.value = await (await fetch(endpoint, { mode: 'cors' })).json()
  }

  return { setCosplayers, cosplayers }
})
