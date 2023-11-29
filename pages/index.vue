<template>
    <div>
        <div class="mb-4 flex justify-between gap-10">
            <input
                class="w-2/5 text-lg bg-slate-50 px-5 py-2 rounded-xl shadow-lg outline-none"
                type="text"
                v-model="characterName"
                name="text"
                placeholder="Input character's name "
            />
            <select
            class="w-1/5 text-lg bg-slate-50 px-5 py-2,9 rounded-xl shadow-lg outline-none"
            v-model="characterStatus">
                <option disabled value="">select character's status</option>
                <option v-for="status in characterStatuses" :key="status.value">{{ status.value }}</option>
            </select>
        </div>
        <CharacterList :items="characters"/>
    </div>
</template>

<script setup lang="ts">
import {useCharacterStore} from '@/store/character'

const characterStore = useCharacterStore();
const { characters } = storeToRefs(characterStore)
characterStore.getCharacters()

const characterName = ref('');
const characterStatus = ref('alive')
 
const characterStatuses = ref([
    { value: 'alive' },
    { value: 'dead' },
    { value: 'unknown' },
])


watch([characterName, characterStatus], ([characterName, characterStatus]) => {
    characterStore.filterCharacters({
      name: characterName,
      status: characterStatus
    });
});

</script>

<style scoped></style>
