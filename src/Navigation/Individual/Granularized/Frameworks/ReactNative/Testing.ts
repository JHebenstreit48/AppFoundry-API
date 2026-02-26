import type { Subpage } from '@/types/navigation';

const Testing: Subpage = {
  name: 'Testing',
  subpages: [
    {
      name: 'Basics',
      subpages: [
        {
          name: 'Unit Testing with Jest',
          path: '/reactnative/testing/jest'
        },
        {
          name: 'Testing Components',
          path: '/reactnative/testing/components'
        }
      ]
    },
    {
      name: 'E2E',
      subpages: [
        {
          name: 'Detox Overview',
          path: '/reactnative/testing/e2e/detox'
        },
        {
          name: 'Simulators & Real Devices',
          path: '/reactnative/testing/e2e/devices'
        }
      ]
    }
  ]
};

export default Testing;