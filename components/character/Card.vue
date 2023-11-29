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
                        <span class="font-bold">Имя:</span> <NuxtLink class="  hover:text-emerald-500" :to="`/character/${item.id}`">{{ item.name }}</NuxtLink>
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
              <AppBadge 
              class="transition duration-300 ease-in-out hover:scale-110 px-3 btn mx-2" 
              v-for="(episode, idx) in firstFiveEpisodes" :key="idx" 
              bgColor="bg-amber-500" textColor="text-slate-50">
                <NuxtLink :to="`/episode/${idx}`">Ep. {{ idx }}</NuxtLink>
              </AppBadge>
            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">
interface Props {
    item: {
        name: string;
        gender: string;
        species: string;
        image: string;
        status: string;
        episode: string;
        id: number
    };
}

const props = defineProps<Props>();

const heroStatus = computed(() => {
 return props.item.status   
})

const firstFiveEpisodes = computed(() => {
    return props.item.episode.slice(0, 5);
});
</script>

<style scoped>
img{
    user-select: none;
}
</style>
