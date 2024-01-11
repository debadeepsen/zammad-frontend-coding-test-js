<template>
  <Transition name="fade">
    <div class="fixed top-[10px] w-full z-[100]">
      <div
        v-show="toastMessage !== null"
        class="w-fit mx-auto p-4 shadow-lg rounded-lg"
        v-bind:class="`bg-${toastColor}-200 text-${toastColor}-700`"
      >
        {{ toastMessage?.text }}
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { watch, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '../../store/mainStore'

const store = useMainStore()
const { toastMessage } = storeToRefs(store)

const toastColor = computed(() =>
  store.toastMessage?.type === 'success' ? 'green' : 'red',
)

watch(toastMessage, (curr) => {
  if (!curr) return

  setTimeout(() => {
    store.toastMessage = null
  }, 3000)
})
</script>
