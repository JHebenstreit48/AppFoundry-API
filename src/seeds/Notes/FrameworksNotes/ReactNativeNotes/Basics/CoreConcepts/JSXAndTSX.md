## Introduction to JSX and TSX

React Native uses a syntax extension called <span class="codeSnip">JSX</span> (JavaScript XML) to describe what the UI should look like.

- <span class="codeSnip">JSX</span> allows you to write HTML-like syntax inside JavaScript files.
- In TypeScript-based projects, the equivalent is <span class="codeSnip">TSX</span> (TypeScript XML).

✅ Both <span class="codeSnip">JSX</span> and <span class="codeSnip">TSX</span> make code more readable and expressive by blending HTML structure with JavaScript logic.

---

### Basic JSX Example

```javascript
function App() {
  return (
    <View>
      <Text>Hello, World!</Text>
    </View>
  );
}
```

The <span class="codeSnip">&lt;View&gt;</span> acts like a div container.  
The <span class="codeSnip">&lt;Text&gt;</span> component is used for displaying text.

### Key Components in React Native

When writing JSX or TSX in React Native, three core components are used frequently:

- <span class="codeSnip">&lt;View&gt;</span>: Container for layout and structure.
- <span class="codeSnip">&lt;Text&gt;</span>: Displays readable text.
- <span class="codeSnip">&lt;TextInput&gt;</span>: Accepts user input like forms and search bars.

Mastering these components is essential for building even the most basic mobile UIs.

🔹 **Important Note**:
- Not all components can directly contain text.
- For example, <span class="codeSnip">&lt;View&gt;</span> cannot hold raw text without wrapping it in a <span class="codeSnip">&lt;Text&gt;</span> component.
- ➡️ For a deeper dive see the <span class="emphasis">Components</span> section for details on how text and other content must be nested properly.

---

### JSX Rules and Best Practices

- Components must return **one parent element**.
- Use **camelCase** for element attributes (e.g., <span class="codeSnip">backgroundColor</span> instead of <span class="codeSnip">background-color</span>).
- Self-closing tags must end with a slash (e.g., <span class="codeSnip">&lt;Image /&gt;</span>).
- JavaScript expressions are inserted inside curly braces <span class="codeSnip">{ }</span>.

✅ JSX is not HTML — it’s syntactic sugar for <span class="codeSnip">React.createElement()</span>.

---

### What is TSX?

<span class="codeSnip">TSX</span> is used when you want to add static type checking to your React Native code with TypeScript.

✅ Benefits of using <span class="codeSnip">TSX</span>:

- Catch errors at compile time.
- Better editor autocomplete and IntelliSense.
- Explicit prop and state type definitions.

✅ Example of a component in TSX:

```typescript
type Props = {
  message: string;
};

function Greeting({ message }: Props) {
  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
}
```

✅ The <span class="codeSnip">Props</span> type ensures that <span class="codeSnip">message</span> must be a string.

---

### Why JSX and TSX are Important

- **Declarative Syntax**: Easy to visualize and reason about UI.
- **Component-Based Structure**: Makes building and maintaining UIs scalable.
- **Type Safety (TSX)**: Reduces runtime errors and improves code quality.

✅ Most modern React Native projects benefit from starting with <span class="codeSnip">TSX</span> for stronger type checking.

---

### How React Native Components Are Compiled

While JSX and TSX let us write declarative code, React Native compiles these elements into native UI components for each platform at runtime.

**Behind the Scenes**:
- <span class="codeSnip">&lt;View&gt;</span> and <span class="codeSnip">&lt;Text&gt;</span> are not HTML elements.
- They are translated into **native components** that run directly on Android and iOS devices.

### Web Browser vs. Android Native Components

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Web Browser (react-dom)</th>
      <th class="tableCellHeader">Native Component (Android)</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">&lt;div&gt;</td>
      <td class="tableCell">android.View</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">&lt;input&gt;</td>
      <td class="tableCell">EditText</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">...</td>
      <td class="tableCell">...</td>
    </tr>
  </tbody>
</table>

---

### iOS Native Components vs. React Native JSX

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Native Component (iOS)</th>
      <th class="tableCellHeader">React Native JSX</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">UIView</td>
      <td class="tableCell">&lt;View&gt;</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">UITextField</td>
      <td class="tableCell">&lt;TextInput&gt;</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">...</td>
      <td class="tableCell">...</td>
    </tr>
  </tbody>
</table>

---

**Key Takeaways**:
- <span class="codeSnip">&lt;View&gt;</span> compiles into <span class="codeSnip">android.View</span> on Android and <span class="codeSnip">UIView</span> on iOS.
- <span class="codeSnip">&lt;TextInput&gt;</span> compiles into <span class="codeSnip">EditText</span> on Android and <span class="codeSnip">UITextField</span> on iOS.
- React Native abstracts platform differences, enabling you to write **one codebase** for both Android and iOS.

This abstraction simplifies cross-platform development without sacrificing native performance.

---

**Conclusion**

Whether you use <span class="codeSnip">JSX</span> or <span class="codeSnip">TSX</span>, both enhance the developer experience by making UI code more structured, readable, and reliable.
