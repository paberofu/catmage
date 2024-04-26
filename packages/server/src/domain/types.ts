import type { Id } from 'common'
import type { Schema } from '../schema/index.js'

export type DomainInput = {
  schema: Schema,
}

export type Domain = {
  id: Id,
  schema: Schema,
}