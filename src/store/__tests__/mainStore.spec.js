/* eslint-disable import/no-extraneous-dependencies */
import { setActivePinia, createPinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useMainStore } from '../mainStore'

describe('Main Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('sets the toast message', () => {
    const store = useMainStore()
    store.toastMessage = 'Test message'
    expect(store.toastMessage).toEqual('Test message')
  })
})
