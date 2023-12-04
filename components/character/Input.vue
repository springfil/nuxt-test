<template>
    <input
        class="w-1/2 sm:w-2/5 text-lg bg-slate-50 px-5 py-2 rounded-xl shadow-lg outline-none"
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        placeholder="Input character's name"
    />
</template>
  
<script setup lang="ts">
interface Props {
    modelValue: string
}

defineProps<Props>();
</script>