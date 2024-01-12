<template>
  <div class="fixed top-[10px] w-full z-[100]">
    <div
      data-testid="toast"
      v-show="toastMessage !== null"
      class="w-fit mx-auto p-4 shadow-lg rounded-lg"
      v-bind:style="{
        'background-color':
          store.toastMessage?.type === 'success' ? '#86efac' : '#fda4af',
      }"
    >
      {{ toastMessage?.text }}
    </div>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '../../store/mainStore'

const store = useMainStore()
const { toastMessage } = storeToRefs(store)

watch(toastMessage, (curr) => {
  if (!curr) return

  setTimeout(() => {
    store.toastMessage = null
  }, 3000)
})
</script>
