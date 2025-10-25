## Styling in React Native

---

### Key Difference: No CSS in React Native

There is no traditional CSS for styling in React Native. CSS does not exist in React Native because it is not designed for browser-based websites or web applications.

Instead, styling is handled through JavaScript using the <span class="codeSnip">StyleSheet</span> API provided by React Native.

Styles are written in JavaScript objects and applied directly to components.

---

### Writing Styles in JavaScript

In React Native, you write all your styles directly in JavaScript.

**Key Points**:

- There is no extra styling language like CSS or SCSS.
- Styles are defined as JavaScript objects and passed to components.
- React Native provides a large set of styling properties that are **similar** to CSS properties.
- However, React Native supports only a **subset** of the full CSS feature set — not everything from CSS is available.

---

### Why No CSS?

- React Native targets **native UI elements**, not HTML elements.
- Traditional web technologies like CSS are replaced with **style objects** that are optimized for mobile platforms.

---

### Web CSS vs React Native Styling

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Web (CSS)</th>
      <th class="tableCellHeader">React Native (StyleSheet)</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Separate .css/.scss files <span class="secondEmphasis">or</span> inline <span class="codeSnip">style</span> attributes</td>
      <td class="tableCell">Styles defined inside JavaScript objects</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Class and ID selectors</td>
      <td class="tableCell">Direct styling via props or StyleSheet</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">CSS cascade and specificity</td>
      <td class="tableCell">No cascade — styles are applied directly</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Media queries for responsiveness</td>
      <td class="tableCell">Dimensions API, Flexbox, Platform API</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Hover, focus, active pseudo-classes</td>
      <td class="tableCell">Limited to touch events; no hover or focus states</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Font-family from system or imported fonts</td>
      <td class="tableCell">Custom fonts must be bundled manually</td>
    </tr>
  </tbody>
</table>

--- 

### Important: Combining Multiple Styles

While the order of properties **inside a single object** does not matter, the **order in which you apply multiple styles** does matter.

When applying an array of styles to a component, later styles in the array can **override** earlier ones:

```javascript
import { View } from 'react-native';

<View style={[styles.base, styles.override]} />
```

In this example:

- The styles in <span class="codeSnip">styles.override</span> will **override** any conflicting properties from <span class="codeSnip">styles.base</span>.

The order **within an array** behaves like **last-in wins** — the later style object can overwrite earlier ones.

---

### Key Differences: CSS vs React Native Styling Behavior

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">CSS (Web)</th>
      <th class="tableCellHeader">React Native (Mobile)</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Order of properties can matter due to cascading rules.</td>
      <td class="tableCell">Order inside a style object does not matter.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Later CSS rules can override earlier ones (Cascading Style Sheets).</td>
      <td class="tableCell">Only the order of style application (arrays) affects overrides.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">CSS specificity and rule order both affect style resolution.</td>
      <td class="tableCell">JavaScript object merge behavior governs style application.</td>
    </tr>
  </tbody>
</table>

---

### Why Use StyleSheet.create()

While you can define style objects directly in JavaScript, React Native provides the <span class="codeSnip">StyleSheet.create()</span> API for important reasons:

- Freezes the style object to make it immutable, preventing accidental changes at runtime.
- Validates style properties at creation time, catching typos and invalid styles early.
- Optimizes performance by reducing memory usage and generating internal IDs for faster lookups.
- Improves debugging by warning about invalid or unsupported properties.

Using <span class="codeSnip">StyleSheet.create()</span> is considered a best practice in React Native, especially for production apps where performance, scalability, and reliability matter.

### Inline Styles vs StyleSheet Objects

In React Native, there are two main ways to apply styles to components:

- Inline Styles: Defined directly in the component using JavaScript objects.
- StyleSheet Objects: Created using <span class="codeSnip">StyleSheet.create()</span> and applied via a
  reference.

Each method has advantages and trade-offs, but for most real-world apps, using a StyleSheet object is the
better choice for performance, readability, and scalability.

---

### Comparison: Inline Styles vs StyleSheet Objects

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Inline Styles</th>
      <th class="tableCellHeader">StyleSheet Objects</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Defined directly inside component props</td>
      <td class="tableCell">Created separately using <span class="codeSnip">StyleSheet.create()</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">New object created on every render</td>
      <td class="tableCell">Frozen object improves performance</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Quick for small, simple components</td>
      <td class="tableCell">Better for larger, complex apps</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Can get messy as styles grow</td>
      <td class="tableCell">Keeps code organized and readable</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Not easily reusable</td>
      <td class="tableCell">Styles are reusable across components</td>
    </tr>
  </tbody>
</table>

---

### Example: Inline Styles

```javascript
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hello World</Text>
    </View>
  );
}
```

---

### Example: Using StyleSheet.create()

```javascript
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
    </View>
  );
}
```

---

### Modularizing Styles: Best Practice for Large Projects

For larger and more complex projects, it is a good idea to separate styles into a dedicated file — typically a
<span class="codeSnip">.js</span> or <span class="codeSnip">.ts</span> file. This approach improves:

- Scalability: Easier to manage styles as the app grows.
- Maintainability: Styles are centralized and easier to update.
- Reusability: Shared styles can be imported across multiple components.

---

### Example: Modularized Styles

#### AppStyles.js

```javascript
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default styles;
```

---

#### App.js

```javascript
import { View, Text } from 'react-native';
import styles from './AppStyles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
    </View>
  );
}
```

---

### Styling Approaches in React Native

Since there is no CSS in React Native, you apply styles in one of two ways:

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Approach</th>
      <th class="tableCellHeader">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Inline Styles</td>
      <td class="tableCell">Define styles directly inside component props using JavaScript objects.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">StyleSheet Objects</td>
      <td class="tableCell">Create a centralized style object using <span class="codeSnip">StyleSheet.create()</span> and reference styles by name.</td>
    </tr>
  </tbody>
</table>

**Key Points**:

- All styles are **written in JavaScript**, next to your component code.
- The syntax is **similar to CSS**, but React Native supports only a **subset** of CSS properties and
  features.
- There is no separate styling file — everything stays in your JavaScript or TypeScript files.

#### Summary
React Native eliminates the need for traditional CSS by shifting all styling into JavaScript.  
You can style your components using either **Inline Styles** or centralized **StyleSheet Objects**.  
While the syntax is similar to CSS, React Native implements only a subset of CSS properties optimized for mobile development.  
While inline styles are acceptable for small and simple components, **StyleSheet objects** created using <span class="codeSnip">StyleSheet.create()</span> offer better performance and maintainability.  
For larger apps, modularizing styles into separate files is considered a best practice to improve scalability and code organization.

Inside a style object: **Order of properties does NOT affect the rendered style**.  
When combining multiple styles: **Later styles override earlier styles** in the array.  
React Native simplifies style resolution compared to the cascading behavior of CSS, making it easier to predict final styles.