<br>

---
## What Is State?
---

In React Native, state refers to data managed within a component that can change over time in response to user actions, network responses, or other factors. It is a core concept in building dynamic interfaces.

---
## React Native vs Web React
---

State works the same in React Native as it does in other React apps, such as web-based React apps. You also import it just like in web React apps — usually via the <span class="codeSnip">useState</span> hook from React.

This makes it easy for developers with React experience to transition into React Native without relearning state management.

## Example: Basic useState

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

---
### State Updates & Asynchronous Behavior
---

**State updates are asynchronous**, meaning React batches updates for performance.
Use the **functional update pattern** when the next state depends on the previous state.

**Example: Functional Update Pattern**

```js
setCount((prevCount) => prevCount + 1);
```
---
### Functional Update Pattern with Arrays
---

When your next state depends on the previous state, pass a <span class="codeSnip">function</span> to the updater.  
React ensures you always get the most recent state.

**Append to an array example:**

```js
setCourseGoals((currentCourseGoals) => [
  ...currentCourseGoals,
  enteredGoalText,
]);
```

In a nutshell: We take the <span class="emphasis">old array</span>, <span class="emphasis">copy</span> it, <span class="emphasis">add the new <span class="secondEmphasis">goal</span>, and set that as the <span class="emphasis">new state</span>.

---
### Rendering Arrays Dynamically with .map()
---

To output a list of values from state, transform the array into JSX with <span class="codeSnip">.map()</span>:

```js
{courseGoals.map((goal) => <Text>{goal}</Text>)}
```

- <span class="codeSnip">goal</span> is the current item in the array.  
- The callback returns a JSX element for each item.  
- This pattern is identical in React (web); only the UI elements differ.  

📎 See also: **DevScriptStax → JavaScript → Arrays → Methods → map** for full details.

---
## Example: Building a List with State (Input → Add → Render)
---

This example demonstrates three ideas together, in order:
1) text input controlled by state,  
2) a functional update to append to an array state, and  
3) dynamic rendering of that array with <span class="codeSnip">.map()</span>.

```js
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  // 1) Piece of state for the current input value (controlled input)
  const [enteredGoalText, setEnteredGoalText] = useState('');
  // 2) Piece of state holding the list of goals (array)
  const [courseGoals, setCourseGoals] = useState([]);

  // Updates the input state as the user types
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  // Uses a functional updater to append the latest input to the array
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

**Breakdown of the example**
- <span class="codeSnip">enteredGoalText</span> tracks the current text input value.  
- <span class="codeSnip">courseGoals</span> is an array of strings representing the list.  
- <span class="codeSnip">goalInputHandler</span> updates the input state on each keystroke.  
- <span class="codeSnip">addGoalHandler</span> uses the functional updater form of <span class="codeSnip">setCourseGoals</span> to ensure it appends to the most up-to-date array.

- The render section maps over <span class="codeSnip">courseGoals</span> and outputs a <span class="codeSnip">&lt;Text&gt;</span> node for each goal.  

Where this fits in the page flow:
- Place this **worked example after** “Functional Update Pattern with Arrays” and “Rendering Arrays Dynamically”, and **before** “Multiple State Variables”.  
- The top of the page starts with the most basic state concept (single value, incrementer). As you scroll, you progress to **state based on previous state**, then **array state + list rendering**, and finally **multiple state values** and comparisons with props.

**Optional next-steps (best practice, add later)**
- Clear the input after adding: <span class="codeSnip">setEnteredGoalText('')</span>  
- Add <span class="codeSnip">key</span> props when rendering lists and prefer stable IDs  
- Consider <span class="codeSnip">FlatList</span> for large lists in React Native

---
### **Multiple State Variables**
---

React allows managing multiple state values in a single component.

**Example: Managing Multiple State Variables**

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

---
### **State vs. Props**
---

<table class="notesTable">
    <thead>
        <tr class="tableHeader">
            <th class="tableCellHeader">Feature</th>
            <th class="tableCellHeader">State</th>
            <th class="tableCellHeader">Props</th>
        </tr>
    </thead>
    <tbody>
        <tr class="tableRow">
            <td class="tableCell"><strong>Definition</strong></td>
            <td class="tableCell">Managed within the component</td>
            <td class="tableCell">Passed from parent to child</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>Mutability</strong></td>
            <td class="tableCell">Can be modified</td>
            <td class="tableCell">Read-only (immutable)</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>Usage</strong></td>
            <td class="tableCell">Used for dynamic data</td>
            <td class="tableCell">Used for passing data</td>
        </tr>
    </tbody>
</table>

---

## Summary

- State allows a component to track and update dynamic values
- React Native uses the same <span class="codeSnip">useState</span> API as React DOM
- You import <span class="codeSnip">useState</span> from React
- State updates cause a re-render to reflect changes in the UI

---
