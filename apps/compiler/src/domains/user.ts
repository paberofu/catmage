import { createDomain, sb } from 'server'
import { note } from './note.js'
import { task } from './task.js'

export const user = createDomain({
  schema: sb.object({
    name: sb.string(),
    notes: sb.array(sb.ref(note)),
    tasks: sb.array(sb.ref(task)),
    favorites: sb.array(sb.union([sb.ref(note), sb.ref(task)]))
  })
})
