markdown
# State

---

## What Is State?

In React Native, state refers to data managed within a component that can change over time in response to user actions, network responses, or other factors. It is a core concept in building dynamic interfaces.

---

## React Native vs Web React

State works the same in React Native as it does in other React apps, such as web-based React apps. You also import it just like in web React apps — usually via the <span class="codeSnip">useState</span> hook from React.

This makes it easy for developers with React experience to transition into React Native without relearning state management.

---

## Example: Basic useState

```javascript
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

### **State Updates & Asynchronous Behavior**
---

**State updates are asynchronous**, meaning React batches updates for performance.
Use the **functional update pattern** when the next state depends on the previous state.

**Example: Functional Update Pattern**

javascript
setCount((prevCount) => prevCount + 1);

---
### **Multiple State Variables**
---
React allows managing multiple state values in a single component.

**Example: Managing Multiple State Variables**

```javascript
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
