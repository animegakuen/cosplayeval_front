<script setup lang="ts">
import { useCosplayerStore } from '@/stores/cosplayer';

const props = defineProps({
  cosplayerId: {
    type: Number,
    required: true
  }
})

const { cosplayers } = useCosplayerStore()
const cosplayer = cosplayers.get(props.cosplayerId)
</script>

<template>
  <div>
    {{ cosplayer?.id }}
  </div>
</template>

<style scoped></style>
