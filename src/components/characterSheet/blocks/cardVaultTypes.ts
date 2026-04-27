import type { AncestryCard, CommunityCard, DomainCard, Subclass } from '@/types/game/character.ts'

export type SheetCardEntry
  = | { kind: 'domain', card: DomainCard, section: 'equipped' | 'stored' }
    | { kind: 'subclass', subclass: Subclass, tier: 1 | 2 | 3 }
    | { kind: 'ancestry', ancestry: AncestryCard }
    | { kind: 'community', community: CommunityCard }

export type CardKind = SheetCardEntry['kind']

export type CardSize = 'small' | 'medium' | 'large'
