# What Is State?

<hr class="dividerSection" />

## State in React Native

<hr class="dividerSection" />

In React Native, state refers to data managed within a component that can change over time in response to user actions, network responses, or other factors. It is a core concept in building dynamic interfaces.

<hr class="dividerSection" />

## React Native vs Web React

<hr class="dividerSection" />

State works the same in React Native as it does in other React apps, such as web-based React apps. You also import it just like in web React — usually via the <span class="codeSnip">useState</span> hook from React.

This makes it easy for developers with React experience to transition into React Native without relearning state management.

<hr class="dividerSubsection1" />

### Example: Basic useState

<hr class="dividerSubsection1" />

```js
import { useState } from 'react';
import { View, Text, Button } from 'react-native';

function Counter() {
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

## State Updates & Asynchronous Behavior

<hr class="dividerSection" />

State updates are <span class="emphasis">asynchronous</span> — React batches updates together for performance. This means you cannot rely on the current state value being immediately available after calling a setter.

Because of this, when the next state depends on the previous state, you should always use the <span class="emphasis">functional update pattern</span>.

<hr class="dividerSubsection1" />

### Example: Functional Update Pattern

<hr class="dividerSubsection1" />

```js
setCount((prevCount) => prevCount + 1);
```

When you pass a function to the state updater, React adds it to a <span class="emphasis">queue</span> of pending updates. When React processes the next render, it goes through that queue and passes the guaranteed current state value as the argument to your function — ensuring you are always working with the most up-to-date state, not a stale snapshot.

<hr class="dividerSection" />

## Functional Update Pattern with Arrays

<hr class="dividerSection" />

When your next state depends on the previous state and you are working with arrays, pass a function to the updater. React ensures you always get the most recent state.

There are two approaches. The first uses the current state value directly:

```js
function addGoalHandler() {
  setCourseGoals([...courseGoals, enteredGoalText]);
}
```

This works but is not the recommended approach when your new state depends on the previous state. Because React batches updates, <span class="codeSnip">courseGoals</span> may already be stale by the time React processes it.

The recommended approach is to pass a function to the updater instead:

<hr class="dividerSubsection1" />

### Example: Append to an Array

<hr class="dividerSubsection1" />

```js
function addGoalHandler() {
  setCourseGoals((currentCourseGoals) => [
    ...currentCourseGoals,
    enteredGoalText,
  ]);
}
```

In a nutshell: we take the <span class="emphasis">old array</span>, <span class="emphasis">copy</span> it, <span class="emphasis">add the new goal</span>, and set that as the <span class="emphasis">new state</span>.

<hr class="dividerSection" />

## Rendering Arrays Dynamically with .map()

<hr class="dividerSection" />

To output a list of values from state, transform the array into JSX with <span class="codeSnip">.map()</span>:

```js
{courseGoals.map((goal) => <Text>{goal}</Text>)}
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">goal</span> is the current item in the array.</li>
    <li>The callback returns a JSX element for each item.</li>
    <li>This pattern is identical in React for the web — only the UI elements differ.</li>
  </ul>
</div>

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/javascript/arrays/methods/map">
    DevScriptStax → JavaScript → Arrays → Methods → map
  </a>
</div>
<hr class="dividerSection" />

## Building a List with State

<hr class="dividerSection" />

This example demonstrates three ideas together in order:

<div class="centeredNumberedList">

1. **Text input controlled by state**

2. **Functional update to append to an array**

3. **Dynamic rendering of that array with .map()**

</div>

<hr class="dividerSubsection1" />

### Example: Input → Add → Render

<hr class="dividerSubsection1" />

```js
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>

      <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => <Text>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {},
  inputContainer: {},
  textInput: {},
  goalsContainer: {},
});
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">enteredGoalText</span> tracks the current text input value.</li>
    <li><span class="codeSnip">courseGoals</span> is an array of strings representing the list.</li>
    <li><span class="codeSnip">goalInputHandler</span> updates the input state on each keystroke.</li>
    <li><span class="codeSnip">addGoalHandler</span> uses the functional updater form of <span class="codeSnip">setCourseGoals</span> to ensure it appends to the most up-to-date array.</li>
    <li>The render section maps over <span class="codeSnip">courseGoals</span> and outputs a <span class="codeSnip">&lt;Text&gt;</span> node for each goal.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Multiple State Variables

<hr class="dividerSection" />

React allows managing multiple state values in a single component.

<hr class="dividerSubsection1" />

### Example: Managing Multiple State Variables

<hr class="dividerSubsection1" />

```js
import React, { useState } from "react";
import { View, Text, Button } from "react-native";

function Profile() {
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(25);

  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Button title="Increase Age" onPress={() => setAge(age + 1)} />
    </View>
  );
}

export default Profile;
```

<hr class="dividerSection" />

## State vs Props

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Feature</th>
      <th class="tableCellHeader">State</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Definition</td>
      <td class="tableCell">Managed within the component</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Mutability</td>
      <td class="tableCell">Can be modified</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Usage</td>
      <td class="tableCell">Used for dynamic data</td>
    </tr>
  </tbody>
</table>

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Feature</th>
      <th class="tableCellHeader">Props</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Definition</td>
      <td class="tableCell">Passed from parent to child</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Mutability</td>
      <td class="tableCell">Read-only (immutable)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Usage</td>
      <td class="tableCell">Used for passing data</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>State allows a component to track and update dynamic values.</li>
    <li>React Native uses the same <span class="codeSnip">useState</span> API as React DOM.</li>
    <li>You import <span class="codeSnip">useState</span> from React.</li>
    <li>State updates are asynchronous — React queues and batches them for performance.</li>
    <li>Always use the functional update pattern when new state depends on previous state.</li>
    <li>State updates cause a re-render to reflect changes in the UI.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/react-native/basics/core/props-and-state/fundamentals/props">← Back</a>
    <div class="xrefTitle">Props & State - Fundamentals - Props</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/react-native/basics/core/props-and-state/async-and-api/fetch-and-axios">Next →</a>
    <div class="xrefTitle">Section: Props & State - Async/API State - Fetch & Axios</div>
  </div>
</div>