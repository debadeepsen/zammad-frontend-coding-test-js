<template>
  <div
    v-bind:key="episode.id"
    class="m-1 w-full lg:w-[32%] p-4 border bg-white rounded-md"
  >
    <h2>{{ episode.show.name }}</h2>
  </div>
</template>

<script setup>
const props = defineProps(['episode'])
console.log(props)
</script>

<style scoped>
h2 {
  @apply text-2xl;
}
</style>
