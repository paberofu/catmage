import { createComputed } from 'server'
import { users } from '../collections/users'

export const userStats = createComputed((ctx) => {
  const user = ctx.use(users).byId(ctx.args.id)

  return {
    noteCount: user.notes.length,
    taskCount: user.tasks.length,
  }
})