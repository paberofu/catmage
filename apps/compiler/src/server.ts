import { createServer } from 'server'
import { notes } from './collections/notes.js'
import { tasks } from './collections/tasks.js'
import { users } from './collections/users.js'
import { userStats } from './computeds/userStats.js'
import { note } from './domains/note.js'
import { task } from './domains/task.js'
import { user } from './domains/user.js'

const server = createServer({
  domains: {
    note,
    task,
    user,
  },
  collections: {
    notes,
    tasks,
    users,
  },
  computeds: {
    userStats,
  },
  mutations: {},
})
