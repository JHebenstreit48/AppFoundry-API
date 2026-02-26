import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Data & Storage',
      subpages: [
        {
          name: 'Room & SQLite',
          path: '/java/advanced/data-and-storage/room-and-sqlite',
        },
        {
          name: 'SharedPreferences & DataStore',
          path: '/java/advanced/data-and-storage/sharedpreferences-and-datastore',
        },
      ],
    },
    {
      name: 'Networking & Background',
      subpages: [
        {
          name: 'Retrofit & OkHttp',
          path: '/java/advanced/networking-and-background/retrofit-and-okhttp',
        },
        {
          name: 'WorkManager & Services',
          path: '/java/advanced/networking-and-background/workmanager-and-services',
        },
      ],
    },
  ],
};

export default Advanced;