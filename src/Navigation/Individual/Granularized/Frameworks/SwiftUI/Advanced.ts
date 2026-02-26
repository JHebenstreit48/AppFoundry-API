import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Data Flow",
      subpages: [
        {
          name: "ObservableObject & Env",
          path: "/swiftui/advanced/data-flow/observableobject-and-environment"
        },
        {
          name: "Async/await & Tasks",
          path: "/swiftui/advanced/data-flow/async-await-and-tasks"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Rendering & Diffing",
          path: "/swiftui/advanced/performance/rendering-and-diffing"
        },
        {
          name: "Instruments & Profiling",
          path: "/swiftui/advanced/performance/instruments-and-profiling"
        }
      ]
    },
    {
      name: "Interop",
      subpages: [
        {
          name: "UIKit Hosting",
          path: "/swiftui/advanced/interop/uikit-hosting"
        },
        {
          name: "Representables",
          path: "/swiftui/advanced/interop/representables"
        }
      ]
    },
    {
      name: "Build & Config",
      subpages: [
        {
          name: "Targets & Schemes",
          path: "/swiftui/advanced/build-and-config/targets-and-schemes"
        },
        {
          name: "Entitlements & Capabilities",
          path: "/swiftui/advanced/build-and-config/entitlements-and-capabilities"
        }
      ]
    }
  ]
};

export default Advanced;