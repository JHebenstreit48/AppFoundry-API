import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Frameworks/Jetpack Compose/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Frameworks/Jetpack Compose/Advanced';

const JetpackCompose: Subpage = {
  name: 'Jetpack Compose',
  subpages: [
    Basics,
    Advanced
  ],
};

export default JetpackCompose;