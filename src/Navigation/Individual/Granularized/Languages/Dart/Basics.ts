import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Flutter Foundations',
      subpages: [
        {
          name: 'Dart for Widgets',
          path: '/dart/basics/flutter/dart-for-widgets',
        },
        {
          name: 'Build Method & Widget Tree',
          path: '/dart/basics/flutter/build-method-and-widget-tree',
        },
      ],
    },
    {
      name: 'Layout & Styling',
      subpages: [
        {
          name: 'Rows, Columns & Flex',
          path: '/dart/basics/layout-and-styling/rows-columns-flex',
        },
        {
          name: 'Themes & TextStyles',
          path: '/dart/basics/layout-and-styling/themes-and-textstyles',
        },
      ],
    },
  ],
};

export default Basics;
