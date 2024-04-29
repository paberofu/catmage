import type { EventMap } from '../types/index.js'

export function createEventMap<T extends string, U>(events: T[]): EventMap<T, U> {
  const eventMap: Record<string, U> = {}

  for (const event of events) {
    eventMap[event] = [] as U
  }

  return eventMap as EventMap<T, U>
}