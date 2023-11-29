<template>
    <div>
        <ul class="text-2xl my-15">
            <li>
                Episode {{ currentEpisode.episode }} - {{ currentEpisode.name }}
            </li>
            <hr class="border my-1" />
            <li>
              Air date: {{ currentEpisode.air_date }}
            </li>
        </ul>
    </div>
    <div class="grid gap-4 grid-cols-2 my-5 ">
      <div v-for="(character, idx) in currentEpisodeCharacter" :key="idx">
        <div class="flex items-center shadow-2xl bg-white">
          <NuxtLink :to="`/character/${getIdFromUrl(character.url)}`">
            <img :src="character.image" :alt="character.name" class="w-24 mx-1 rounded-full" />
          </NuxtLink>
          <p class="mx-auto">{{ character.name }}</p>
        </div>  
      </div>
    </div>
</template>

<script setup lang="ts">
import { useEpisodesStore } from "@/store/episodes";

const route = useRoute();
const episodesStore = useEpisodesStore();
const { currentEpisode, currentEpisodeCharacter } = storeToRefs(episodesStore);

episodesStore.getCurrentEpisode(route.params.id);

const getIdFromUrl = (url: string) => {
        const urlParts = url.split("/");
        return urlParts[urlParts.length - 1];
}
</script>

<style scoped></style>
