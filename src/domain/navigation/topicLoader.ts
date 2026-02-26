import type { Subpage } from "@/types/navigation";

export type TopicKey = "languages" | "frameworks" | "tools" | "resources";

export const topicButtons: Array<{ key: TopicKey; name: string }> = [
  { key: "languages", name: "Languages" },
  { key: "frameworks", name: "Frameworks" },
  { key: "tools", name: "Tools" },
  { key: "resources", name: "Resources" },
];

const topicImporters: Record<TopicKey, () => Promise<{ default: Subpage }>> = {
  languages: () => import("@/Navigation/Individual/Combined/Topics/languages"),
  frameworks: () => import("@/Navigation/Individual/Combined/Topics/frameworks"),
  tools: () => import("@/Navigation/Individual/Combined/Topics/tools"),
  resources: () => import("@/Navigation/Individual/Combined/Topics/resources"),
};

export async function loadTopic(key: TopicKey): Promise<Subpage> {
  return (await topicImporters[key]()).default;
}