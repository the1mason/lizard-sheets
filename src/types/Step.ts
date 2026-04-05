import type {ValidateBuilderFn} from "@/stores/builderStore.ts";

export type Step = {
    value: string;
    isDone: boolean;
    optional?: true;
    isUnlocked: boolean;
    hasError: boolean;
    icon?: string;
    validate?: ValidateBuilderFn;
}