import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Overview',
      subpages: [
        {
          name: 'Layered Architecture Overview',
          path: '/architecture/basics/overview/layered-overview',
        },
        {
          name: 'MVVM vs MVC vs MVI',
          path: '/architecture/basics/overview/mvvm-mvc-mvi-comparison',
        },
      ],
    },
    {
      name: 'Layers & Boundaries',
      subpages: [
        {
          name: 'Presentation, Domain & Data Layers',
          path: '/architecture/basics/layers-and-boundaries/presentation-domain-data-layers',
        },
        {
          name: 'Dependency Direction & Boundaries',
          path: '/architecture/basics/layers-and-boundaries/dependency-direction-and-boundaries',
        },
      ],
    },
    {
      name: 'Data & State Basics',
      subpages: [
        {
          name: 'Local vs Remote Data',
          path: '/architecture/basics/data-and-state/local-vs-remote-data',
        },
        {
          name: 'State Management Overview',
          path: '/architecture/basics/data-and-state/state-management-overview',
        },
      ],
    },
    {
      name: 'Navigation & Screen Flow',
      subpages: [
        {
          name: 'Screen Flow & Back Stack',
          path: '/architecture/basics/navigation-and-screen-flow/screen-flow-and-back-stack',
        },
        {
          name: 'Navigation Ownership & Responsibilities',
          path: '/architecture/basics/navigation-and-screen-flow/navigation-ownership-and-responsibilities',
        },
      ],
    },
  ],
};

export default Basics;