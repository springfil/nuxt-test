<template>
    <div class="shadow-2xl bg-white grid gap-1 grid-cols-2 sm:flex sm:gap-5 sm:rounded-full">
        <div >
            <img
                :src="item.image"
                class="w-40 sm:w-full my-5 sm:my-0  h-48 sm:h-40 md:h-48 object-cover sm:rounded-full transform scale-100 transition duration-300 ease-in-out hover:scale-105"
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
            <div class="mt-4 flex flex-wrap">
              <div 
              class="transition duration-300 ease-in-out hover:scale-110 px-2 btn mx-1 my-1 w-16" 
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
