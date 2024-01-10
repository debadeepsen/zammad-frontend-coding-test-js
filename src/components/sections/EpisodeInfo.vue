<template>
  <div
    v-bind:key="episode.id"
    class="m-1 w-full lg:w-[32%] flex flex-col lg:flex-row p-4 border bg-white rounded-md"
  >
    <div class="flex justify-center lg:justify-left">
      <img
        class="h-64 w-64 lg:h-40 lg:w-32 object-cover rounded-md"
        alt="poster"
        v-bind:src="episode.show.image.medium"
      />
    </div>
    <div class="flex flex-col justify-between w-full">
      <div class="text-center lg:text-left lg:pl-4">
        <h2>{{ episode?.show?.name }}</h2>
        <div class="mt-1">{{ episode?.name }}</div>
        <div class="mt-1 text-zinc-500 text-xs">
          (Season {{ episode?.season }} Episode {{ episode?.number }})
        </div>
      </div>
      <div class="text-right">
        <button class="w-full mt-4 lg:mt-0 p-3 lg:p-1 lg:w-auto border border-teal-600/50 rounded-md text-sm text-teal-600 bg-teal-300/10 hover:bg-teal-300/30 transition-all">Details...</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['episode'])
console.log(props)
</script>

<style scoped>
h2 {
  @apply font-semibold text-xl;
}
</style>
