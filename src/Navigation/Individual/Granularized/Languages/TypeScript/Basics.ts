import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Setup',
      subpages: [
        {
          name: 'Project Setup with TS',
          path: '/typescript/basics/setup/project-setup-react-native',
        },
        {
          name: 'tsconfig & Metro',
          path: '/typescript/basics/setup/tsconfig-and-metro',
        },
      ],
    },
    {
      name: 'Components & Props',
      subpages: [
        {
          name: 'Typing Props & State',
          path: '/typescript/basics/components-and-props/typing-props-and-state',
        },
        {
          name: 'Reusable Component Patterns',
          path: '/typescript/basics/components-and-props/reusable-component-patterns',
        },
      ],
    },
  ],
};

export default Basics;