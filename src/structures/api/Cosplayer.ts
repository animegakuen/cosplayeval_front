import { BaseAPI } from "./Base"

/**
 * What we send to the API to register a cosplayer.
 */
export interface CosplayerPayload {
  characterName: string
  images: string[]
  name: string
  nickname: string
  phoneNumber: string
}

/**
 * What we receive when searching the API for cosplayers.
 */
export interface CosplayerData extends CosplayerPayload {
  id: number
}

/**
 * Helper class to manipulate data inside the array of cosplayers more easily.
 */
export class Cosplayers extends Array<CosplayerData> {
  /**
   * Allow us to instance out the class with pre-defined cosplayers.
   */
  constructor(items?: CosplayerData[]) {
    super()

    items?.forEach(i => this.push(i))
  }

  /**
   * @param {number} id The ID of the cosplayer you want to find.
   * @returns The cosplayer's data if they exist.
   */
  get(id: number): CosplayerData | null {
    return this.find(c => c.id === id) ?? null
  }
}

/**
 * Helper class to deal with the Cosplayer endpoints of the API.
 */
export class CosplayerAPI extends BaseAPI {
  /** The URL of the cosplay endpoint. */
  static url = `${BaseAPI.url}/cosplayers`

  /** Fetches all the cosplayers */
  static async fetch(): Promise<Cosplayers> {
    const request = await fetch(CosplayerAPI.url, { mode: 'cors' })

    return new Cosplayers(await request.json())
  }

  /**
   * Sends a cosplayer to be registered.
   * @param {CosplayerPayload} payload
   */
  static async send(payload: CosplayerPayload): Promise<void> {
    await fetch(CosplayerAPI.url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
  }

  /**
   * Fetches the images of a cosplayer by their ID.
   * @param {number} id The ID of the cosplayer you want the images of.
   * @returns The relative path to all the images of a cosplayer, if none, the array is empty.
   */
  static async fetchImages(id: number): Promise<string[]> {
    const request = await fetch(`${CosplayerAPI.url}/images/${id}`, { mode: 'cors' })

    return request.json()
  }
}

