import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'State Management',
      subpages: [
        {
          name: 'MVVM & Data Binding',
          path: '/xamarin/advanced/state-management/mvvm-and-data-binding',
        },
        {
          name: 'Dependency Injection & Services',
          path: '/xamarin/advanced/state-management/dependency-injection-and-services',
        },
      ],
    },
    {
      name: 'Performance',
      subpages: [
        {
          name: 'Rendering & Layout Performance',
          path: '/xamarin/advanced/performance/rendering-and-layout',
        },
        {
          name: 'Profiling & Diagnostics',
          path: '/xamarin/advanced/performance/profiling-and-diagnostics',
        },
      ],
    },
    {
      name: 'Platform',
      subpages: [
        {
          name: 'Native APIs & Dependency Service',
          path: '/xamarin/advanced/platform/native-apis-and-dependency-service',
        },
        {
          name: 'Custom Renderers',
          path: '/xamarin/advanced/platform/custom-renderers',
        },
      ],
    },
    {
      name: 'Build & Deployment',
      subpages: [
        {
          name: 'Build Configurations',
          path: '/xamarin/advanced/build-and-deployment/build-configurations',
        },
        {
          name: 'Store Deployment',
          path: '/xamarin/advanced/build-and-deployment/store-deployment',
        },
      ],
    },
  ],
};

export default Advanced;