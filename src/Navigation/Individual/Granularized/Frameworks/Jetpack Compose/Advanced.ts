import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "State & Side-Effects",
      subpages: [
        {
          name: "State Hoisting",
          path: "/jetpack-compose/advanced/state-and-side-effects/state-hoisting"
        },
        {
          name: "Effects & Coroutines",
          path: "/jetpack-compose/advanced/state-and-side-effects/effects-and-coroutines"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Recomposition & Skips",
          path: "/jetpack-compose/advanced/performance/recomposition-and-skips"
        },
        {
          name: "Tooling & Profilers",
          path: "/jetpack-compose/advanced/performance/tooling-and-profilers"
        }
      ]
    },
    {
      name: "Interop",
      subpages: [
        {
          name: "View Interop",
          path: "/jetpack-compose/advanced/interop/view-interop"
        },
        {
          name: "Navigation Advanced",
          path: "/jetpack-compose/advanced/interop/navigation-advanced"
        }
      ]
    },
    {
      name: "Build & Config",
      subpages: [
        {
          name: "Build Variants & Flavors",
          path: "/jetpack-compose/advanced/build-and-config/build-variants-and-flavors"
        },
        {
          name: "Permissions & Manifests",
          path: "/jetpack-compose/advanced/build-and-config/permissions-and-manifests"
        }
      ]
    }
  ]
};

export default Advanced;