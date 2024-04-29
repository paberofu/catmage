import { DomainEntry } from './DomainEntry.js'
import type {
  EventMap,
  Id,
  NormalizedState,
} from '../types/index.js'
import {
  createEventMap,
  createNormalizedState,
} from '../utils/index.js'

export type DomainConfig = {
  id: Id,
  name: string,
}

export type DomainState<T> = NormalizedState<DomainEntry<T>>

export type DomainEvent = 'create' | 'remove'

export type DomainEventPayload = {
  domainEntryId: Id,
}

export type DomainSubscriber = (payload: DomainEventPayload) => void

export class Domain<T> {
  private readonly _id: Id
  private readonly _name: string
  private readonly _entries: DomainState<T>
  private readonly _events: EventMap<DomainEvent, DomainSubscriber[]>

  constructor(config: DomainConfig) {
    this._id = config.id
    this._name = config.name
    this._entries = createNormalizedState()
    this._events = createEventMap(['create', 'remove'])
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

    this._notify('create', {
      domainEntryId: id,
    })

    return entry
  }

  remove = (id: string) => {
    delete this._entries.byId[id]
    this._entries.ids.splice(this._entries.ids.indexOf(id), 1)
    
    this._notify('remove', {
      domainEntryId: id,
    })
  }

  byId = (id: string): DomainEntry<T> | undefined => this._entries.byId[id]

  forEach = (fn: (value: DomainEntry<T>) => void) => {
    for (const id of this._entries.ids) {
      fn(this._entries.byId[id])
    }
  }

  on(event: DomainEvent, cb: DomainSubscriber): () => void {
    this._events[event].push(cb)

    return () => {
      this._events[event].splice(this._events[event].indexOf(cb), 1)
    }
  }

  private _notify = (event: DomainEvent, payload: DomainEventPayload) => {
    this._events[event].forEach((cb) => cb(payload))
  }
}