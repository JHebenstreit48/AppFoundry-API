# Core Components in React Native

<hr class="dividerSection" />

## Common Components

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Component</th>
      <th class="tableCellHeader">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">View</span></td>
      <td class="tableCell">Acts as a container for layout and styling, similar to a div in web development.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">Text</span></td>
      <td class="tableCell">Displays readable text on the screen.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">TextInput</span></td>
      <td class="tableCell">Allows the user to enter text input, such as for forms or search fields.</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

## Handling Text and Layout Rules

<hr class="dividerSection" />

React Native components have specific rules about what content they can hold — stricter than web development.

### Key Rule

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>You cannot insert plain text directly inside a <span class="codeSnip">&lt;View&gt;</span>.</li>
    <li>Text must be wrapped inside a <span class="codeSnip">&lt;Text&gt;</span> component.</li>
  </ul>
</div>

<hr class="dividerExample" />

#### Example — Web Development (Allowed)

```html
<div>Hello World!</div>
```

Raw text is directly allowed inside a <span class="codeSnip">&lt;div&gt;</span> in web development.

<hr class="dividerExample" />

#### Example — React Native (Incorrect)

```js
<View>Hello World!</View>
```

In React Native this will cause an error — <span class="codeSnip">&lt;View&gt;</span> cannot directly contain
text.

<hr class="dividerExample" />

#### Example — React Native (Correct)

```js
<View style={styles.container}>
  <Text>Hello World!</Text>
</View>
```

In React Native, text must be inside a <span class="codeSnip">&lt;Text&gt;</span> component.

<hr class="dividerSection" />

## Why This Rule Exists

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">&lt;View&gt;</span> is used for <span class="emphasis">layout and structure</span> — not for displaying raw text.</li>
    <li><span class="emphasis">Displayable content</span> like text must be placed inside a component designed for it — such as <span class="codeSnip">&lt;Text&gt;</span>.</li>
    <li>Other components like <span class="codeSnip">&lt;TextInput&gt;</span>, <span class="codeSnip">&lt;Button&gt;</span>, and <span class="codeSnip">&lt;Image&gt;</span> also have their own display rules.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Web vs React Native: Text Placement Rules

<hr class="dividerSection" />

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

<hr class="dividerSection" />

## Example — Building a Custom Component

<hr class="dividerSection" />

```js
const MyTitle = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
};
```

In this example:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">MyTitle</span> is a <span class="emphasis">custom component</span>.</li>
    <li>It <span class="emphasis">combines Core Components</span> — <span class="codeSnip">View</span> and <span class="codeSnip">Text</span>.</li>
    <li>It uses <span class="codeSnip">props</span> to pass dynamic data into the component.</li>
  </ul>
</div>

React Native allows you to build flexible, scalable UIs by composing built-in Core Components — just like
React for web and HTML element composition.

<hr class="dividerSection" />

## About TextInput in React Native

<hr class="dividerSection" />

The <span class="codeSnip">&lt;TextInput&gt;</span> component in React Native allows users to
<span class="emphasis">enter text</span>.

It must be <span class="emphasis">imported</span> just like all other core components.

The <span class="codeSnip">&lt;TextInput&gt;</span> component is a <span class="emphasis">self-closing</span>
component.

<hr class="dividerExample" />

#### Example

```js
import { TextInput } from 'react-native';

export default function App() {
  return <TextInput />;
}
```

You can also add a <span class="codeSnip">placeholder</span> prop inside the
<span class="codeSnip">&lt;TextInput&gt;</span> component:

<hr class="dividerExample" />

#### Example — With Placeholder

```js
import { TextInput } from 'react-native';

export default function App() {
  return <TextInput placeholder="Your placeholder text here" />;
}
```

<hr class="dividerSection" />

## More About &lt;View&gt; and Layout Structure

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The <span class="codeSnip">&lt;View&gt;</span> component is designed to <span class="emphasis">hold</span> and <span class="emphasis">lay out</span> other components.</li>
    <li>It acts like a <span class="emphasis">container</span>, similar to the <span class="codeSnip">&lt;div&gt;</span> tag in web development.</li>
    <li>Conceptually it also covers layout roles similar to HTML tags like <span class="codeSnip">&lt;section&gt;</span> and <span class="codeSnip">&lt;article&gt;</span>.</li>
    <li>You can have <span class="emphasis">multiple child components</span> such as multiple <span class="codeSnip">&lt;Text&gt;</span> elements inside a single <span class="codeSnip">&lt;View&gt;</span>.</li>
    <li><span class="emphasis">Nesting</span> is fully supported — you can place a <span class="codeSnip">&lt;View&gt;</span> inside another <span class="codeSnip">&lt;View&gt;</span> to create hierarchical layouts.</li>
  </ul>
</div>

This makes <span class="codeSnip">&lt;View&gt;</span> extremely powerful for building complex and structured
mobile UIs.

<hr class="dividerExample" />

#### Example — Nested Views

```js
<View style={styles.parent}>
  <Text>Parent Text</Text>
  <View style={styles.child}>
    <Text>Child Text</Text>
  </View>
</View>
```

Here the inner <span class="codeSnip">&lt;View&gt;</span> is nested inside the outer
<span class="codeSnip">&lt;View&gt;</span>, allowing for parent-child layout relationships.

<hr class="dividerSection" />

## Text vs TextInput

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">&lt;Text&gt;</span> is used to <span class="emphasis">display static text</span>.</li>
    <li><span class="codeSnip">&lt;TextInput&gt;</span> is used to <span class="emphasis">allow the user to input text</span> in a field.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

Mastering core components like <span class="codeSnip">&lt;View&gt;</span>,
<span class="codeSnip">&lt;Text&gt;</span>, and <span class="codeSnip">&lt;TextInput&gt;</span> is essential
for building effective layouts in React Native.

These components form the foundation of app interfaces, providing structure, text handling, and user input.

Nesting and composition of these components enable complex yet maintainable UI designs.

<hr class="dividerSection" />

<div class="xrefNav">

  <div class="xrefItem">
    <a class="xrefBtn" href="/react-native/basics/core/components/basics">← Back</a>
    <div class="xrefTitle">React Native → Components → Basics</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/react-native/basics/core/components/built-in">Next →</a>
    <div class="xrefTitle">React Native → Components → Built-In</div>
  </div>
  
</div>
