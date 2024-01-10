/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMainStore = defineStore('main', () => {
  const currentShowId = ref(null)

  return { currentShowId }
})
