## Styling Properties in React Native

---

### Key Styling Details to Remember

Style property names that would be hyphenated in CSS are <span class="emphasis">camelCased</span> in React Native.
  - Examples:
    - <span class="codeSnip">borderWidth</span>
    - <span class="codeSnip">backgroundColor</span>
- Some style properties, like <span class="codeSnip">borderWidth</span> and <span class="codeSnip">borderRadius</span>, only accept <span class="emphasis">numbers</span> — <span class="secondEmphasis">NOT</span> <span class="emphasis">strings</span> or <span class="emphasis">pixel</span> units.
- Many editors (such as VS Code) provide <span class="emphasis">IntelliSense</span> support to <span class="emphasis">autocomplete</span> valid style <span class="emphasis">property</span> names while typing inside the <span class="codeSnip">style</span> prop.

This structure ensures consistency and makes writing styles more efficient and less error-prone.

---

### Percentages Must Be Strings in React Native

In React Native, if you want to set the size of an element (such as <span class="codeSnip">width</span> or <span class="codeSnip">height</span>) using a percentage, the value must be provided as a **string** — not a number.

- For absolute values (fixed units like pixels), you use numbers.
- For relative values (percentages), you must wrap the percentage in quotes to make it a string.

✅ **Correct Example**:

```javascript
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  box: {
    width: '50%',    // Correct: percentage as a string
    height: 100      // Correct: absolute value as a number
  }
});
```

❌ **Incorrect Example** (without quotes — will cause an error):

```javascript
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  box: {
    width: 50%   // ❌ Syntax error
  }
});
```

**Key Point**:  
Whenever you use percentages for dimensions like <span class="codeSnip">width</span> or <span class="codeSnip">height</span>, they must be strings (e.g., <span class="codeSnip">'50%'</span>).  
Numbers are reserved for fixed, absolute sizes.

---

### Order of Properties in React Native Styles

In React Native, the **order of properties inside a style object does not matter**.

- Style objects are standard JavaScript objects.
- React Native reads all the properties and applies them at once.
- Unlike CSS, there is no "cascading" — the properties do not override one another based on order within the object.

This makes style definitions more predictable and less prone to unintended overrides.

---

### Example: Property Order in React Native

```javascript
import { StyleSheet } from 'react-native';

const styles1 = StyleSheet.create({ box: { backgroundColor: 'red', padding: 10, borderWidth: 2 } });

const styles2 = StyleSheet.create({ box: { borderWidth: 2, padding: 10, backgroundColor: 'red' } });
```

Both styles1 and styles2 will produce exactly the same result — property order is irrelevant inside a single style object.