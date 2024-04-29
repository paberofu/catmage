import type { NormalizedState } from '../types/index.js'

export function createNormalizedState<T>(): NormalizedState<T> {
  return {
    byId: {},
    ids: [],
  }
}