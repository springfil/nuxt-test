<template>
    <div class="shadow-2xl bg-white flex gap-5 rounded-full">
        <div >
            <img
                :src="item.image"
                class="w-full h-20 sm:h-32 md:h-48 object-cover rounded-full transform scale-100 transition duration-300 ease-in-out hover:scale-105"
                alt="avatar"
            />
        </div>
        <div> 
            <div>
                <ul>
                    <li class="mt-1">
                        <span class="font-bold">Name:</span> <NuxtLink class="  hover:text-emerald-500" :to="`/character/${item.id}`">{{ item.name }}</NuxtLink>
                    </li>
                    <li class="mt-1">
                        <span class="font-bold">Gender:</span> {{ item.gender }}
                    </li>
                    <li class="mt-1">
                        <span class="font-bold">Race:</span> {{ item.species }}
                    </li>
                </ul>
            </div>
            <div class="mt-8 flex flex-wrap">
              <div 
              class="transition duration-300 ease-in-out hover:scale-110 px-3 btn mx-2" 
              v-for="(episode, idx) in firstFiveEpisodes" :key="idx" 
              bgColor="bg-amber-500" textColor="text-slate-50">
                <NuxtLink :to="`/episode/${getIdFromUrl(episode)}`">Ep. {{ getIdFromUrl(episode) }} </NuxtLink>
            </div>
            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import type { Character } from '~/types/character';

interface Props {
    item: Character
}

const props = defineProps<Props>();

const firstFiveEpisodes = computed(() => {
    return props.item.episode.slice(0, 5);
});

const getIdFromUrl = (url: string) => {
        const urlParts = url.split("/");
        return urlParts[urlParts.length - 1];
}
</script>

<style scoped>
img{
    user-select: none;
}
</style>
