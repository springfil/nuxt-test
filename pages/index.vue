<template>
    <div>
        {{ data }}
    </div>
</template>

<script setup lang="ts">
import { useApi } from '~/composable/useApi';

const api = useApi()
const { data } = await api({
    method: 'get',
    url: '/character'
})
</script>

<style scoped></style>
