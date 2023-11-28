<template>
   <div>
        <div>
            <CharacterList :items="characters"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import {useCharacterStore} from '@/store/character'

const characterStore = useCharacterStore();
const { characters, currentCharacter } = storeToRefs(characterStore)

characterStore.getCharacters()
</script>

<style scoped></style>
