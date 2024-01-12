// stores/counter.spec.ts
import { setActivePinia, createPinia } from 'pinia'
import { useMainStore } from '../mainStore'
import { beforeEach, describe, expect, it } from 'vitest'

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
