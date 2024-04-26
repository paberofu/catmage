import { createDomain, sb } from 'server'

export const task = createDomain({
  schema: sb.object({
    title: sb.string(),
    description: sb.optional(sb.string()),
    dona: sb.boolean(),
  })
})
