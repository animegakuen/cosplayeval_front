import { BaseAPI } from "./Base"
import type { Cosplayers } from "./Cosplayer"

/**
 * A jury's vote on a cosplayer's performance.
 */
export interface Vote {
  cosplayerId: number
  juryName: string
  score: number
}

/**
 * Helper class to manipulate data inside the array of votes more easily.
 */
export class Votes extends Array<Vote> {
  /**
   * Returns the placements of the cosplayers competing.
   * @param {Cosplayers} cosplayers The cosplayers to get the placement of.
   */
  placements(cosplayers: Cosplayers): { cosplayer: string, score: number }[] {
    return this
      .sort((a, b) => b.score - a.score) // Sort it descending by score
      .map(v => {
        return {
          cosplayer: cosplayers.get(v.cosplayerId)?.name ?? '',
          score: v.score
        }
      })
  }
}

/**
 * Helper class to deal with the Cosplayer endpoints of the API.
 */
export class VoteAPI extends BaseAPI {
  /** The URL of the cosplay endpoint. */
  static url = `${BaseAPI.url}/votes`

  /** Fetches all the cosplayers */
  static async fetch(): Promise<Votes> {
    const request = await fetch(VoteAPI.url, { mode: 'cors' })

    return new Votes(await request.json())
  }

  /**
   * Sends a cosplayer to be registered.
   * @param {CosplayerPayload} payload
   */
  static async send(payload: Vote): Promise<void> {
    await fetch(VoteAPI.url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
  }
}
