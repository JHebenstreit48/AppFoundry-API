## JSX & TSX in React Native

---

### Introduction to JSX and TSX

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

✅ The <span class="codeSnip">&lt;View&gt;</span> acts like a div container.  
✅ The <span class="codeSnip">&lt;Text&gt;</span> component is used for displaying text.

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

✅ **Conclusion**

Whether you use <span class="codeSnip">JSX</span> or <span class="codeSnip">TSX</span>, both enhance the developer experience by making UI code more structured, readable, and reliable.
