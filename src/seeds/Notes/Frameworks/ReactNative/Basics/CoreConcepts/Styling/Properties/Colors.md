<br>

---
## Colors in React Native

- Text uses <span class="codeSnip">color</span>.
- Backgrounds use <span class="codeSnip">backgroundColor</span>.
- Accepts hex, <span class="codeSnip">rgb/rgba</span>, and named colors.

import { View, Text } from 'react-native';

export default function Swatch() {
  return (
    <View style={{ backgroundColor: '#6200ee', padding: 12, borderRadius: 6 }}>
      <Text style={{ color: 'white' }}>Primary on Purple</Text>
    </View>
  );
}
