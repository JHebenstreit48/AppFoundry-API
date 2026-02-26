import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Installation & Command Line Tools',
          path: '/xcode/basics/fundamentals/installation-and-clt'
        },
        {
          name: 'First Run & Updates',
          path: '/xcode/basics/fundamentals/first-run-updates'
        }
      ]
    },
    {
      name: 'Simulators',
      subpages: [
        {
          name: 'Manage Runtimes & Devices',
          path: '/xcode/basics/simulators/manage-runtimes'
        },
        {
          name: 'Custom Simulators & Resets',
          path: '/xcode/basics/simulators/custom-and-reset'
        }
      ]
    }
  ]
};

export default Basics;