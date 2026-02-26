import type { Subpage } from '@/types/navigation';

const Styling: Subpage = {
  name: 'Styling',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Basics',
          path: '/react-native/basics/core/styling/fundamentals/basics',
        },
        {
          name: 'Layout',
          path: '/react-native/basics/core/styling/fundamentals/layout',
        },
      ],
    },
    {
      name: 'Properties',
      subpages: [
        {
          name: 'Basics',
          path: '/react-native/basics/core/styling/properties/basics',
        },
        {
          name: 'Positioning & Alignment',
          path: '/react-native/basics/core/styling/properties/positioning',
        },
        {
          name: 'Spacing',
          path: '/react-native/basics/core/styling/properties/spacing',
        },
        {
          name: 'Typography',
          path: '/react-native/basics/core/styling/properties/typography',
        },
        {
          name: 'Borders & Shadows',
          path: '/react-native/basics/core/styling/properties/borders-and-shadows',
        },
        {
          name: 'Size & Dimensions',
          path: '/react-native/basics/core/styling/properties/size-and-dimensions',
        },
        {
          name: 'Colors',
          path: '/react-native/basics/core/styling/properties/colors',
        },
      ],
    },
  ],
};

export default Styling;