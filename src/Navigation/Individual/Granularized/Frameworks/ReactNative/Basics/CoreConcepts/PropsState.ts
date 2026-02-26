import type { Subpage } from '@/types/navigation';

const PropsState: Subpage = {
  name: 'Props & State',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Props',
          path: '/react-native/basics/core/props-and-state/fundamentals/props',
        },
        {
          name: 'State',
          path: '/react-native/basics/core/props-and-state/fundamentals/state',
        },
      ],
    },
    {
      name: 'Async/API State',
      subpages: [
        {
          name: 'Fetch & Axios',
          path: '/react-native/basics/core/props-and-state/async-and-api/fetch-and-axios',
        },
        {
          name: 'Managing API State',
          path: '/react-native/basics/core/props-and-state/async-and-api/managing-api-state',
        },
      ],
    },
    {
      name: 'Global State (Context & Redux)',
      subpages: [
        {
          name: 'Context API',
          path: '/react-native/basics/core/props-and-state/global/context-api',
        },
        {
          name: 'Providers & Performance',
          path: '/react-native/basics/core/props-and-state/global/providers-and-performance',
        },
        {
          name: 'RTK & RTK Query (RN)',
          path: '/react-native/basics/core/props-and-state/global/rtk-and-rtk-query',
        },
        {
          name: 'Persist & Offline (RN)',
          path: '/react-native/basics/core/props-and-state/global/persist-and-offline',
        },
      ],
    },
  ],
};

export default PropsState;