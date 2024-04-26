import { createCollection } from 'server'
import { task } from '../domains/task.js'

export const tasks = createCollection({
  domains: [task],
})
