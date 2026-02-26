import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'State Management',
      subpages: [
        {
          name: 'Provider & Riverpod',
          path: '/dart/advanced/state/provider-and-riverpod',
        },
        {
          name: 'Bloc & Cubit',
          path: '/dart/advanced/state/bloc-and-cubit',
        },
      ],
    },
    {
      name: 'Async & Performance',
      subpages: [
        {
          name: 'Futures & Streams in UI',
          path: '/dart/advanced/async-and-performance/futures-and-streams',
        },
        {
          name: 'Isolates for Heavy Work',
          path: '/dart/advanced/async-and-performance/isolates-heavy-work',
        },
      ],
    },
  ],
};

export default Advanced;