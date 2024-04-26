import { createId } from 'common'
import type { DomainInput, Domain } from './types.js'

export function createDomain(input: DomainInput): Domain {
  const id = createId()

  return {
    id,
    schema: input.schema,
  }
}