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

  create = (initialValue: T): DomainEntry<T> => {
    const id = crypto.randomUUID()
    const entry = new DomainEntry({
      id,
      initialValue,
      notify: () => {},
      remove: this.remove
    })

    this._entries.byId[id] = entry
    this._entries.ids.push(id)

    return entry
  }

  remove = (id: string) => {
    delete this._entries.byId[id]
    this._entries.ids.splice(this._entries.ids.indexOf(id), 1)
  }

  byId = (id: string): DomainEntry<T> | undefined => {
    return this._entries.byId[id]
  }

  // TODO
  find = () => {}
  // TODO
  forEach = () => {}
}