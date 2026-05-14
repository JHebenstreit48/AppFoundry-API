# Introduction to JSX and TSX

<hr class="dividerSection" />

## What Are JSX and TSX?

<hr class="dividerSection" />

React Native uses a syntax extension called <span class="codeSnip">JSX</span> (JavaScript XML) to describe what the UI should look like.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">JSX</span> allows you to write HTML-like syntax inside JavaScript files.</li>
    <li>In TypeScript-based projects, the equivalent is <span class="codeSnip">TSX</span> (TypeScript XML).</li>
  </ul>
</div>

Both <span class="codeSnip">JSX</span> and <span class="codeSnip">TSX</span> make code more readable and expressive by blending HTML structure with JavaScript logic.

<hr class="dividerSubsection1" />

### Example: Basic JSX

<hr class="dividerSubsection1" />

```js
function App() {
  return (
    <View>
      <Text>Hello, World!</Text>
    </View>
  );
}
```

The <span class="codeSnip">&lt;View&gt;</span> acts like a div container. The <span class="codeSnip">&lt;Text&gt;</span> component is used for displaying text.

<hr class="dividerSection" />

## Key Components in React Native

<hr class="dividerSection" />

When writing JSX or TSX in React Native, three core components are used frequently:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">&lt;View&gt;</span>: Container for layout and structure.</li>
    <li><span class="codeSnip">&lt;Text&gt;</span>: Displays readable text.</li>
    <li><span class="codeSnip">&lt;TextInput&gt;</span>: Accepts user input like forms and search bars.</li>
  </ul>
</div>

Mastering these components is essential for building even the most basic mobile UIs.

Not all components can directly contain text. For example, <span class="codeSnip">&lt;View&gt;</span> cannot hold raw text without wrapping it in a <span class="codeSnip">&lt;Text&gt;</span> component.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/react-native/basics/core/components/basics">
    React Native → Basics → Core Concepts → Components → Basics
  </a>
</div>

<hr class="dividerSection" />

## JSX Rules and Best Practices

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Components must return <span class="emphasis">one parent element</span>.</li>
    <li>Use <span class="emphasis">camelCase</span> for element attributes (e.g., <span class="codeSnip">backgroundColor</span> instead of <span class="codeSnip">background-color</span>).</li>
    <li>Self-closing tags must end with a slash (e.g., <span class="codeSnip">&lt;Image /&gt;</span>).</li>
    <li>JavaScript expressions are inserted inside curly braces <span class="codeSnip">{ }</span>.</li>
  </ul>
</div>

JSX is not HTML — it is syntactic sugar for <span class="codeSnip">React.createElement()</span>.

<hr class="dividerSection" />

## What is TSX?

<hr class="dividerSection" />

<span class="codeSnip">TSX</span> is used when you want to add static type checking to your React Native code with TypeScript.

Benefits of using <span class="codeSnip">TSX</span>:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Catch errors at compile time.</li>
    <li>Better editor autocomplete and IntelliSense.</li>
    <li>Explicit prop and state type definitions.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Example: TSX Component

<hr class="dividerSubsection1" />

```ts
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

The <span class="codeSnip">Props</span> type ensures that <span class="codeSnip">message</span> must be a string.

Most modern React Native projects benefit from starting with <span class="codeSnip">TSX</span> for stronger type checking.

<hr class="dividerSection" />

## Why JSX and TSX Are Important

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Declarative Syntax</span>: Easy to visualize and reason about UI.</li>
    <li><span class="emphasis">Component-Based Structure</span>: Makes building and maintaining UIs scalable.</li>
    <li><span class="emphasis">Type Safety (TSX)</span>: Reduces runtime errors and improves code quality.</li>
  </ul>
</div>

<hr class="dividerSection" />

## How React Native Components Are Compiled

<hr class="dividerSection" />

While JSX and TSX let us write declarative code, React Native compiles these elements into native UI components for each platform at runtime.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">&lt;View&gt;</span> and <span class="codeSnip">&lt;Text&gt;</span> are not HTML elements.</li>
    <li>They are translated into <span class="emphasis">native components</span> that run directly on Android and iOS devices.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Web Browser vs Android Native Components

<hr class="dividerSubsection1" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Web Browser (react-dom)</th>
      <th class="tableCellHeader">Native Component (Android)</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">&lt;div&gt;</span></td>
      <td class="tableCell">android.View</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">&lt;input&gt;</span></td>
      <td class="tableCell">EditText</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSubsection1" />

### iOS Native Components vs React Native JSX

<hr class="dividerSubsection1" />

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
      <td class="tableCell"><span class="codeSnip">&lt;View&gt;</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">UITextField</td>
      <td class="tableCell"><span class="codeSnip">&lt;TextInput&gt;</span></td>
    </tr>
  </tbody>
</table>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">&lt;View&gt;</span> compiles into <span class="codeSnip">android.View</span> on Android and <span class="codeSnip">UIView</span> on iOS.</li>
    <li><span class="codeSnip">&lt;TextInput&gt;</span> compiles into <span class="codeSnip">EditText</span> on Android and <span class="codeSnip">UITextField</span> on iOS.</li>
    <li>React Native abstracts platform differences, enabling you to write <span class="emphasis">one codebase</span> for both Android and iOS.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>JSX and TSX allow you to write declarative UI code in React Native.</li>
    <li>TSX adds TypeScript type safety on top of JSX.</li>
    <li>React Native compiles JSX/TSX into native platform components at runtime.</li>
    <li>Most modern projects benefit from using TSX for stronger type checking.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/react-native/basics/core/components/patterns">← Back</a>
    <div class="xrefTitle">Topic: Components - Patterns</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/react-native/basics/core/jsx-tsx-event/event-handling">Next →</a>
    <div class="xrefTitle">JSX/TSX & Event Handling - Event Handling</div>
  </div>
</div>