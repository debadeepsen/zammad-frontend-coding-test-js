/* eslint-disable import/no-extraneous-dependencies */
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import EpisodeList from '../sections/EpisodeList.vue'

describe('Episode List', () => {
  let wrapper
  beforeEach(() => {
    setActivePinia(createPinia())
    wrapper = mount(EpisodeList)
  })

  it('checks for the component to be rendered', () => {
    expect(EpisodeList).toBeTruthy()
    expect(wrapper).toBeTruthy()
  })

  it('checks that the modal is available', () => {
    expect(wrapper.get('[data-testid="modal"]')).toBeTruthy()
  })

  it('checks that the toast is available', () => {
    expect(wrapper.get('[data-testid="toast"]')).toBeTruthy()
  })
})
