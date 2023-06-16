<script setup lang="ts">
import { RouterLink } from 'vue-router'

const onSubmit = () => {
  document.cookie += `jury=${(document.getElementById('username') as HTMLInputElement).value}`
}
</script>

<template>
  <main class="login">
    <div class="form">
      <h2>
        Coloque seu nome:
      </h2>
      <input id="username" type="text" class="username" />
      <RouterLink to="/vote" class="submit">
        <button type="submit" @click="onSubmit">
          Enviar
        </button>
      </RouterLink>
    </div>
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

.username {
  width: 60%;
  margin: 10px;
}

.submit {
  width: 10%;
}

.submit button {
  width: 100%;
}
</style>
