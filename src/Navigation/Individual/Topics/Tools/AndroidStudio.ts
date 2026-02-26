import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Tools/AndroidStudio/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Tools/AndroidStudio/Advanced';

const AndroidStudio: Subpage = {
  name: 'Android Studio',
  subpages: [
    Basics,
    Advanced
  ],
};

export default AndroidStudio;