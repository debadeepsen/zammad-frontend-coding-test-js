<template>
  <div
    v-show="show"
    class="bg-zinc-600/70 fixed left-0 top-0 w-screen h-screen z-[100] flex justify-center items-center"
    v-on:click="() => $emit('close')"
  >
    <div
      class="rounded-lg shadow-xl p-4 bg-white w-full lg:min-w-[300px] max-w-[600px] relative"
      v-on:click.stop=""
    >
      <button
        class="absolute top-0 right-[6px] text-2xl"
        v-on:click="() => $emit('close')"
      >
        &times;
      </button>
      <div class="mt-4"><slot /></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: Boolean,
})
defineEmits(['close'])
</script>
