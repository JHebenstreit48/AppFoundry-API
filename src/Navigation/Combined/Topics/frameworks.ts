import type { Subpage } from '@/types/navigation';

import Flutter from '@/Navigation/Individual/Topics/Frameworks/Flutter';
import JetpackCompose from '@/Navigation/Individual/Topics/Frameworks/JetpackCompose';
import ReactNative from '@/Navigation/Individual/Topics/Frameworks/ReactNative';
import SwiftUI from '@/Navigation/Individual/Topics/Frameworks/SwiftUI';
import Xamarin from '@/Navigation/Individual/Topics/Frameworks/Xamarin';

const frameworks: Subpage = {
  name: 'Frameworks',
  subpages: [
    Flutter,
    JetpackCompose,
    ReactNative,
    SwiftUI,
    Xamarin
    
  ]
};

export default frameworks;