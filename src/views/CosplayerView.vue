<script setup>
import { useCosplayerStore } from '@/stores/cosplayer'

const cosplayerStore = useCosplayerStore()
cosplayerStore.setCosplayers()
</script>

<template>
  <div id="test">
    <div v-for="cosplayer in cosplayerStore.cosplayers" :key="cosplayer.id">
      {{ cosplayer.name }} - {{ cosplayer.stageName }} - {{ cosplayer.images }}
      <div v-for="image in cosplayer.images" :key="image">
        <img :src="image" />
      </div>
    </div>
  </div>
</template>
