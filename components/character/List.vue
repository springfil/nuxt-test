<template>
    <div class="grid gap-4 grid-cols-1 lg:grid-cols-2">
      <div v-for="(item, id) in items" :key="id"  >
        <CharacterCard :item="item" />
      </div>
    </div>
</template>

<script setup lang="ts">
import type { Character } from '~/types/character';

interface Props {
    items: Array<Character>;
}

defineProps<Props>()
</script>

<style scoped></style>
