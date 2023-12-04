<template>
    <div>
        <div class="mb-4 flex justify-between gap-10">
            <CharacterInput v-model="characterName" />
            <select
            class="w-2/5 sm:w-1/5 text-lg bg-slate-50 px-5 py-2,9 rounded-xl shadow-lg outline-none"
            v-model="characterStatus">
                <option disabled value="">select character's status</option>
                <option v-for="status in characterStatuses" :key="status.value">{{ status.value }}</option>
            </select>
        </div>
        <CharacterList :items="characters"/>
    </div>
</template>

<script setup lang="ts">
import {useCharacterStore} from '~/store/character'
import { useDebouncedRef } from '~/utils/debouncedRef.js'

const characterStore = useCharacterStore();
characterStore.$hydrate()
const { characters } = storeToRefs(characterStore)
characterStore.getCharacters()

const characterName = useDebouncedRef('', 1000);
const characterStatus = ref('alive');

const characterStatuses = ref([
    { value: 'alive' },
    { value: 'dead' },
    { value: 'unknown' },
])

watch([characterName, characterStatus], ([characterName, characterStatus]) => {
    localStorage.setItem('characterName', characterName);
    localStorage.setItem('characterStatus', characterStatus);
    characterStore.filterCharacters({
        name: characterName,
        status: characterStatus
    });
});

onMounted(() => {
    if (localStorage.getItem('characterName')) {
        characterName.value = localStorage.getItem('characterName');
    }
    if (localStorage.getItem('characterStatus')) {
        characterStatus.value = localStorage.getItem('characterStatus');
    }
});
 
</script>

<style scoped></style>
