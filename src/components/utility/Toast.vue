<template>
  <Transition name="fade">
    <div class="fixed top-[10px] w-full z-[100]">
      <div
        v-show="toastMessage !== null"
        class="w-fit mx-auto p-4 bg-green-200 text-green-700 shadow-lg rounded-lg"
      >
        {{ toastMessage }}
      </div>
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
    console.log(`curr is ${curr}`)
    setTimeout(() => {
      store.toastMessage = null
    }, 3000)
  }
})
</script>
