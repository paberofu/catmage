export type DomainEntrySubscription = () => void
export type DomainEntryNotifyCause = 'update' | 'remove'
export type DomainEntryNotifyFnPayload = {
  cause: DomainEntryNotifyCause,
  entryId: string,
  subscription: DomainEntrySubscription,
}
export type DomainEntryNotifyFn = (payload: DomainEntryNotifyFnPayload) => void
export type DomainEntryRemoveFn = (id: string) => void

export type DomainEntryConfig<T> = {
  id: string,
  initialValue: T,
  notify: DomainEntryNotifyFn,
  remove: DomainEntryRemoveFn,
}

export class DomainEntry<T> {
  private readonly _id: string
  private _value: T
  private readonly _subscriptions: DomainEntrySubscription[]

  private _notify: DomainEntryNotifyFn
  private _remove: DomainEntryRemoveFn

  constructor(config: DomainEntryConfig<T>) {
    this._id = config.id
    this._value = config.initialValue
    this._subscriptions = []
    this._notify = config.notify
    this._remove = config.remove
  }

  update(value: T) {
    this._value = value

    this._subscriptions.forEach((subscription) => {
      this._notify({
        cause: 'update',
        entryId: this._id,
        subscription,
      })
    })
  }
  
  unwrap() {
    return structuredClone(this._value)
  }

  remove() {
    this._remove(this._id)

    this._subscriptions.forEach((subscription) => {
      this._notify({
        cause: 'remove',
        entryId: this._id,
        subscription,
      })
    })
  }

  subscribe(subscription: DomainEntrySubscription): () => void {
    this._subscriptions.push(subscription)

    return () => {
      this._subscriptions.splice(this._subscriptions.indexOf(subscription), 1)
    }
  }
}