/* eslint-disable import/no-extraneous-dependencies */
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import EpisodeList from '../sections/EpisodeList.vue'

describe('Episode List', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('checks for the file', () => {
    expect(EpisodeList).toBeTruthy()
    const wrapper = mount(EpisodeList)
    expect(wrapper).toBeTruthy()
  })
})
