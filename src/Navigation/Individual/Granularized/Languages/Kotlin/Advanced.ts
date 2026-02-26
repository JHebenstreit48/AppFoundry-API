import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Coroutines & Flows',
      subpages: [
        {
          name: 'ViewModel Scope & Lifecycle',
          path: '/kotlin/advanced/coroutines/viewmodel-scope-and-lifecycle',
        },
        {
          name: 'Flows for UI State',
          path: '/kotlin/advanced/coroutines/flows-for-ui-state',
        },
      ],
    },
    {
      name: 'Architecture',
      subpages: [
        {
          name: 'MVVM with Repositories',
          path: '/kotlin/advanced/architecture/mvvm-with-repositories',
        },
        {
          name: 'Use Cases & Layers',
          path: '/kotlin/advanced/architecture/use-cases-and-layers',
        },
      ],
    },
  ],
};

export default Advanced;