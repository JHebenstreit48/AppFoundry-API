import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/flutter/basics/fundamentals/introduction"
        },
        {
          name: "Setup",
          path: "/flutter/basics/fundamentals/setup"
        },
        {
          name: "Structure",
          path: "/flutter/basics/fundamentals/structure"
        }
      ]
    },
    {
      name: "Core",
      subpages: [
        {
          name: "Widgets",
          path: "/flutter/basics/core/widgets"
        },
        {
          name: "State & Props",
          path: "/flutter/basics/core/state-and-props"
        },
        {
          name: "Events",
          path: "/flutter/basics/core/events"
        },
        {
          name: "Lists",
          path: "/flutter/basics/core/lists"
        }
      ]
    },
    {
      name: "Styling",
      subpages: [
        {
          name: "Basics",
          path: "/flutter/basics/styling/basics"
        },
        {
          name: "Layout",
          path: "/flutter/basics/styling/layout"
        },
        {
          name: "Properties",
          subpages: [
            {
              name: "Spacing",
              path: "/flutter/basics/styling/properties/spacing"
            },
            {
              name: "Typography",
              path: "/flutter/basics/styling/properties/typography"
            },
            {
              name: "Colors & Themes",
              path: "/flutter/basics/styling/properties/colors-and-themes"
            },
            {
              name: "Borders & Shadows",
              path: "/flutter/basics/styling/properties/borders-and-shadows"
            }
          ]
        }
      ]
    },
    {
      name: "Navigation",
      subpages: [
        {
          name: "Navigator 1.0",
          path: "/flutter/basics/navigation/navigator-1"
        },
        {
          name: "Navigator 2.0",
          path: "/flutter/basics/navigation/navigator-2"
        }
      ]
    }
  ]
};

export default Basics;