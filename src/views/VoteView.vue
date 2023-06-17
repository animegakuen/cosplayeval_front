<script setup lang="ts">
import { useCosplayerStore } from '@/stores/cosplayer';
import { useVoteStore } from '@/stores/vote';
import { useRoute, useRouter } from 'vue-router';

const { setVotes } = useVoteStore()
const { cosplayers } = useCosplayerStore()

const id = useRoute().params.id
const idFormat = parseInt(id)
const data = cosplayers.get(idFormat)
const router = useRouter()

const onSubmit = () => {
  const number = Number.parseInt(id)
  const vote = Number.parseFloat((document.getElementById('cosplayerVote') as HTMLInputElement).value)
  const name = document.cookie
    .split("; ")
    .find((row) => row.startsWith("jury="))
    ?.split("=")[1];

  (document.getElementById('cosplayerVote') as HTMLInputElement).value = '';

  setVotes({ cosplayerId: number, score: vote, juryName: name! })
  router.push({ path: `/vote/${number + 1}` })
}

</script>

<template>
  <main class="login">
    <div v-if="data" class="form">
      <h1>
        cosplayer:
      </h1>
      <p id="cosplayerNumber">{{ data?.id }}</p>
      <p>{{ data?.name }}</p>
      <h1>Cosplay:</h1>
      <p>{{ data?.characterName }}</p>
      <h4>
        Nota cosplayer:
      </h4>
      <input id="cosplayerVote" type="number" min="1" max="10" class="cosplayerVote" />

      <button type="submit" @click="onSubmit" class="submit">
        Enviar
      </button>

      <button type="submit" class="submit">
        Pular
      </button>
    </div>
    <img v-else src="../img/folks.jpg" alt="" class="end">
  </main>
</template>

<style scoped>
.login {
  display: flex;
  height: 100vh;
  width: 100vw;

  justify-content: center;
  align-items: center;
}

.form {
  display: flex;
  height: 20%;
  width: 60%;

  flex-direction: column;
  align-items: center;
}

.form input {
  width: 65vw;
  margin-bottom: 25px;
}

.submit {
  border: none;
  height: 45px;
}

.end {
  width: 100vw;
}
</style>
