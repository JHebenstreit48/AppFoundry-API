import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Languages/Kotlin/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Languages/Kotlin/Advanced';
const Kotlin: Subpage = {
  name: 'Kotlin',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Kotlin;