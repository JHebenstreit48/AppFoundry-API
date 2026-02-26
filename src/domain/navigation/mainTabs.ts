import type { Subpage } from '@/types/navigation';

import languages from '@/Navigation/Individual/Combined/Topics/languages';
import frameworks from '@/Navigation/Individual/Combined/Topics/frameworks';
import tools from '@/Navigation/Individual/Combined/Topics/tools';
import resources from '@/Navigation/Individual/Combined/Topics/resources';
import glossary from '@/Navigation/Individual/Combined/Topics/glossary';

const pages: Subpage[] = [
  languages,
  frameworks,
  tools,
  resources,
  glossary
];

export default pages;