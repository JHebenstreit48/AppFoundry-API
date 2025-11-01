<br>

---
## Typography in React Native

- Use the <span class="codeSnip">Text</span> component for readable text.
- Common props: <span class="codeSnip">fontSize</span>, <span class="codeSnip">fontWeight</span>, <span class="codeSnip">lineHeight</span>, <span class="codeSnip">textAlign</span>.
- Platform fonts are used unless you bundle custom ones.

```js
import { Text } from 'react-native';

export default function Title() {
  return (
    <Text style={{ fontSize: 18, fontWeight: '600', lineHeight: 24, textAlign: 'center' }}>
      Hello Typography
    </Text>
  );
}
```