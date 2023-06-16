import { type Ref, ref } from 'vue'
import { defineStore } from "pinia";

import { VoteAPI, Votes, type Vote } from '@/structures/api';

export const useVoteStore = defineStore('votes', () => {
  const votes: Ref<Votes> = ref(new Votes())

  const setVotes = async (vote?: Vote): Promise<void> => {
    if (vote)
      await VoteAPI.send(vote)

    votes.value = await VoteAPI.fetch()
  }

  return { setVotes, votes }
})
