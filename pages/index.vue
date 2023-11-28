<template>
    <div>
       
    </div>
</template>

<script setup lang="ts">
import {useCharacterStore} from '@/store/character'

const characterStore = useCharacterStore();

characterStore.getCharacters()
</script>

<style scoped></style>
