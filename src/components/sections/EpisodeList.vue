<template>
  <div class="py-4 w-full">
    <div v-if="!!episodeList">
      <h1>Schedule for today</h1>
      <div class="w-[95%] mt-6 mx-auto flex flex-wrap">
        <EpisodeInfo
          v-for="episode in episodeList"
          v-bind:episode="episode"
          v-bind:key="episode.id"
          v-on:showdetails="(showId) => console.log(showId)"
        />
      </div>
    </div>
    <div v-else>
      <Loading />
    </div>
    <Modal
      v-bind:show="store.currentShowId !== null"
      v-on:close="clearCurrentShow"
    >
      <ShowInfo />
    </Modal>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getData } from '../../lib/fetchUtils'
import { SCHEDULE } from '../../lib/endPoints'
import EpisodeInfo from './EpisodeInfo.vue'
import Modal from '../utility/Modal.vue'
import { useMainStore } from '../../store/mainStore'
import ShowInfo from './ShowInfo.vue'
import Loading from '../utility/Loading.vue'

const store = useMainStore()
const episodeList = ref(null)

const clearCurrentShow = () => {
  store.currentShowId = null
}

onMounted(async () => {
  try {
    const data = await getData(SCHEDULE)
    episodeList.value = data
  } catch (e) {
    console.error(e)
  }
})
</script>

<style scoped>
h1 {
  @apply text-4xl;
}
</style>
