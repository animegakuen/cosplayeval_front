<script setup lang="ts">
import { useCosplayerStore } from '@/stores/cosplayer';
import { useVoteStore } from '@/stores/vote';
import { computed, ref } from 'vue';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';

const { cosplayers } = useCosplayerStore()
const { setVotes } = useVoteStore()

const data = computed(() => cosplayers.get(idFormat.value))
const id = ref(useRoute().params.id)
const idFormat = computed(() => parseInt(id.value as string))

const router = useRouter()

const onSubmit = () => {
  const vote = Number.parseFloat((document.getElementById('cosplayerVote') as HTMLInputElement).value)
  const name = document.cookie
    .split("; ")
    .find((row) => row.startsWith("jury="))
    ?.split("=")[1];

  (document.getElementById('cosplayerVote') as HTMLInputElement).value = '';

  setVotes({ cosplayerId: idFormat.value, score: vote, juryName: name! })
  router.push({ path: `/vote/${idFormat.value + 1}` })
}

const onSkip = () => router.push({ path: `/vote/${idFormat.value + 1}` })

onBeforeRouteUpdate((to, from) => {
  if (to.params.id !== from.params.id) {
    id.value = to.params.id
  }
})
</script>

<template>
  <main class="login">
    <section v-if="data">
      <div class="info">
        <h1>
          Cosplayer:
        </h1>
        <p id="cosplayerNumber">{{ data?.id }} - {{ data?.name }}</p>
        <h1>Cosplay:</h1>
        <p>{{ data?.characterName }}</p>
      </div>

      <div class="form">
        <h2>
          Nota cosplayer:
        </h2>
        <input id="cosplayerVote" type="number" min="1" max="10" class="cosplayerVote" />

        <button type="submit" @click="onSubmit" class="submit">
          Enviar
        </button>

        <button type="submit" @click="onSkip" class="submit">
          Pular
        </button>
      </div>
    </section>
    <img v-else src="@/assets/folks.jpg" alt="" class="end">
  </main>
</template>

<style scoped>
.login {
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.info {
  text-align: center;
}

.form {
  display: flex;
  margin: 3px;
  height: 20%;
  width: 60vw;

  flex-direction: column;
  align-items: center;
}

.form h2 {
  margin: 5px;
}

.form input {
  width: 65vw;
  margin-bottom: 25px;
}

.submit {
  border: none;
  height: 45px;
  width: 55vw;
  border-bottom: #cacaca 1px solid;
  border-left: #cacaca 1px solid;
  margin-bottom: 3px;
  border-radius: 3%;
}

.end {
  width: 100vw;
}
</style>
