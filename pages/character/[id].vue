<template>
    <div class="flex justify-around items-center shadow-2xl bg-white my-9 ">
        <div class="p-7">
            <img :src="`${currentCharacter.image}`" class="mx-auto my-7 rounded-full transform scale-100 transition duration-300 ease-in-out hover:scale-105" />
        </div>
        <div class="p-7">
            <ul class="text-2xl my-15 ">
              <li>Name: {{ currentCharacter.name }}</li>
              <li>Gender: {{ currentCharacter.gender }}</li>
              <li>Race: {{ currentCharacter.species }}</li>
              <li>Location: {{ currentCharacter.location.name }}</li>
            </ul>
        </div>
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
