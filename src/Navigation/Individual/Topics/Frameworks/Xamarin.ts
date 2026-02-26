import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Frameworks/Xamarin/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Frameworks/Xamarin/Advanced';
const Xamarin: Subpage = {
  name: 'Xamarin',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Xamarin;