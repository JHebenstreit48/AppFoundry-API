import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Introduction',
          path: '/xamarin/basics/fundamentals/introduction',
        },
        {
          name: 'Setup',
          path: '/xamarin/basics/fundamentals/setup',
        },
        {
          name: 'Structure',
          path: '/xamarin/basics/fundamentals/structure',
        },
      ],
    },
    {
      name: 'Core',
      subpages: [
        {
          name: 'Pages & Views',
          path: '/xamarin/basics/core/pages-and-views',
        },
        {
          name: 'Layouts',
          path: '/xamarin/basics/core/layouts',
        },
        {
          name: 'Data Binding',
          path: '/xamarin/basics/core/data-binding',
        },
        {
          name: 'Navigation',
          path: '/xamarin/basics/core/navigation',
        },
      ],
    },
    {
      name: 'Styling',
      subpages: [
        {
          name: 'Fundamentals',
          subpages: [
            {
              name: 'Basics',
              path: '/xamarin/basics/styling/basics',
            },
            {
              name: 'Layout',
              path: '/xamarin/basics/styling/layout',
            },
          ],
        },
        {
          name: 'Properties',
          subpages: [
            {
              name: 'Spacing',
              path: '/xamarin/basics/styling/properties/spacing',
            },
            {
              name: 'Typography',
              path: '/xamarin/basics/styling/properties/typography',
            },
            {
              name: 'Colors & Themes',
              path: '/xamarin/basics/styling/properties/colors-and-themes',
            },
            {
              name: 'Borders & Shadows',
              path: '/xamarin/basics/styling/properties/borders-and-shadows',
            },
          ],
        },
      ],
    },
  ],
};

export default Basics;