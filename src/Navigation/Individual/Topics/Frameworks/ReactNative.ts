import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Frameworks/ReactNative/Basics';
import Intermediate from '@/Navigation/Individual/Granularized/Frameworks/ReactNative/Intermediate';
import Advanced from '@/Navigation/Individual/Granularized/Frameworks/ReactNative/Advanced';
import Testing from '@/Navigation/Individual/Granularized/Frameworks/ReactNative/Testing';
import Tools from '@/Navigation/Individual/Granularized/Frameworks/ReactNative/Tools';

const ReactNative: Subpage = {
  name: 'React Native',
  subpages: [
    Basics,
    Intermediate,
    Advanced,
    Testing,
    Tools
  ],
};

export default ReactNative;