import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'CI/CD',
      subpages: [
        {
          name: 'Debugging & Testing',
          path: '/react-native/advanced/build/debugging'
        },
        {
          name: 'CI/CD Pipelines',
          path: '/react-native/advanced/build/cicd'
        },
        {
          name: 'Environment Variables',
          path: '/react-native/advanced/build/env'
        }
      ]
    },
    {
      name: 'Performance',
      subpages: [
        {
          name: 'Handling Large Lists',
          path: '/react-native/advanced/performance/lists'
        },
        {
          name: 'Animations & Gestures',
          path: '/react-native/advanced/performance/animations'
        },
        {
          name: 'Memory Optimization',
          path: '/react-native/advanced/performance/memory'
        }
      ]
    },
    {
      name: 'Native',
      subpages: [
        {
          name: 'Custom Code',
          path: '/react-native/advanced/native/custom-code'
        },
        {
          name: 'Bridging',
          path: '/react-native/advanced/native/bridging'
        }
      ]
    }
  ]
};

export default Advanced;