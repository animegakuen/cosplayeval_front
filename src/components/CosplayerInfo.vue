<script setup lang="ts">
import type { CosplayerData } from '@/structures/api';
import { useRouter } from 'vue-router';

const props = defineProps({
  cosplayer: {
    type: Object,
    required: true
  }
})

const cosplayer = props.cosplayer as CosplayerData
</script>

<template>
  <div class="grid">
    <span class="order">
      {{ cosplayer.id }}
    </span>

    <h3>Nome do cosplayer</h3>
    <span>
      {{ cosplayer.nickname.length ? cosplayer.nickname : cosplayer.name }}
    </span>

    <h3>Nome do personagem</h3>
    <span>
      {{ cosplayer.characterName }}
    </span>
  </div>
</template>

<style scoped>
* {
  text-align: center;
}

h3 {
  color: rgb(187, 140, 66);
}

.grid {
  border: 4px dashed rgba(187, 187, 187, 0.8);
  display: flex;
  flex-direction: column;
  margin: 1em 0;
  padding: 1em 3em;
}

.order {
  bottom: 62%;
  font-size: 2em;
  position: absolute;
  right: 92%;
  text-align: left;
}
</style>
