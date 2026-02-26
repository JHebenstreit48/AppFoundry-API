import type { Subpage } from '@/types/navigation';

const Tools: Subpage = {
  name: 'Tools',
  subpages: [
    {
      name: 'Expo',
      subpages: [
        {
          name: 'CLI',
          subpages: [
            {
              name: 'Overview',
              path: '/react-native/tools/expo/cli/overview'
            },
            {
              name: 'Workflow',
              path: '/react-native/tools/expo/cli/workflow'
            },
            {
              name: 'Ejecting',
              path: '/react-native/tools/expo/cli/eject'
            },
          ],
        },
        {
          name: 'Expo Go',
          subpages: [
            {
              name: 'Installing/Running',
              path: '/react-native/tools/expo/go/install'
            },
            {
              name: 'Previewing',
              path: '/react-native/tools/expo/go/preview'
            },
            {
              name: 'QR Codes/Testing',
              path: '/react-native/tools/expo/go/qr'
            },
          ],
        },
      ],
    },
    {
      name: 'React Native CLI',
      subpages: [
        {
          name: 'Overview',
          path: '/react-native/tools/rn-cli/overview'
        },
        {
          name: 'Setup',
          path: '/react-native/tools/rn-cli/setup'
        },
        {
          name: 'Running Apps',
          path: '/react-native/tools/rn-cli/running'
        },
      ],
    },
    {
      name: 'Metro Bundler',
      subpages: [
        {
          name: 'Overview',
          path: '/react-native/tools/metro/overview'
        },
        {
          name: 'Manual Access/Commands',
          path: '/react-native/tools/metro/usage'
        },
      ],
    },
    {
      name: 'Android Studio (RN)',
      subpages: [
        {
          name: 'AVDs for RN',
          path: '/react-native/tools/android-studio/avds'
        },
        {
          name: 'Build/SDK Setup (RN)',
          path: '/react-native/tools/android-studio/build-and-sdk-setup'
        },
      ],
    },
    {
      name: 'Xcode (RN)',
      subpages: [
        {
          name: 'iOS Simulators (RN)',
          path: '/react-native/tools/xcode/ios-simulators'
        },
        {
          name: 'Signing & Run (RN)',
          path: '/react-native/tools/xcode/signing-and-run'
        },
      ],
    },
  ],
};

export default Tools;