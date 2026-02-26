import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/swiftui/basics/fundamentals/introduction"
        },
        {
          name: "Setup",
          path: "/swiftui/basics/fundamentals/setup"
        },
        {
          name: "Structure",
          path: "/swiftui/basics/fundamentals/structure"
        }
      ]
    },
    {
      name: "Core",
      subpages: [
        {
          name: "Views",
          path: "/swiftui/basics/core/views"
        },
        {
          name: "State & Bindings",
          path: "/swiftui/basics/core/state-and-bindings"
        },
        {
          name: "Events & Gestures",
          path: "/swiftui/basics/core/events-and-gestures"
        },
        {
          name: "Lists",
          path: "/swiftui/basics/core/lists"
        }
      ]
    },
    {
      name: "Styling",
      subpages: [
        {
          name: "Basics",
          path: "/swiftui/basics/styling/basics"
        },
        {
          name: "Layout",
          path: "/swiftui/basics/styling/layout"
        },
        {
          name: "Properties",
          subpages: [
            {
              name: "Spacing",
              path: "/swiftui/basics/styling/properties/spacing"
            },
            {
              name: "Typography",
              path: "/swiftui/basics/styling/properties/typography"
            },
            {
              name: "Colors",
              path: "/swiftui/basics/styling/properties/colors"
            },
            {
              name: "Shadows & Corners",
              path: "/swiftui/basics/styling/properties/shadows-and-corners"
            }
          ]
        }
      ]
    },
    {
      name: "Navigation",
      subpages: [
        {
          name: "Stack (NavigationStack)",
          path: "/swiftui/basics/navigation/navigation-stack"
        },
        {
          name: "Tab (TabView)",
          path: "/swiftui/basics/navigation/tab-view"
        }
      ]
    }
  ]
};

export default Basics;