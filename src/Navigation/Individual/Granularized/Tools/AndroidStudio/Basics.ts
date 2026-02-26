import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'IDE Overview',
          path: '/android-studio/basics/fundamentals/ide-overview'
        },
        {
          name: 'Installation & SDK Manager',
          path: '/android-studio/basics/fundamentals/installation-sdk'
        },
        {
          name: 'Project Structure & Gradle Basics',
          path: '/android-studio/basics/fundamentals/project-structure'
        }
      ]
    },
    {
      name: 'Emulators',
      subpages: [
        {
          name: 'AVD Manager',
          path: '/android-studio/basics/emulators/avd-manager'
        },
        {
          name: 'Emulator Essentials',
          path: '/android-studio/basics/emulators/emulator-essentials'
        }
      ]
    }
  ]
};

export default Basics;