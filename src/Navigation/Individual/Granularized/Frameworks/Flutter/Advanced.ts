import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "State Management",
      subpages: [
        {
          name: "Provider",
          path: "/flutter/advanced/state-management/provider"
        },
        {
          name: "BLoC & Streams",
          path: "/flutter/advanced/state-management/bloc-and-streams"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Rendering & Rebuilds",
          path: "/flutter/advanced/performance/rendering-and-rebuilds"
        },
        {
          name: "Profilers & Tracing",
          path: "/flutter/advanced/performance/profilers-and-tracing"
        }
      ]
    },
    {
      name: "Platform",
      subpages: [
        {
          name: "Platform Channels (iOS/Android)",
          path: "/flutter/advanced/platform/platform-channels"
        },
        {
          name: "Permissions & Devices",
          path: "/flutter/advanced/platform/permissions-and-devices"
        }
      ]
    },
    {
      name: "Build & Flavors",
      subpages: [
        {
          name: "Build Modes",
          path: "/flutter/advanced/build-and-flavors/build-modes"
        },
        {
          name: "Flavors & Config",
          path: "/flutter/advanced/build-and-flavors/flavors-and-config"
        }
      ]
    }
  ]
};

export default Advanced;