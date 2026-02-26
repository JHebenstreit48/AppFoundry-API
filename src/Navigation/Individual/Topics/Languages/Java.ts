import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Languages/Java/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Languages/Java/Advanced';
const Java: Subpage = {
  name: 'Java',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Java;