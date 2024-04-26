import type { Collection } from './collection/index.js'
import type { Computed } from './computed/index.js'
import type { Domain } from './domain/index.js'
import type { Mutation } from './mutation/index.js'

export type ServerConfig<
  A extends Record<string, Collection>,
  B extends Record<string, Computed>,
  C extends Record<string, Domain>,
  D extends Record<string, Mutation>,
> = {
  collections: A,
  computeds: B,
  domains: C,
  mutations: D,
}

export type ServerState<T, N extends string | number | symbol> = Record<N, T>

export class Server<
  A extends Record<string, Collection>,
  B extends Record<string, Computed>,
  C extends Record<string, Domain>,
  D extends Record<string, Mutation>,
> {
  private readonly _collections: ServerState<Collection, keyof A>
  private readonly _computeds: ServerState<Computed, keyof B>
  private readonly _damains: ServerState<Domain, keyof C>
  private readonly _mutations: ServerState<Mutation, keyof D>

  constructor(config: ServerConfig<A, B, C, D>) {
    this._collections = config.collections
    this._computeds = config.computeds
    this._damains = config.domains
    this._mutations = config.mutations
  }
}
