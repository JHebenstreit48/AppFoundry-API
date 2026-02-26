import type { Subpage } from '@/types/navigation';

// ---------------------------------- React Native Resources Navigation Start ----------------------------------
import Basics from '@/Navigation/Individual/Granularized/Resources/Frameworks/ReactNative/Basics';
// ----------------------------------- React Native Resources Navigation End ------------------------------------

const resources: Subpage = {
  name: 'Resources',
  subpages: [
    {
      name: 'Frameworks',
      subpages: [
        {
          name: 'React Native',
          subpages: [
            Basics,
            // RNIntermediateResourcesNavigation,
            // RNAdvancedResourcesNavigation,
            // RNTestingResourcesNavigation,
            // RNToolsResourcesNavigation
          ],
        },
      ],
    }
  ]
};

export default resources;