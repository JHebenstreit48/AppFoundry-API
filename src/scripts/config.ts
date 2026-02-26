export const config = {
  // The nav root that scripts import (Subpage[])
  navEntryModule: "@/domain/navigation/mainTabs", // <- use your actual mainTabs export

  // Markdown output root (backend repo)
  notesRoot: "src/seeds/Notes",

  // Map top-level “tab” display names -> folder names
  sectionNameMap: {
  } as Record<string, string>,

  // Optional: override topic folder names
  topicNameMap: {
    // Example:
    // 'C++': 'Cpp',
  } as Record<string, string>,

  // ✅ Key fix: override folder names for group crumbs (between Topic and leaf)
  // This is where you shorten long folder names WITHOUT breaking slug->filename rules.
  groupFolderNameMap: {
  } as Record<string, string>,

  // Optional safety cap default (can be overridden by CLI --limit)
  defaultLimit: 10_000,

  // (Optional) If you want a hard rule that leaf file names always come from URL slugs
  // keep this true. If you later add a "leafFileNameMapByPath" feature, you can flip it.
  leafFileNameFromUrl: true,
};