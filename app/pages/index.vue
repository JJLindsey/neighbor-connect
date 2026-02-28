<script setup lang="ts">
import Hero from '~/components/sections/Hero.vue';
const {client} = useClient()
</script>

<template>
    <div>
        <Hero :client="client" />
    </div>
</template>