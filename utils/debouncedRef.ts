import { customRef } from 'vue'

export function useDebouncedRef(value, delay = 200) {
  let timeout: NodeJS.Timeout
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      }
    }
  })
}