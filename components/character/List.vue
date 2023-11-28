<template>
    <div class="grid gap-4 grid-cols-2">
      <div v-for="(item, id) in items" :key="id"  >
        <CharacterCard :item="item" />
      </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    items: Array<Object>;
}

const props = defineProps<Props>()
</script>

<style scoped></style>
