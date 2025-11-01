### Common Components

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Component</th>
      <th class="tableCellHeader">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">View</td>
      <td class="tableCell">Acts as a container for layout and styling, similar to a div in web development.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Text</td>
      <td class="tableCell">Displays readable text on the screen.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">TextInput</td>
      <td class="tableCell">Allows the user to enter text input, such as for forms or search fields.</td>
    </tr>
  </tbody>
</table>

---
### Handling Text and Layout Rules
---

React Native components have specific rules about what content they can hold — stricter than web development.

**Key Rule**:
- You cannot insert plain text directly inside a <span class="codeSnip">&lt;View&gt;</span>.
- Text must be wrapped inside a <span class="codeSnip">&lt;Text&gt;</span> component.

---

### Example: Web Development (Allowed)

```html
<div>Hello World!</div>
```

Raw text is directly allowed inside a <span class="codeSnip">&lt;div&gt;</span> in web development.

---

### Example: React Native (Incorrect)

```js
<View>Hello World!</View>
```

❌ In React Native, this will cause an error — <span class="codeSnip">&lt;View&gt;</span> cannot directly contain text.

### Example: React Native (Correct)

```js
<View style={styles.container}>
  <Text>Hello World!</Text>
</View>
```

In React Native, text must be inside a <span class="codeSnip">&lt;Text&gt;</span> component.

---
### Why This Rule Exists
---

- <span class="codeSnip">&lt;View&gt;</span> is used for **layout and structure** — not for displaying raw text.  
- **Displayable content** like text must be placed inside a component designed for it — such as <span class="codeSnip">&lt;Text&gt;</span>.  
- Other components like <span class="codeSnip">&lt;TextInput&gt;</span>, <span class="codeSnip">&lt;Button&gt;</span>, and <span class="codeSnip">&lt;Image&gt;</span> also have their own display rules.

---
### Web vs React Native: Text Placement Rules

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Web (HTML)</th>
      <th class="tableCellHeader">React Native (JSX)</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Text can be placed directly inside a <span class="codeSnip">&lt;div&gt;</span>.</td>
      <td class="tableCell">Text must be wrapped inside a <span class="codeSnip">&lt;Text&gt;</span> component inside a <span class="codeSnip">&lt;View&gt;</span>.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Elements like <span class="codeSnip">&lt;div&gt;</span> can render text by default.</td>
      <td class="tableCell"><span class="codeSnip">&lt;View&gt;</span> cannot render text — only holds child components.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Loose text is allowed anywhere inside tags.</td>
      <td class="tableCell">Text must be explicitly placed inside <span class="codeSnip">&lt;Text&gt;</span> to render.</td>
    </tr>
  </tbody>
</table>

---

### Example: Building a Custom Component

```javascript
const MyTitle = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
};
```

In this example:

- <span class="codeSnip">MyTitle</span> is a **custom component**.
- It **combines Core Components**: <span class="codeSnip">View</span> and <span class="codeSnip">Text</span>.
- It uses <span class="codeSnip">props</span> to pass dynamic data into the component.

**Summary**: React Native allows you to build flexible, scalable UIs by composing built-in Core Components —
just like React for web and HTML element composition.

---

### About TextInput in React Native

The <span class="codeSnip">&lt;TextInput&gt;</span> component in React Native allows users to **enter text**.  
It must be **imported** just like all other core components.

The <span class="codeSnip">&lt;TextInput&gt;</span> component is a **self-closing** component.

Example:

```js
import { TextInput } from 'react-native';

export default function App() {
  return (
    <TextInput />
  );
}
```

You can also add a <span class="codeSnip">placeholder</span> prop inside the <span class="codeSnip">&lt;TextInput&gt;</span> component:

Example:

```js
import { TextInput } from 'react-native';

export default function App() {
  return (
    <TextInput placeholder="Your placeholder text here" />
  );
}
```

### More About <span class="codeSnip">&lt;View&gt;</span> and Layout Structure

- The <span class="codeSnip">&lt;View&gt;</span> component is designed to **hold** and **lay out** other components.  
- It acts like a **container**, similar to the <span class="codeSnip">&lt;div&gt;</span> tag in web development.  
- Conceptually, it also covers layout roles similar to HTML tags like <span class="codeSnip">&lt;section&gt;</span> and <span class="codeSnip">&lt;article&gt;</span>.  
- You can have **multiple child components** (such as multiple <span class="codeSnip">&lt;Text&gt;</span> elements) inside a single <span class="codeSnip">&lt;View&gt;</span>.  
- **Nesting** is fully supported — you can place a <span class="codeSnip">&lt;View&gt;</span> inside another <span class="codeSnip">&lt;View&gt;</span> to create hierarchical layouts.

This makes <span class="codeSnip">&lt;View&gt;</span> extremely powerful for building complex and
structured mobile UIs.


---

### Example: Nested Views

<View style={styles.parent}>
  <Text>Parent Text</Text>
  <View style={styles.child}>
    <Text>Child Text</Text>
  </View>
</View>

Here, the inner <span class="codeSnip">&lt;View&gt;</span> is nested inside the outer <span class="codeSnip">&lt;View&gt;</span>, allowing for parent-child layout relationships.

---
### Text vs TextInput
---

- <span class="codeSnip">&lt;Text&gt;</span> is used to **display static text**.
- <span class="codeSnip">&lt;TextInput&gt;</span> is used to **allow the user to input text** in a field.

---
### Summary
---
Mastering core components like <span class="codeSnip">&lt;View&gt;</span>, <span class="codeSnip">&lt;Text&gt;</span>, and <span class="codeSnip">&lt;TextInput&gt;</span> is essential for building effective layouts in React Native.  
These components form the foundation of app interfaces, providing structure, text handling, and user input.  
Nesting and composition of these components enable complex yet maintainable UI designs.