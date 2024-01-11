<template>
  <div>
    <div v-if="showInfo">
      <div class="flex flex-col lg:flex-row">
        <div class="flex justify-center lg:justify-left">
          <img
            class="mt-4 lg:mt-0 h-[360px] min-w-[240px] object-cover rounded-md"
            alt="poster"
            v-bind:src="showInfo.image.medium"
          />
        </div>
        <div class="text-center lg:text-left p-4 box-border">
          <h2 class="text-2xl">{{ showInfo.name }}</h2>
          <div class="mt-2">
            <a
              target="_blank"
              v-bind:href="showInfo.officialSite"
              class="text-sky-600"
              >{{ showInfo.officialSite }}</a
            >
          </div>
          <div v-if="showInfo?.genres" class="mt-4 flex flex-wrap">
            <span
              v-for="(g, i) in showInfo.genres"
              v-bind:key="i"
              class="bg-zinc-200/50 py-2 px-4 rounded-full mr-1"
              >{{ g }}</span
            >
          </div>
          <div class="mt-4" v-html="showInfo.summary"></div>
          <div class="mt-4 text-xs text-zinc-500" v-if="showInfo.premiered">
            Premiered
            {{
              new Date(showInfo?.premiered).toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            }}
          </div>
        </div>
      </div>
    </div>
    <div v-else><Loading /></div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'
import { useMainStore } from '../../store/mainStore'
import { getData } from '../../lib/fetchUtils'
import { SHOW_DETAILS } from '../../lib/endPoints'
import Loading from '../utility/Loading.vue'

const store = useMainStore()
const { currentShowId } = storeToRefs(store)

const showInfo = ref(null)

watch(currentShowId, async (curr) => {
  if (curr === null) {
    showInfo.value = null
    return
  }

  const data = await getData(`${SHOW_DETAILS}${curr}`)
  showInfo.value = data
  store.toastMessage = 'Show information fetched successfully'
})
</script>
