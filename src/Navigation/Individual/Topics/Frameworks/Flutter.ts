import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Frameworks/Flutter/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Frameworks/Flutter/Advanced';

const Flutter: Subpage = {
  name: 'Flutter',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Flutter;