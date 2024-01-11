<template>
  <Transition>
    <div
      v-show="toastMessage !== null"
      class="fixed top-[20px] w-fit mx-auto p-4 bg-green-200 text-green-700 shadow-lg"
    >
      {{ toastMessage }}
    </div>
  </Transition>
</template>

<script setup>
import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '../../store/mainStore'

const store = useMainStore()
const { toastMessage } = storeToRefs(store)

watch(toastMessage, (curr) => {
  if (curr) {
    setTimeout(() => {
      store.toastMessage = null
    }, 3000)
  }
})
</script>
