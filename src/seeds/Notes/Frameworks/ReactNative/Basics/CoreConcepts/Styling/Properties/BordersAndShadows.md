<br>

---
## Borders & Shadows in React Native
---

- Borders: <span class="codeSnip">borderWidth</span>, <span class="codeSnip">borderColor</span>, <span class="codeSnip">borderRadius</span>.
- iOS shadows: <span class="codeSnip">shadowColor</span>, <span class="codeSnip">shadowOpacity</span>, <span class="codeSnip">shadowOffset</span>, <span class="codeSnip">shadowRadius</span>.
- Android shadows: <span class="codeSnip">elevation</span> (often set a <span class="codeSnip">backgroundColor</span>).

```js
import { View } from 'react-native';

export default function Card() {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 4
      }}
    />
  );
}
```