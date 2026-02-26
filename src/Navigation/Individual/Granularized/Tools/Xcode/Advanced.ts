import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Signing & Distribution',
      subpages: [
        {
          name: 'Certificates & Provisioning Profiles',
          path: '/xcode/advanced/signing-and-distribute/certs-and-provisioning'
        },
        {
          name: 'Schemes & Build Settings',
          path: '/xcode/advanced/signing-and-distribute/schemes-and-build'
        },
      ],
    },
    {
      name: 'Diagnostics',
      subpages: [
        {
          name: 'Device Logs & Crash Reports',
          path: '/xcode/advanced/diagnostics/device-logs-and-crashes'
        },
        {
          name: 'Instruments Profiling',
          path: '/xcode/advanced/diagnostics/instruments'
        },
      ],
    },
  ],
};

export default Advanced;