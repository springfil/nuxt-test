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
            <ul>
                <li class="mt-1">
                    <span class="font-bold">Имя:</span> {{ item.name }}
                </li>
                <li class="mt-1">
                    <span class="font-bold">Пол:</span> {{ item.gender }}
                </li>
                <li class="mt-1">
                    <span class="font-bold">Вид:</span> {{ item.species }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    item: {
        name: string;
        gender: string;
        species: string;
        image: string
    };
}

const props = defineProps<Props>();
</script>

<style scoped>
img{
    user-select: none;
}
</style>
