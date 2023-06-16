<script setup lang="ts">
import CosplayerInfo from '@/components/CosplayerInfo.vue'
import { useCosplayerStore } from '@/stores/cosplayer'

const { cosplayers } = useCosplayerStore()
</script>

<template>
  <div v-for="{ id } in cosplayers" :key="id">
    <CosplayerInfo :cosplayer-id="id" />
  </div>
</template>

<style scoped></style>
