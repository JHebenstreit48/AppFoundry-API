import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Performance',
      subpages: [
        {
          name: 'Hardware Acceleration & Snapshots',
          path: '/android-studio/advanced/performance/accel-snapshots'
        },
        {
          name: 'Emulator Networking & Proxies',
          path: '/android-studio/advanced/performance/networking'
        }
      ]
    },
    {
      name: 'Diagnostics',
      subpages: [
        {
          name: 'Logcat & Profiler',
          path: '/android-studio/advanced/diagnostics/logcat-profiler'
        },
        {
          name: 'Troubleshooting (HAXM/Hypervisor/Ports)',
          path: '/android-studio/advanced/diagnostics/troubleshooting'
        }
      ]
    },
    {
      name: 'Automation',
      subpages: [
        {
          name: 'AVD CLI & Headless Emulator',
          path: '/android-studio/advanced/automation/avd-cli-headless'
        },
        {
          name: 'Build/Run Automation (Gradle & adb)',
          path: '/android-studio/advanced/automation/gradle-adb'
        }
      ]
    }
  ]
};

export default Advanced;