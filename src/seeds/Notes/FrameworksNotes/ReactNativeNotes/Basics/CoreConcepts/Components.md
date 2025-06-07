## Introduction to React Native Components

React Native provides a set of built-in components that are the building blocks for mobile app UIs. These
components abstract away the differences between Android and iOS platforms, allowing you to write one codebase
that works across both.

**Key Highlights**:

- Pre-built components save development time.
- Components behave consistently on Android and iOS.
- Native performance with JavaScript-level ease of use.

---

### Core Components and Composition in React Native

React Native is all about working with **Core Components** that are built into the framework.

**Key Concepts**:

- Core Components are translated into **native UI elements** for Android and iOS by React Native.
- You build your app's UI by **combining Core Components** into **custom components**.
- This process mirrors how React works in the **web environment** by combining elements.
- It is also similar to how **HTML** structures web UIs by combining tags.

---

### Key Principle: Core Components Have a Defined Purpose

In React Native, every core component is designed with a **clearly defined purpose**.

- Core components are designed to handle specific parts of the UI — such as layout, text display, input handling, or user interaction.
- This strict design philosophy ensures a **clear separation of concerns** within your app.
- It encourages you to build apps that are more **organized**, **modular**, and **easy to maintain**.
- By using components for their intended roles, you can better predict behavior and structure your code effectively.

This principle helps developers create apps that are easier to understand, scale, and debug — especially as the complexity of the UI grows.

---

### How it Works

- **Core Components**: Provided by React Native (e.g., View, Text, Button, TextInput, Image).
- **Custom Components**: Created by combining Core Components and other built-in components to form more
  complex UI structures.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Core Components</th>
      <th class="tableCellHeader">Custom Components</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Built-in by React Native</td>
      <td class="tableCell">Created by combining Core Components</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Translated into native UI widgets</td>
      <td class="tableCell">Specific to your app's UI needs</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">View, Text, Button, TextInput, Image</td>
      <td class="tableCell">UserCard, ProfileHeader, MyTitle</td>
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

### About TextInput in React Native

The <span class="codeSnip">&lt;TextInput&gt;</span> component in React Native allows users to **enter text**.  
It must be **imported** just like all other core components.

The <span class="codeSnip">&lt;TextInput&gt;</span> component is a **self-closing** component.

Example:

```javascript
import { TextInput } from 'react-native';

export default function App() {
  return (
    <TextInput />
  );
}
```

You can also add a <span class="codeSnip">placeholder</span> prop inside the <span class="codeSnip">&lt;TextInput&gt;</span> component:

Example:

```javascript
import { TextInput } from 'react-native';

export default function App() {
  return (
    <TextInput placeholder="Your placeholder text here" />
  );
}
```

### <span class="emphasis">Text</span> vs <span class="emphasis">TextInput</span>

- <span class="codeSnip">&lt;Text&gt;</span> is used to **display static text**.
- <span class="codeSnip">&lt;TextInput&gt;</span> is used to **allow the user to input text** in a field.

### Quick Recap




### About Buttons in React Native

In React Native, buttons are created differently compared to React for web development.  

<br>

<span class="emphasis">Key Differences</span>:  

<br>

In React (<span class="emphasis">Web</span>), you can place text <span class="emphasis">between</span> the <span class="secondEmphasis">opening</span> and <span class="secondEmphasis">closing</span> tags:

```javascript
<button>Click Me</button>
```

- In React Native, the <span class="codeSnip">&lt;Button&gt;</span> component is a **self-closing** element.
- Instead of placing text between tags, you specify the button text using the
  <span class="codeSnip">title</span> prop.

**Important**:

- The <span class="codeSnip">&lt;Button&gt;</span> component **requires** a
  <span class="codeSnip">title</span> prop to display the label on the button.
- However, at this stage, the button will not perform any action because no listener has been added yet.

### Example: Creating a Button in a Basic Layout

```javascript
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Another piece of text!</Text>
      </View>
      <Text>Hello World!</Text>
      <Button title="Tap me!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  }
});
```

In this example:
- A <span class="codeSnip">&lt;View&gt;</span> wraps multiple <span class="codeSnip">&lt;Text&gt;</span> elements and a <span class="codeSnip">&lt;Button&gt;</span>.
- The <span class="codeSnip">&lt;Button&gt;</span> uses the <span class="codeSnip">title</span> prop to display "Tap me!" as its label.
- No listener has been added yet, so the button will not perform any action when tapped.

---

### Handling Text in React Native Components

React Native components have specific rules about what content they can hold — stricter than web development.

✅ **Key Rule**:

- You cannot insert plain text directly inside a <span class="codeSnip">&lt;View&gt;</span>.
- Text must be wrapped inside a <span class="codeSnip">&lt;Text&gt;</span> component.

---

### Example: Web Development (Allowed)

```javascript
<div>Hello World!</div>
```

Raw text is directly allowed inside a <span class="codeSnip">&lt;div&gt;</span> in web development.

---

### Example: React Native (Incorrect)

```javascript
<View>Hello World!</View>
```

❌ In React Native, this will cause an error — <span class="codeSnip">&lt;View&gt;</span> cannot directly
contain text.

---

### Example: React Native (Correct)

```javascript
<View style={styles.container}>
  <Text>Hello World!</Text>
</View>
```

✅ In React Native, text must be inside a <span class="codeSnip">&lt;Text&gt;</span> component.

---

### Why This Rule Exists

- <span class="codeSnip">&lt;View&gt;</span> is used for **layout and structure** — not for displaying raw
  text.
- **Displayable content** like text must be placed inside a component designed for it — like
  <span class="codeSnip">&lt;Text&gt;</span>.
- Other components like <span class="codeSnip">&lt;TextInput&gt;</span>,
  <span class="codeSnip">&lt;Button&gt;</span>, and <span class="codeSnip">&lt;Image&gt;</span> also have
  their own display rules.

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

### More About <span class="codeSnip">&lt;View&gt;</span> and Layout Structure

- The <span class="codeSnip">&lt;View&gt;</span> component is designed to **hold** and **lay out** other
  components.
- It acts like a **container**, similar to the <span class="codeSnip">&lt;div&gt;</span> tag in web
  development.
- Conceptually, it also covers layout roles similar to HTML tags like
  <span class="codeSnip">&lt;section&gt;</span> and <span class="codeSnip">&lt;article&gt;</span>.
- You can have **multiple child components** (such as multiple <span class="codeSnip">&lt;Text&gt;</span>
  elements) inside a single <span class="codeSnip">&lt;View&gt;</span>.
- **Nesting** is fully supported — you can place a <span class="codeSnip">&lt;View&gt;</span> inside another
  <span class="codeSnip">&lt;View&gt;</span> to create hierarchical layouts.

✅ This makes <span class="codeSnip">&lt;View&gt;</span> extremely powerful for building complex and
structured mobile UIs.

---

### Example: Nested Views

```javascript
<View style={styles.parent}>
  <Text>Parent Text</Text>
  <View style={styles.child}>
    <Text>Child Text</Text>
  </View>
</View>
```

✅ Here, the inner <span class="codeSnip">&lt;View&gt;</span> is nested inside the outer
<span class="codeSnip">&lt;View&gt;</span>, allowing for parent-child layout relationships.

---

### Important Notes

- These components are core to nearly every React Native app.
- They are **platform-agnostic**, meaning you don’t need to worry about whether your code runs on Android or
  iOS.
- Each component comes with its own set of props to customize its behavior and appearance.

---

### Where to Find More

The complete list of React Native components, along with detailed documentation, can be found in the official
React Native documentation:

<span class="emphasis">https://reactnative.dev/docs/components-and-apis</span>

---

✅ **Summary**

Mastering the core components like <span class="codeSnip">&lt;View&gt;</span>,
<span class="codeSnip">&lt;Text&gt;</span>, and <span class="codeSnip">&lt;TextInput&gt;</span> is essential
for becoming proficient in React Native. These components form the foundation of app interfaces, providing
layout, structure, text handling, and user interaction.  
<span class="codeSnip">&lt;View&gt;</span> is like a **box** — useful for grouping and structuring content,
similar to <span class="codeSnip">&lt;div&gt;</span>, <span class="codeSnip">&lt;section&gt;</span>, or
<span class="codeSnip">&lt;article&gt;</span> in HTML.  
<span class="codeSnip">&lt;Text&gt;</span> is used to display readable text and must wrap any visible text
inside your layout.  
Nesting of <span class="codeSnip">&lt;View&gt;</span> components is common and enables building complex and
organized layouts in mobile apps.
Must import <span class="codeSnip">TextInput</span> from <span class="codeSnip">react-native</span>.
Self-closing syntax unless extended with additional props.
Commonly used props: <span class="codeSnip">placeholder</span>, <span class="codeSnip">value</span>, <span class="codeSnip">onChangeText</span>.
