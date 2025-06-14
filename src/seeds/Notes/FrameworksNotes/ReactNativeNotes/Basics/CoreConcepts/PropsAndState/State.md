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

## Summary

- State allows a component to track and update dynamic values
- React Native uses the same <span class="codeSnip">useState</span> API as React DOM
- You import <span class="codeSnip">useState</span> from React
- State updates cause a re-render to reflect changes in the UI

---
