import { createDomain, sb } from 'server'

export const note = createDomain({
  schema: sb.object({
    title: sb.string(),
    body: sb.optional(sb.string()),
  })
})
