<script setup lang="ts">
import { ref } from 'vue'

import { CosplayerAPI } from '@/structures/api';

const characterName = ref('')
const name = ref('')
const nickname = ref('')
const phoneNumber = ref('')

const onSubmit = () => {
  CosplayerAPI.send({
    characterName: characterName.value,
    name: name.value,
    nickname: nickname.value,
    phoneNumber: phoneNumber.value,
    images: []
  })
}
</script>

<template>
  <main  class="register">
    <div class="form">
      <label>
        personagem
        <input name="characterName" type="text" v-model="characterName" />
      </label>

      <label>
        Nome
        <input name="name" type="text" v-model="name" />
      </label>

      <label>
        Apelido
        <input name="nickname" type="text" v-model="nickname" />
      </label>

      <label>
        Telefone
        <input name="phoneNumber" type="text" v-model="phoneNumber" />
      </label>

      <button @click="onSubmit" class="submit">Enviar</button>
    </div>
  </main>
</template>

<style scoped>
.register {
  display: flex;
  height: 100vh;
  width: 100vw;

  justify-content: center;
  align-items: center;
}

.form {
  flex-direction: column;
  display: flex;
}

.form input {
  margin-bottom: 25px;
  width: 100%;
}

.submit {
  border: none;
  height: 45px;
}
</style>
