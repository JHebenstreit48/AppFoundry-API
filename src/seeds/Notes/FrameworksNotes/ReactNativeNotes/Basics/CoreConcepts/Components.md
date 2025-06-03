## Introduction to React Native Components

React Native provides a set of built-in components that are the building blocks for mobile app UIs. These components abstract away the differences between Android and iOS platforms, allowing you to write one codebase that works across both.

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

### How it Works

- **Core Components**: Provided by React Native (e.g., View, Text, Button, TextInput, Image).
- **Custom Components**: Created by combining Core Components and other built-in components to form more complex UI structures.

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

```shell
const MyTitle = props => {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
}
```

In this example:
- <span class="codeSnip">MyTitle</span> is a **custom component**.
- It **combines Core Components**: <span class="codeSnip">View</span> and <span class="codeSnip">Text</span>.
- It uses <span class="codeSnip">props</span> to pass dynamic data into the component.

**Summary**: React Native allows you to build flexible, scalable UIs by composing built-in Core Components — just like React for web and HTML element composition.

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

### Important Notes

- These components are core to nearly every React Native app.
- They are **platform-agnostic**, meaning you don’t need to worry about whether your code runs on Android or iOS.
- Each component comes with its own set of props to customize its behavior and appearance.

---

### Where to Find More

The complete list of React Native components, along with detailed documentation, can be found in the official React Native documentation:

<span class="emphasis">https://reactnative.dev/docs/components-and-apis</span>

---

✅ **Conclusion**

Mastering the core components like View, Text, and TextInput is essential for becoming proficient in React Native. They form the foundation of app interfaces and handle the majority of layout and user interaction needs.
