<script setup>
import { useCosplayerStore } from '../stores/cosplayer'

const cosplayerStore = useCosplayerStore()
cosplayerStore.setCosplayers()
</script>

<template>
  <div class="about">
    <h1>{{cosplayerStore.cosplayers}}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
