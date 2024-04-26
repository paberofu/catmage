import type { Id } from 'common'

export type Schema =
  | ObjectSchema
  | ArraySchema
  | UnionSchema
  | RefSchema
  | StringSchema
  | NumberSchema
  | BooleanSchema
  | LiteralSchema

export interface ObjectSchema extends BaseSchema {
  type: 'object',
  properties: Record<string, Schema>
}

export interface ArraySchema extends BaseSchema {
  type: 'array',
  elements: Schema,
}

export interface UnionSchema extends BaseSchema {
  type: 'union',
  variants: Schema[],
}

export interface RefSchema extends BaseSchema {
  type: 'ref',
  target: Id,
}

export interface StringSchema extends BaseSchema {
  type: 'string',
}

export interface NumberSchema extends BaseSchema {
  type: 'number',
}

export interface BooleanSchema extends BaseSchema {
  type: 'boolean',
}

export interface LiteralSchema<T = unknown> extends BaseSchema {
  type: 'literal',
  value: T,
}

export interface BaseSchema {
  optional?: true,
  nullable?: true,
}