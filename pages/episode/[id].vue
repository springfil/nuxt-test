<template>
    <Head>
      <Title>Episode {{ currentEpisode.episode }} - {{ currentEpisode.name }}</Title>
      <Meta name="description" :content="currentEpisode.name" />
    </Head>
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
    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 my-5 ">
      <div v-for="(character, idx) in currentEpisodeCharacter" :key="idx">
        <div class="flex items-center shadow-2xl bg-white ">
          <NuxtLink :to="`/character/${getIdFromUrl(character.url)}`">
            <img :src="character.image" :alt="character.name" class="w-24 " />
          </NuxtLink>
          <p class="mx-auto">{{ character.name }}</p>
        </div>  
      </div>
    </div>
</template>

<script setup lang="ts">
import { useEpisodesStore } from "~/store/episodes";
import { getIdFromUrl } from '~/utils/getIdFromUrl';

const route = useRoute();
const episodesStore = useEpisodesStore();
const { currentEpisode, currentEpisodeCharacter } = storeToRefs(episodesStore);

episodesStore.getCurrentEpisode(route.params.id);
</script>

<style scoped></style>
