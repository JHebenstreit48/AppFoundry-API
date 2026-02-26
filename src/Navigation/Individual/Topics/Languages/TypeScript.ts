import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Languages/TypeScript/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Languages/TypeScript/Advanced';
const TypeScript: Subpage = {
  name: 'TypeScript',
  subpages: [
    Basics,
    Advanced
  ],
};

export default TypeScript;