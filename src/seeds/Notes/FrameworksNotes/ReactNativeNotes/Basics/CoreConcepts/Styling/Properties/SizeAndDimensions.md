## Size and Dimensions in React Native

---

### Understanding Size and Dimensions

React Native provides several ways to control the size of elements using properties like width, height, minWidth, and maxHeight. These properties are similar to CSS, but React Native simplifies the box model and removes the concept of units like px — numbers are assumed to be density-independent pixels.

---

### Absolute vs Relative Dimensions

- Absolute dimensions are set with numbers (no units), representing device-independent pixels (DIP).
- Relative dimensions are set with percentage strings (like '80%'), relative to the parent container.

Example:

```javascript
const styles = StyleSheet.create({
  absoluteBox: {
    width: 200,   // 200 device-independent pixels
    height: 100
  },
  relativeBox: {
    width: '80%', // 80% of the parent container's width
    height: '50%' // 50% of the parent container's height
  }
});
```

---

### How Percentage-Based Widths and Heights Work

In React Native, when you define dimensions like width or height using a percentage, the percentage is relative to the parent container, not the entire screen.

- width: '80%' means the element will take up 80% of its parent’s width.
- height: '50%' means the element will take up 50% of its parent’s height.
- This behavior is similar to how CSS percentages work on the web — percentages are relative to the parent element, not the viewport.

Example:

```javascript
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%'   // Takes up 80% of the container's width
  }
});
```

In this example:
- textInput will occupy 80% of the width of its parent container (container).
- The parent container’s size determines the available space that textInput can use.

**Key Point**:  
In React Native, percentages for size behave just like web CSS — percentages are relative to the immediate parent element.

---

### Example: Applying Percentage Width to a View and TextInput

```javascript
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal!" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%'
  }
});
```

This example shows:
- The appContainer View provides padding around all child components.
- The inputContainer View arranges the TextInput and Button side-by-side using flexDirection: 'row'.
- The TextInput is styled to take 80% of the width of its parent container.
- The Button automatically uses the remaining space beside the TextInput.

---

### Minimum and Maximum Dimensions

You can also restrict the minimum or maximum size of an element using:

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Property</th>
      <th class="tableCellHeader">Effect</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">minWidth</td>
      <td class="tableCell">Sets the minimum width the element can shrink to</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">minHeight</td>
      <td class="tableCell">Sets the minimum height the element can shrink to</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">maxWidth</td>
      <td class="tableCell">Sets the maximum width the element can grow to</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">maxHeight</td>
      <td class="tableCell">Sets the maximum height the element can grow to</td>
    </tr>
  </tbody>
</table>

Example:

```javascript
const styles = StyleSheet.create({
  box: {
    minWidth: 100,
    maxWidth: 300,
    minHeight: 50,
    maxHeight: 150
  }
});
```

---

### Using the Dimensions API

React Native provides the Dimensions API to access the screen's width and height at runtime.

Example:

```javascript
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
```

This is useful when you need to perform calculations or set styles based on the actual device size.

**Key Point**:  
Dimensions.get('window') returns the size of the entire application window, not just the visible area if the device has status bars or navigation bars.

---

#### Summary

- Absolute sizes are numbers (device-independent pixels).
- Relative sizes are percentage strings ('80%'), relative to the parent container.
- Minimum and maximum constraints (minWidth, maxHeight, etc.) help make layouts more flexible.
- The Dimensions API provides screen width and height at runtime.
