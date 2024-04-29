import type { Id } from '../types/index.js'

export function createId(): Id {
  return Math.random().toString(36).substring(2, 12)
}