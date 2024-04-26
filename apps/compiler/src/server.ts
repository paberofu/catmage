import { Server } from 'server'
import { note } from './domains/note.js'
import { task } from './domains/task.js'
import { user } from './domains/user.js'

const server = new Server({
  collections: {},
  computeds: {},
  domains: {
    note,
    task,
    user,
  },
  mutations: {},
})

server.domain('note').byId()