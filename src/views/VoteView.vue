<script setup lang="ts">
import { VoteAPI } from '@/structures/api';

const onSubmit = () => {
  const number = Number.parseInt((document.getElementById('cosplayerNumber') as HTMLInputElement).value)
  const vote = Number.parseFloat((document.getElementById('cosplayerVote') as HTMLInputElement).value)
  const name = document.cookie
    .split("; ")
    .find((row) => row.startsWith("jury="))
    ?.split("=")[1];

  (document.getElementById('cosplayerNumber') as HTMLInputElement).value = '';
  (document.getElementById('cosplayerVote') as HTMLInputElement).value = '';

  VoteAPI.send({ cosplayerId: number, score: vote, juryName: name! })
}
</script>

<template>
  <main class="login">
    <div class="form">
      <h1>
        Vote em um cosplayer:
      </h1>
      <h4>
        Numero:
      </h4>
      <input id="cosplayerNumber" type="number" min="1" max="100" class="cosplayerNumber" />

      <h4>
        Nota cosplayer:
      </h4>
      <input id="cosplayerVote" type="number" min="1" max="100" class="cosplayerVote" />

      <button type="submit" @click="onSubmit" class="submit">
        Enviar
      </button>
    </div>
  </main>
</template>

<style scoped>
.login {
  width: 100%;
  height: 100%;
}

.form {
  display: flex;
  height: 20%;
  width: 90%;
}

.form input {
  margin-bottom: 25px;
}

.cosplayerNumber {
  width: 20%;
  margin: 0 15px 0 15px;
}

.cosplayerVote {
  width: 20%;
  margin: 0 15px 0 15px;
}

.submit {
  width: 20%;
}
</style>
