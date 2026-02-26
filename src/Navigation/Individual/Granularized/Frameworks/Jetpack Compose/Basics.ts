import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/jetpack-compose/basics/fundamentals/introduction"
        },
        {
          name: "Setup",
          path: "/jetpack-compose/basics/fundamentals/setup"
        },
        {
          name: "Structure",
          path: "/jetpack-compose/basics/fundamentals/structure"
        }
      ]
    },
    {
      name: "Core",
      subpages: [
        {
          name: "Composables",
          path: "/jetpack-compose/basics/core/composables"
        },
        {
          name: "State & Events",
          path: "/jetpack-compose/basics/core/state-and-events"
        },
        {
          name: "Lists (Lazy)",
          path: "/jetpack-compose/basics/core/lists-lazy"
        },
        {
          name: "Gestures",
          path: "/jetpack-compose/basics/core/gestures"
        }
      ]
    },
    {
      name: "Styling",
      subpages: [
        {
          name: "Basics",
          path: "/jetpack-compose/basics/styling/basics"
        },
        {
          name: "Layout",
          path: "/jetpack-compose/basics/styling/layout"
        },
        {
          name: "Properties",
          subpages: [
            {
              name: "Modifiers",
              path: "/jetpack-compose/basics/styling/properties/modifiers"
            },
            {
              name: "Typography",
              path: "/jetpack-compose/basics/styling/properties/typography"
            },
            {
              name: "Colors & Themes",
              path: "/jetpack-compose/basics/styling/properties/colors-and-themes"
            },
            {
              name: "Elevation & Shape",
              path: "/jetpack-compose/basics/styling/properties/elevation-and-shape"
            }
          ]
        }
      ]
    },
    {
      name: "Navigation",
      subpages: [
        {
          name: "Navigation Basics",
          path: "/jetpack-compose/basics/navigation/navigation-basics"
        },
        {
          name: "Tabs & Back Stack",
          path: "/jetpack-compose/basics/navigation/tabs-and-back-stack"
        }
      ]
    }
  ]
};

export default Basics;