import type { Subpage } from '@/types/navigation';

import Navigation from '@/Navigation/Individual/Granularized/Frameworks/ReactNative/Intermediate/Navigation';
import Forms from '@/Navigation/Individual/Granularized/Frameworks/ReactNative/Intermediate/Forms';
import Features from '@/Navigation/Individual/Granularized/Frameworks/ReactNative/Intermediate/Features';

const Intermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    Navigation,
    Forms,
    Features
  ]
};

export default Intermediate;