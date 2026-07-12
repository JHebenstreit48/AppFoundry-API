# State in React Native

<hr class="dividerSection" />

## What Is State?

<hr class="dividerSection" />

<span class="emphasis">State</span> is data that can change over time and affects what is rendered on screen.

When state changes, React Native automatically re-renders the component to reflect the new data.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>State is <span class="emphasis">local</span> to the component that owns it.</li>
    <li>When state updates, the component <span class="emphasis">re-renders</span> with the new value.</li>
    <li>State is different from props. Props are passed in and state is managed internally.</li>
  </ul>
</div>

<hr class="dividerSection" />

## State vs Props

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">State</th>
      <th class="tableCellHeader">Props</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Managed internally by the component</td>
      <td class="tableCell">Passed in from a parent component</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Can change over time</td>
      <td class="tableCell">Read-only inside the component</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Triggers a re-render when updated</td>
      <td class="tableCell">Triggers a re-render when parent re-renders</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Declared with <span class="codeSnip">useState</span></td>
      <td class="tableCell">Received as function parameters</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

## The useState Hook

<hr class="dividerSection" />

<span class="codeSnip">useState</span> is a React Hook that lets you add state to a functional component.

It returns an array with two elements: the current state value and a function to update it.

```js
import { useState } from 'react';

const [count, setCount] = useState(0);
```

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Part</th>
      <th class="tableCellHeader">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">count</span></td>
      <td class="tableCell">The current state value</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">setCount</span></td>
      <td class="tableCell">The function used to update the state</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">0</span></td>
      <td class="tableCell">The initial value of the state</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

## How useState Works

<hr class="dividerSection" />

When you call the state updating function, React schedules a re-render of the component with the new state value.

<hr class="dividerExample" />

#### Example — Counter

```js
import { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
}
```

<hr class="dividerSection" />

## State with Arrays

<hr class="dividerSection" />

When state holds an array, use the <span class="emphasis">spread operator</span> to copy existing items into the new array rather than mutating the original.

```js
const [courseGoals, setCourseGoals] = useState([]);

setCourseGoals([...courseGoals, newGoal]);
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The spread operator <span class="codeSnip">...</span> copies all existing array items.</li>
    <li>The new item is appended at the end.</li>
    <li>This creates a brand new array rather than mutating the existing one.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Updating State Based on Previous State

<hr class="dividerSection" />

When your new state depends on the previous state, you should pass a <span class="emphasis">function</span> to the state updating function rather than a value directly.

React will automatically call that function and pass it the current existing state as an argument.

<hr class="dividerExample" />

#### Example — Functional State Update

```js
const [courseGoals, setCourseGoals] = useState([]);

function addGoalHandler() {
  setCourseGoals((currentCourseGoals) => [
    ...currentCourseGoals,
    enteredGoalText,
  ]);
}
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The function passed to <span class="codeSnip">setCourseGoals</span> is automatically called by React.</li>
    <li>React passes the <span class="emphasis">current state</span> as the argument. In this case it is <span class="codeSnip">currentCourseGoals</span>.</li>
    <li>The spread operator <span class="codeSnip">...</span> copies all existing array items into the new array.</li>
    <li>The new item is then appended at the end.</li>
    <li>This approach is safer than reading the state variable directly because React may batch state updates. The functional form guarantees you always receive the most up-to-date state.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Building a List with State

<hr class="dividerSection" />

You can use the <span class="codeSnip">.map()</span> method to dynamically render a list of items from a state array.

<hr class="dividerExample" />

#### Example — Rendering a List

```js
const [courseGoals, setCourseGoals] = useState([]);

return (
  <View>
    {courseGoals.map((goal) => (
      <Text>{goal}</Text>
    ))}
  </View>
);
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">.map()</span> is a standard JavaScript method that works the same way in React Native as in React for the web.</li>
    <li>Each item in the array is passed to the callback function as <span class="codeSnip">goal</span>.</li>
    <li>The callback returns a JSX element for each item. In this case it is a <span class="codeSnip">&lt;Text&gt;</span> component.</li>
    <li>The result is an array of JSX elements that React Native renders as a list.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### The key Prop

<hr class="dividerSubsection1" />

When rendering a list using <span class="codeSnip">.map()</span>, every item must receive a <span class="codeSnip">key</span> prop that <span class="emphasis">uniquely identifies</span> that item.

This is not specific to React Native. It is a React requirement that applies to both web and mobile.

Without a <span class="codeSnip">key</span> prop, React will show a warning: <span class="codeSnip">Each child in a list should have a unique key prop.</span>

<hr class="dividerExample" />

#### Example — List With key Prop

```js
{courseGoals.map((goal) => (
  <Text key={goal}>{goal}</Text>
))}
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The <span class="codeSnip">key</span> prop helps React efficiently update the list under the hood.</li>
    <li>The value passed to <span class="codeSnip">key</span> must be <span class="emphasis">unique</span> among the items in the list.</li>
    <li>In this example the goal text string itself is used as the key since the goals are strings.</li>
    <li>Using the goal text as a key is not perfectly unique since the same text could be entered twice. It is good enough for simple cases and will be improved later using unique IDs.</li>
    <li>In real apps with database data, use a unique ID rather than the item value as the key.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Note — key Prop vs Key Value Pairs

<hr class="dividerSubsection1" />

The <span class="codeSnip">key</span> prop in React lists and <span class="emphasis">key value pairs</span> in JavaScript objects and JSON share the same word but serve completely different purposes.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A <span class="emphasis">key value pair</span> in an object or JSON is a property name mapped to a value. For example: <span class="codeSnip">{ name: "Alice" }</span>. You access and use these in your code.</li>
    <li>The <span class="codeSnip">key</span> <span class="emphasis">prop</span> in a React list is a hint to React's rendering engine to help it track which item is which when the list changes. You do not access it in your code. React uses it internally.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Multiple State Variables

<hr class="dividerSection" />

A component can have multiple independent state variables. Each is managed by its own <span class="codeSnip">useState</span> call.

```js
const [enteredGoalText, setEnteredGoalText] = useState('');
const [courseGoals, setCourseGoals] = useState([]);
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Each state variable is independent. Updating one does not affect the others.</li>
    <li>Use separate <span class="codeSnip">useState</span> calls for logically separate pieces of state.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Best Practices

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Use the <span class="emphasis">functional update form</span> when new state depends on previous state.</li>
    <li>Never mutate state directly. Always create a new value using spread or other immutable patterns.</li>
    <li>Keep state as minimal as possible. Only store what is necessary.</li>
    <li>Lift state up to a parent component when multiple children need to share it.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Concept</th>
      <th class="tableCellHeader">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">useState</span></td>
      <td class="tableCell">Adds local state to a functional component</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Setter function</td>
      <td class="tableCell">Triggers a re-render with the new value when called</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Spread operator</td>
      <td class="tableCell">Updates array state immutably by copying existing items</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Functional update form</td>
      <td class="tableCell">Pass a function to the setter when new state depends on previous state</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">.map()</span></td>
      <td class="tableCell">Renders arrays of state as lists of JSX elements</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">key</span> prop</td>
      <td class="tableCell">Uniquely identifies each item in a rendered list so React can update it efficiently</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/react-native/basics/core/props-and-state/fundamentals/props">← Back</a>
    <div class="xrefTitle">React Native → Props & State → Fundamentals → Props</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/react-native/basics/core/props-and-state/async-and-api/fetch-and-axios">Next →</a>
    <div class="xrefTitle">Section: React Native → Props & State → Async/API State → Fetch & Axios</div>
  </div>
</div>