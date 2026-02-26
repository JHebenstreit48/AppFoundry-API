import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Android Fundamentals',
      subpages: [
        {
          name: 'Kotlin for Activities & Fragments',
          path: '/kotlin/basics/android-fundamentals/activities-and-fragments',
        },
        {
          name: 'Intents & Bundles',
          path: '/kotlin/basics/android-fundamentals/intents-and-bundles',
        },
      ],
    },
    {
      name: 'UI & Layouts',
      subpages: [
        {
          name: 'Views & ViewBinding',
          path: '/kotlin/basics/ui-and-layouts/views-and-viewbinding',
        },
        {
          name: 'RecyclerView Basics',
          path: '/kotlin/basics/ui-and-layouts/recyclerview-basics',
        },
      ],
    },
  ],
};

export default Basics;