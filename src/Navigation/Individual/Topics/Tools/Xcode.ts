import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Tools/Xcode/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Tools/Xcode/Advanced';

const Xcode: Subpage = {
  name: 'Xcode',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Xcode;