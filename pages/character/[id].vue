<template>
    
        <div class="flex justify-center items-center shadow-2xl bg-white my-9 gap-10">
            <img :src="`${currentCharacter.image}`" class="w-48 my-7 rounded-full transform scale-100 transition duration-300 ease-in-out hover:scale-105" />
            <ul class="text-xs my-15 ">
              <li>Name: {{ currentCharacter.name }}</li>
              <li>Gender: {{ currentCharacter.gender }}</li>
              <li>Race: {{ currentCharacter.species }}</li>
              <li>Location: {{ currentCharacter.location.name }}</li>
            </ul>
        </div>
       
</template>

<script setup>
import { useCharacterStore } from "@/store/character";

const characterStore = useCharacterStore();
const { currentCharacter } = storeToRefs(characterStore);

const route = useRoute();
characterStore.getCurrentCharacter(route.params.id);
</script>

<style scoped></style>
