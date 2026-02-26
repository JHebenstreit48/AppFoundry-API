import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Modularization & DI',
      subpages: [
        {
          name: 'Feature Modules & Libraries',
          path: '/architecture/advanced/modularization-and-di/feature-modules-and-libraries',
        },
        {
          name: 'Dependency Injection (Hilt/Koin/etc.)',
          path: '/architecture/advanced/modularization-and-di/dependency-injection',
        },
      ],
    },
    {
      name: 'Offline & Sync',
      subpages: [
        {
          name: 'Offline-first Patterns',
          path: '/architecture/advanced/offline-and-sync/offline-first',
        },
        {
          name: 'Sync & Conflict Resolution',
          path: '/architecture/advanced/offline-and-sync/sync-and-conflicts',
        },
      ],
    },
    {
      name: 'Performance & Scalability',
      subpages: [
        {
          name: 'Performance Bottlenecks & Profiling',
          path: '/architecture/advanced/performance-and-scalability/performance-bottlenecks-and-profiling',
        },
        {
          name: 'Caching & Data Strategies',
          path: '/architecture/advanced/performance-and-scalability/caching-and-data-strategies',
        },
      ],
    },
    {
      name: 'Testing & Maintainability',
      subpages: [
        {
          name: 'Testing Architecture Boundaries',
          path: '/architecture/advanced/testing-and-maintainability/testing-architecture-boundaries',
        },
        {
          name: 'Refactoring & Technical Debt',
          path: '/architecture/advanced/testing-and-maintainability/refactoring-and-technical-debt',
        },
      ],
    },
  ],
};

export default Advanced;