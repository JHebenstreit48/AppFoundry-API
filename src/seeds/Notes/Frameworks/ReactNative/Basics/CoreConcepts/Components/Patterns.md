# Advanced Component Patterns in React Native

<hr class="dividerSection" />

## Overview

<hr class="dividerSection" />

React Native supports advanced patterns for building <span class="emphasis">reusable</span>, <span class="emphasis">scalable</span>, and <span class="emphasis">flexible</span> components.

<hr class="dividerSection" />

## Higher-Order Components (HOCs)

<hr class="dividerSection" />

A <span class="emphasis">Higher-Order Component (HOC)</span> is a function that <span class="emphasis">takes a component and returns a new component</span>.

<hr class="dividerExample" />

#### Example — Higher-Order Component

```js
import React from "react";
import { View, Text } from "react-native";

// HOC function
function withBackgroundColor(WrappedComponent) {
  return function (props) {
    return (
      <View style={{ backgroundColor: "lightblue", padding: 10 }}>
        <WrappedComponent {...props} />
      </View>
    );
  };
}

// Base component
function Message(props) {
  return <Text>{props.text}</Text>;
}

// Enhanced component using HOC
const ColoredMessage = withBackgroundColor(Message);

export default function App() {
  return <ColoredMessage text="This is an HOC example" />;
}
```

<hr class="dividerSection" />

## Render Props Pattern

<hr class="dividerSection" />

<span class="emphasis">Render props</span> allow sharing <span class="emphasis">component logic</span> using a function as a prop.

<hr class="dividerExample" />

#### Example — Render Props Pattern

```js
import React, { useState } from "react";
import { View, Text, Button } from "react-native";

// Counter component using render prop
function Counter({ render }) {
  const [count, setCount] = useState(0);
  return (
    <View>
      {render(count, () => setCount(count + 1))}
    </View>
  );
}

export default function App() {
  return (
    <Counter render={(count, increment) => (
      <>
        <Text>Count: {count}</Text>
        <Button title="Increment" onPress={increment} />
      </>
    )} />
  );
}
```

<hr class="dividerSection" />

## Compound Components Pattern

<hr class="dividerSection" />

The <span class="emphasis">Compound Component pattern</span> allows components to <span class="emphasis">work together without relying on props</span>.

<hr class="dividerExample" />

#### Example — Compound Components

```js
import React, { createContext, useContext, useState } from "react";
import { View, Text, Button } from "react-native";

const ToggleContext = createContext();

function Toggle({ children }) {
  const [on, setOn] = useState(false);
  return (
    <ToggleContext.Provider value={{ on, setOn }}>
      {children}
    </ToggleContext.Provider>
  );
}

function ToggleButton() {
  const { setOn } = useContext(ToggleContext);
  return <Button title="Toggle" onPress={() => setOn((prev) => !prev)} />;
}

function ToggleMessage() {
  const { on } = useContext(ToggleContext);
  return <Text>{on ? "Toggled On" : "Toggled Off"}</Text>;
}

export default function App() {
  return (
    <Toggle>
      <ToggleMessage />
      <ToggleButton />
    </Toggle>
  );
}
```

<hr class="dividerSection" />

## Comparison of Advanced Component Patterns

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Pattern</th>
      <th class="tableCellHeader">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">Higher-Order Components (HOC)</span></td>
      <td class="tableCell">Enhance components with additional behavior</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">Render Props</span></td>
      <td class="tableCell">Share logic dynamically through function props</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">Compound Components</span></td>
      <td class="tableCell">Allow components to communicate without direct props</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSubsection1" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Pattern</th>
      <th class="tableCellHeader">Example Use Case</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">Higher-Order Components (HOC)</span></td>
      <td class="tableCell"><span class="codeSnip">withAuth(Component)</span> for authentication</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">Render Props</span></td>
      <td class="tableCell"><span class="codeSnip">Counter with render prop</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">Compound Components</span></td>
      <td class="tableCell"><span class="codeSnip">Toggle component with context</span></td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">HOCs</span> wrap components to extend functionality.</li>
    <li><span class="emphasis">Render props</span> pass functions to allow flexible rendering.</li>
    <li><span class="emphasis">Compound components</span> share state through context instead of passing props down manually.</li>
    <li>Choosing the <span class="emphasis">right pattern</span> depends on scalability, maintainability, and component structure needs.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">

  <div class="xrefItem">
    <a class="xrefBtn" href="/react-native/basics/core/components/built-in">← Back</a>
    <div class="xrefTitle">React Native → Components → Built-In</div>
  </div>
  
  <div class="xrefItem">
    <a class="xrefBtn" href="/react-native/basics/core/jsx-tsx-event/jsx-and-tsx">Next →</a>
    <div class="xrefTitle">Section: React Native → JSX/TSX & Event Handling → JSX & TSX</div>
  </div>

</div>