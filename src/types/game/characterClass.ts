import type {Domain} from "@/types/game/domain.ts";
import type {ClassName} from "@/types/game/className.ts";

export type CharacterClass = {
    id: ClassName;
    domain1: Domain;
    domain2: Domain;
}