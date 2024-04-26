import { createCollection } from 'server'
import { note } from '../domains/note.js'

export const notes = createCollection({
  domains: [note],
})
