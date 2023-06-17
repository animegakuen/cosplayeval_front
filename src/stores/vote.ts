import { type Ref, ref } from 'vue'
import { defineStore } from "pinia";

import { Votes } from '@/structures/api';

export const useVoteStore = defineStore('votes', () => {
  const votes: Ref<Votes> = ref(new Votes())

  const hydrate = (vote: Votes): void => {
    votes.value = vote
  }

  return { votes, hydrate }
})
