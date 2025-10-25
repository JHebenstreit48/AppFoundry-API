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

### Shrink-to-Fit Behavior Without Fixed Dimensions

In a Flexbox layout, if a parent container has no <span class="codeSnip">width</span>, <span class="codeSnip">height</span>, or <span class="codeSnip">flex</span> value, it will shrink to fit its children.

For example, if a parent <View> contains child boxes but no width or height is defined, it will only be as wide or tall as its children need it to be — based on their content and padding.

In this state, the layout may appear very small unless a fixed or relative size is applied to the parent container.

To prevent this shrink-to-fit behavior, you can:
- Add a fixed <span class="codeSnip">width</span> (e.g., <span class="codeSnip">width: 300</span>)
- Use a percentage width (e.g., <span class="codeSnip">width: '80%'</span>)
- Or apply <span class="codeSnip">flex: 1</span> to fill available space

---

#### Example: Using a Fixed Width

```javascript
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 50, flexDirection: 'row', width: 300 }}>
      <View style={{ backgroundColor: 'red' }}>
        <Text>1</Text>
      </View>
      <View style={{ backgroundColor: 'blue' }}>
        <Text>2</Text>
      </View>
      <View style={{ backgroundColor: 'green' }}>
        <Text>3</Text>
      </View>
    </View>
  );
}
```

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

### Flex Ratios and Width Behavior Along the Main Axis

In Flexbox, children can grow or shrink based on their <span class="codeSnip">flex</span> values — which apply along the Main Axis.

For example, in a parent <View> using <span class="codeSnip">flexDirection: 'row'</span> with three children:

- The first child has <span class="codeSnip">flex: 1</span>
- The second child has <span class="codeSnip">flex: 2</span>
- The third child has no flex

The available horizontal space (after padding) is divided proportionally:
- The first child takes 1 part
- The second child takes 2 parts
- The third child only takes as much width as its content and padding require

This shows how <span class="codeSnip">flex</span> allows child components to grow or shrink relative to each other along the Main Axis, while also stretching (if not otherwise constrained) along the Cross Axis.

#### Example: Flex Ratios and Cross Axis Stretching Combined

```javascript
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        padding: 50,
        flexDirection: 'row',
        width: '80%',
        height: 300,
        justifyContent: 'space-around',
        alignItems: 'stretch',
      }}>
      <View
        style={{
          backgroundColor: 'red',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>3</Text>
      </View>
    </View>
  );
}
```
---

#### Summary

- Absolute sizes are numbers (device-independent pixels).
- Relative sizes are percentage strings ('80%'), relative to the parent container.
- Minimum and maximum constraints (minWidth, maxHeight, etc.) help make layouts more flexible.
- The Dimensions API provides screen width and height at runtime.
