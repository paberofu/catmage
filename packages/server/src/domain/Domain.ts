import { DomainEntry } from './DomainEntry.js'

export type DomainConfig = {
  id: string,
  name: string,
}

export type DomainState<T> = {
  byId: Record<string, DomainEntry<T>>,
  ids: string[],
}

export class Domain<T> {
  private readonly _id: string
  private readonly _name: string
  private readonly _entries: DomainState<T>

  constructor(config: DomainConfig) {
    this._id = config.id
    this._name = config.name
    this._entries = {
      byId: {},
      ids: [],
    }
  }

  create() {}
  remove() {}

  byId(id: string): DomainEntry<T> | undefined {
    return this._entries.byId[id]
  }

  find() {}
  
  forEach() {}
}