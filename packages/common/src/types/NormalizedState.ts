import type { Id } from './Id.js'

export type NormalizedState<T> = {
  byId: Record<Id, T>,
  ids: Id[],
}