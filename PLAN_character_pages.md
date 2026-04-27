# Plan: Character sheet pages (per class)

## Goal
After a character is built (or loaded), the app needs a **character sheet view** — a read/interact page for a saved character. You want:

1. One page per class under `src/pages/characters/` — each page acts as a **framework/container** that lays out a set of modular components around the character data.
2. A reusable library of **modular blocks** that all class pages compose from.
3. A starter block — **CharacterHeader** — showing name, subclass, level. Placed on every class page.

Class pages are identical in content *today*, but the per-class file gives you a clean hook to customize layout or add class-specific sections later (e.g. Wizard's spellbook, Ranger's companion) without forking a shared template.

## Open questions (please confirm before I code)

### Q1 — Route shape
Which URL structure do you want? I'd recommend **A** — cleanest for sharing links and matches the builder's model of one character at a time.

- **A.** `/characters/<classname>/<id>` — e.g. `/characters/wizard/abc-123`. File layout: `src/pages/characters/wizard/[id].vue`, one file per class (13 files).
- **B.** `/characters/<id>` — single dynamic page that dispatches to the right class component internally. Fewer files, but it's one file with a giant switch and loses the "page per class" shape you asked for.
- **C.** `/characters/<classname>?id=<id>` — class in path, id in query.

I'll proceed with **A** unless you pick otherwise.

### Q2 — How the user reaches a sheet
- After `FinishStep.saveAndDownload()`, should we push to the new sheet (`/characters/wizard/<id>`)? Right now the "To the list" button has no handler.
- Do you also want a `/characters` index page listing saved characters (links to individual sheets)? The `characterStore` already exposes `list()` — this is low effort. **Recommend yes**, since you also have a `/load` button in the nav that currently routes nowhere.
- Out-of-scope for this task? Say the word and I'll leave navigation wiring alone.

### Q3 — Edit vs. view
Is the sheet **read-only** (values displayed, no persistence) or **editable** (e.g. tick off stress, adjust hope, rename)? This affects whether blocks emit state changes and whether the page writes back to `characterStore`. **Recommend: read-only for v1**, with editing added later per-block.

### Q4 — Scope of this PR
I'm scoping this task to:
- Routing scaffold (13 class pages).
- **CharacterHeader** block only.
- No other blocks yet (traits, equipment, domain cards, state trackers etc. are future work, each one can get its own PR).

OK to keep it minimal?

---

## Proposed structure (assuming A + read-only + minimal)

### Files to create

```
src/pages/characters/
  [id].vue                            # fallback: looks up character, redirects to /characters/<class>/<id>
  wizard/[id].vue
  bard/[id].vue
  ... one per ClassName (13 total)

src/components/characterSheet/
  CharacterSheetLayout.vue            # shared wrapper: v-container, loads character by id, not-found state, slot for blocks
  blocks/
    CharacterHeader.vue               # sample block: name, subclass name, level
```

### Component contract for blocks
Every block takes the same prop shape (mirrors the builder pattern):

```ts
defineProps<{ character: Character }>()
```

Blocks are presentational. If editing is added later, they'll emit `update:character` or a narrower patch event — decided per block when we get there.

### Per-class page template (identical today)
Each `src/pages/characters/<class>/[id].vue` looks like:

```vue
<template>
  <CharacterSheetLayout :id="id" v-slot="{ character }">
    <CharacterHeader :character="character" />
    <!-- future: more blocks added here, possibly class-specific -->
  </CharacterSheetLayout>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import CharacterSheetLayout from '@/components/characterSheet/CharacterSheetLayout.vue'
import CharacterHeader from '@/components/characterSheet/blocks/CharacterHeader.vue'

const route = useRoute()
const id = route.params.id as string
</script>
```

`CharacterSheetLayout` owns:
- Calling `characterStore.get(id)`.
- Showing loading / not-found states.
- Rendering the default slot with `{ character }` scope (so pages stay declarative).

### `[id].vue` fallback (optional, part of this PR if Q2 leans toward auto-routing)
A non-class-namespaced route that reads the character, then replaces to the class-specific URL. Means users can share `/characters/<id>` and land on the right page. Skippable if you'd rather keep routing explicit.

### i18n
Add `sheet.*` namespace with `header.levelLabel`, `header.subclassLabel`, `header.unnamed`, `notFound.*`, etc. Subclass names reuse existing `game.subclasses.<id>.name`.

### Navigation
- `FinishStep` "To the list" button → router push to `/characters` (if Q2a = yes) or `/characters/<class>/<id>` (if direct-to-sheet).
- `NavMenu` `/load` button — leave alone unless you want it wired to `/characters`.

## Non-goals for this task
- Any block other than `CharacterHeader`.
- Edit/save interactions on the sheet.
- Styling beyond the Vuetify defaults used in the builder.
- Multi-class (`character.multiclass`) handling beyond what `CharacterHeader` needs.

## Acceptance checklist
- [ ] 13 class pages exist under `src/pages/characters/<class>/[id].vue`.
- [ ] `CharacterSheetLayout` loads by id from `characterStore` and handles missing id.
- [ ] `CharacterHeader` renders name (or "Unnamed" fallback), subclass name via i18n, level.
- [ ] Visiting `/characters/wizard/<saved-id>` renders a page with the header block.
- [ ] Visiting `/characters/wizard/<bogus-id>` shows a not-found state, not a crash.
- [ ] TypeScript + ESLint clean.
