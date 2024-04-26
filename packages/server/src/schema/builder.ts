import type { Domain } from '../domain/index.js'
import type {
  Schema,
  ObjectSchema,
  ArraySchema,
  UnionSchema,
  RefSchema,
  StringSchema,
  NumberSchema,
  BooleanSchema,
  LiteralSchema,
} from './types.js'

export function object(properties: Record<string, Schema>): ObjectSchema {
  return {
    type: 'object',
    properties,
  }
}

export function array(schema: Schema): ArraySchema {
  return {
    type: 'array',
    elements: schema,
  }
}

export function union(variants: Schema[]): UnionSchema {
  return {
    type: 'union',
    variants,
  }
}

export function ref(domain: Domain): RefSchema {
  return {
    type: 'ref',
    target: domain.id,
  }
}

export function string(): StringSchema {
  return {
    type: 'string',
  }
}

export function number(): NumberSchema {
  return {
    type: 'number',
  }
}

export function boolean(): BooleanSchema {
  return {
    type: 'boolean',
  }
}

export function literal<T>(value: T): LiteralSchema<T> {
  return {
    type: 'literal',
    value,
  }
}

export function optional(schema: Schema): Schema {
  schema.optional = true

  return schema
}

export function nullable(schema: Schema): Schema {
  schema.nullable = true

  return schema
}