# Props

---

## What Are Props?

Props — short for “properties” — are used to pass data from one component to another. They allow parent components to send values or functions down to child components, enabling dynamic, reusable UIs.

<span class="emphasis">Props are read-only.</span> This means a child component cannot directly modify the value it receives from its parent — it can only use or display it.

---

## Using Props in React Native

In React Native, props work the same way they do in React for the web.

To define a prop, pass it to a component like an attribute. The child component then accesses it via its parameter list (usually through a destructuring object).

### Example

```javascript
function Greeting({ name }) {
  return <Text>Hello, {name}!</Text>;
}

<Greeting name="Justin" />
```

In this example:
- The <span class="codeSnip">Greeting</span> component receives a <span class="codeSnip">name</span> prop.
- That value is accessed within the component and rendered in the UI.

---

## Props for Managing Input

One common use of props in React Native is managing input data between components. A parent component might pass down a text value and a function to update that value.

### Example Use Case: enteredText

A prop like <span class="codeSnip">enteredText</span> could serve several purposes:

- <span class="secondEmphasis">Retrieve the text</span>: Get the current value the user has typed or selected.
- <span class="secondEmphasis">Update the displayed text</span>: Control the initial or programmatically changed text.
- <span class="secondEmphasis">Respond to changes</span>: Trigger actions when the user modifies the text.

These are typically used with input components such as <span class="codeSnip">&lt;TextInput&gt;</span>.

---

## Passing Functions as Props

In React Native, it's common to pass functions down as props so that child components can trigger actions defined in a parent.

### Example: Passing an Event Handler

```javascript
function MyButton({ onPressHandler }) {
  return <Button title="Tap Me" onPress={onPressHandler} />;
}

<MyButton onPressHandler={handleTap} />
```

Here:
- The parent component provides <span class="codeSnip">handleTap</span> as a function.
- The child component triggers it by connecting it to <span class="codeSnip">onPress</span>.

---

## Common Event Props in React Native

Event props are special types of props designed to handle user interaction. These are passed as function references and executed when the corresponding event occurs.

### onClick vs onPress

If you were adding a button using HTML in React for the web, you would typically use the <span class="codeSnip">onClick</span> prop. However, that prop does not exist in React Native.

Instead, React Native uses the <span class="codeSnip">onPress</span> prop because native apps do not use clicks — they use taps or presses.

After adding the <span class="codeSnip">onPress</span> prop, you point it to the function that should be executed when the user interacts with the component.

### onChangeText

React Native introduces the <span class="codeSnip">onChangeText</span> prop, which is exclusive to mobile development and not available in React for the web.

This prop is used with input components like <span class="codeSnip">&lt;TextInput&gt;</span> and expects a function as its value.

```javascript
<TextInput
  value={enteredText}
  onChangeText={newText => setEnteredText(newText)}
/>
```

- <span class="codeSnip">onChangeText</span> is called whenever the user types
- The new input text is passed as an argument to the function
- This pattern enables controlled input fields

---

## Prop Types and Validation

While React Native doesn’t enforce types out of the box, you can improve code quality by defining expected prop types.

If you're using TypeScript, you can define prop interfaces explicitly:

### Example (TypeScript)

```ts
type GreetingProps = {
  name: string;
};

function Greeting({ name }: GreetingProps) {
  return <Text>Hello, {name}!</Text>;
}
```

This helps catch errors during development and improves autocomplete support.

---

## Summary

- Props are used to pass data and functions between components.
- They are read-only from the child’s perspective.
- Functions like <span class="codeSnip">handlePress</span> or <span class="codeSnip">setEnteredText</span> are passed as props to handle events.
- Built-in event props like <span class="codeSnip">onPress</span> and <span class="codeSnip">onChangeText</span> are used in React Native for interaction handling.
- Use TypeScript interfaces or PropTypes to document and enforce prop types.

---
