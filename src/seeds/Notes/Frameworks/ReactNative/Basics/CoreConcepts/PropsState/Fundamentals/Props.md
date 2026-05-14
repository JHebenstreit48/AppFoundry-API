# What Are Props?

<hr class="dividerSection" />

## Props in React Native

<hr class="dividerSection" />

Props — short for "properties" — are used to pass data from one component to another. They allow parent components to send values or functions down to child components, enabling dynamic, reusable UIs.

<span class="emphasis">Props are read-only.</span> This means a child component cannot directly modify the value it receives from its parent — it can only use or display it.

<hr class="dividerSection" />

## Using Props in React Native

<hr class="dividerSection" />

In React Native, props work the same way they do in React for the web. To define a prop, pass it to a component like an attribute. The child component then accesses it via its parameter list, usually through destructuring.

<hr class="dividerSubsection1" />

### Example

<hr class="dividerSubsection1" />

```js
function Greeting({ name }) {
  return <Text>Hello, {name}!</Text>;
}

<Greeting name="Justin" />
```

In this example:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The <span class="codeSnip">Greeting</span> component receives a <span class="codeSnip">name</span> prop.</li>
    <li>That value is accessed within the component and rendered in the UI.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Props for Managing Input

<hr class="dividerSection" />

One common use of props in React Native is managing input data between components. A parent component might pass down a text value and a function to update that value.

A prop like <span class="codeSnip">enteredText</span> could serve several purposes:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="secondEmphasis">Retrieve the text</span>: Get the current value the user has typed or selected.</li>
    <li><span class="secondEmphasis">Update the displayed text</span>: Control the initial or programmatically changed text.</li>
    <li><span class="secondEmphasis">Respond to changes</span>: Trigger actions when the user modifies the text.</li>
  </ul>
</div>

These are typically used with input components such as <span class="codeSnip">&lt;TextInput&gt;</span>.

<hr class="dividerSection" />

## Passing Functions as Props

<hr class="dividerSection" />

In React Native, it is common to pass functions down as props so that child components can trigger actions defined in a parent.

<hr class="dividerSubsection1" />

### Example: Passing an Event Handler

<hr class="dividerSubsection1" />

```js
function MyButton({ onPressHandler }) {
  return <Button title="Tap Me" onPress={onPressHandler} />;
}

<MyButton onPressHandler={handleTap} />
```

In this example:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The parent component provides <span class="codeSnip">handleTap</span> as a function.</li>
    <li>The child component triggers it by connecting it to <span class="codeSnip">onPress</span>.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Common Event Props in React Native

<hr class="dividerSection" />

Event props are special types of props designed to handle user interaction. These are passed as function references and executed when the corresponding event occurs.

<hr class="dividerSubsection1" />

### onClick vs onPress

<hr class="dividerSubsection1" />

If you were adding a button using HTML in React for the web, you would typically use the <span class="codeSnip">onClick</span> prop. However, that prop does not exist in React Native.

Instead, React Native uses the <span class="codeSnip">onPress</span> prop because native apps do not use clicks — they use taps or presses.

After adding the <span class="codeSnip">onPress</span> prop, you point it to the function that should be executed when the user interacts with the component.

<hr class="dividerSubsection1" />

### onChangeText

<hr class="dividerSubsection1" />

React Native introduces the <span class="codeSnip">onChangeText</span> prop, which is exclusive to mobile development and not available in React for the web.

This prop is used with input components like <span class="codeSnip">&lt;TextInput&gt;</span> and expects a function as its value.

```js
<TextInput
  value={enteredText}
  onChangeText={newText => setEnteredText(newText)}
/>
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">onChangeText</span> is called whenever the user types.</li>
    <li>The new input text is passed as an argument to the function.</li>
    <li>This pattern enables controlled input fields.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Prop Types and Validation

<hr class="dividerSection" />

While React Native does not enforce types out of the box, you can improve code quality by defining expected prop types. If you are using TypeScript, you can define prop interfaces explicitly.

<hr class="dividerSubsection1" />

### Example: TypeScript Prop Interface

<hr class="dividerSubsection1" />

```ts
type GreetingProps = {
  name: string;
};

function Greeting({ name }: GreetingProps) {
  return <Text>Hello, {name}!</Text>;
}
```

This helps catch errors during development and improves autocomplete support.

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Props are used to pass data and functions between components.</li>
    <li>They are read-only from the child's perspective.</li>
    <li>Functions like <span class="codeSnip">handlePress</span> or <span class="codeSnip">setEnteredText</span> are passed as props to handle events.</li>
    <li>Built-in event props like <span class="codeSnip">onPress</span> and <span class="codeSnip">onChangeText</span> are used in React Native for interaction handling.</li>
    <li>Use TypeScript interfaces to document and enforce prop types.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/react-native/basics/core/jsx-tsx-event/event-handling">← Back</a>
    <div class="xrefTitle">Topic: JSX/TSX & Event Handling - Event Handling</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/react-native/basics/core/props-and-state/fundamentals/state">Next →</a>
    <div class="xrefTitle">Props & State - Fundamentals - State</div>
  </div>
</div>