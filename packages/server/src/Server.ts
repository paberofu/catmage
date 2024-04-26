import type { Collection } from './collection/index.js'
import type { Computed } from './computed/index.js'
import type { Domain } from './domain/index.js'
import type { Mutation } from './mutation/index.js'

export type ServerConfig<
  TCollections extends Record<string, Collection>,
  TComputeds extends Record<string, Computed>,
  TDomains extends Record<string, Domain>,
  TMutations extends Record<string, Mutation>,
> = {
  collections: TCollections,
  computeds: TComputeds,
  domains: TDomains,
  mutations: TMutations,
}

export type ServerState<T, N extends string | number | symbol> = Record<N, T>

export class Server<
  TCollections extends Record<string, Collection>,
  TComputeds extends Record<string, Computed>,
  TDomains extends Record<string, Domain>,
  TMutations extends Record<string, Mutation>,
> {
  private readonly _collections: ServerState<Collection, keyof TCollections>
  private readonly _computeds: ServerState<Computed, keyof TComputeds>
  private readonly _damains: ServerState<Domain, keyof TDomains>
  private readonly _mutations: ServerState<Mutation, keyof TMutations>

  constructor(config: ServerConfig<TCollections, TComputeds, TDomains, TMutations>) {
    this._collections = config.collections
    this._computeds = config.computeds
    this._damains = config.domains
    this._mutations = config.mutations
  }

  collection(name: keyof TCollections) {}
  
  computed(name: keyof TComputeds) {}
  
  domain(name: keyof TDomains) {}

  mutation(name: keyof TMutations) {}
}
