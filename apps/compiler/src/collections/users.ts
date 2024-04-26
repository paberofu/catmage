import { createCollection } from 'server'
import { user } from '../domains/user.js'

export const users = createCollection({
  domains: [user],
})