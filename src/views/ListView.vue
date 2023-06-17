<script setup lang="ts">
import CosplayerInfo from '@/components/CosplayerInfo.vue'
import { useCosplayerStore } from '@/stores/cosplayer'

const { cosplayers } = useCosplayerStore()
</script>

<template>
  <section>
    <div v-for="cosplayer in cosplayers" :key="cosplayer.id">
      <CosplayerInfo :cosplayer="cosplayer" />
    </div>
  </section>
</template>

<style scoped>
section {
  display: grid;
}
</style>
