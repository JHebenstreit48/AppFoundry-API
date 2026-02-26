import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Android Fundamentals',
      subpages: [
        {
          name: 'Activities & Intents',
          path: '/java/basics/android-fundamentals/activities-and-intents',
        },
        {
          name: 'Lifecycle & Callbacks',
          path: '/java/basics/android-fundamentals/lifecycle-and-callbacks',
        },
      ],
    },
    {
      name: 'UI & Layouts',
      subpages: [
        {
          name: 'Views & XML Layouts',
          path: '/java/basics/ui-and-layouts/views-and-xml-layouts',
        },
        {
          name: 'Adapters & Lists',
          path: '/java/basics/ui-and-layouts/adapters-and-lists',
        },
      ],
    },
  ],
};

export default Basics;