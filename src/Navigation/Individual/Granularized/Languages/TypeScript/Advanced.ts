import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Navigation & APIs',
      subpages: [
        {
          name: 'Typed Navigation Params',
          path: '/typescript/advanced/navigation-and-apis/typed-route-params',
        },
        {
          name: 'API Clients & Error Handling',
          path: '/typescript/advanced/navigation-and-apis/clients-and-errors',
        },
      ],
    },
    {
      name: 'State & Models',
      subpages: [
        {
          name: 'Zustand / Redux Typing',
          path: '/typescript/advanced/state-and-models/zustand-and-redux-typing',
        },
        {
          name: 'React Query & Data Models',
          path: '/typescript/advanced/state-and-models/react-query-and-models',
        },
      ],
    },
  ],
};

export default Advanced;