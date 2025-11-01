## &lt;Button&gt;

----

In React Native, buttons are created differently compared to React for web development.  

<br>

<span class="emphasis">Key Differences</span>:  

<br>

In React (<span class="emphasis">Web</span>), you can place text <span class="emphasis">between</span> the <span class="secondEmphasis">opening</span> and <span class="secondEmphasis">closing</span> tags:

```javascript
<button>Click Me</button>
```

In React Native, the <span class="codeSnip">&lt;Button&gt;</span> component is a **self-closing** element.
Instead of placing text between tags, you specify the button text using the <span class="codeSnip">title</span> prop.

**Important**:

- The <span class="codeSnip">&lt;Button&gt;</span> component **requires** a <span class="codeSnip">title</span> prop to display the label on the button.
- At this stage, the button will not perform any action because no listener, such as onPress, has been added yet.

### Example: Creating a Button in a Basic Layout

```javascript
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Another piece of text!</Text>
      </View>
      <Text>Hello World!</Text>
      <Button title="Tap me!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  }
});
```

In this example:
- A <span class="codeSnip">&lt;View&gt;</span> wraps multiple <span class="codeSnip">&lt;Text&gt;</span> elements and a <span class="codeSnip">&lt;Button&gt;</span>.
- The <span class="codeSnip">&lt;Button&gt;</span> uses the <span class="codeSnip">title</span> prop to display "Tap me!" as its label.
- Since no <span class="codeSnip">onPress</span> listener has been defined, the button will not perform any action when tapped.

---
### Styling Limitations with <span class="codeSnip">&lt;Button&gt;</span>
---

The <span class="codeSnip">&lt;Button&gt;</span> component does not support the <span class="codeSnip">style</span> prop.  
As a result, you cannot directly apply styles, such as background color, padding, or borders using <span class="codeSnip">inline style</span> properties.

Because of this, IDEs such as VS Code won't provide autocomplete for <span class="codeSnip">style</span> when using a <span class="codeSnip">&lt;Button&gt;</span>.  
If <span class="codeSnip">style</span> were supported, VS Code would show a [icon:wrench] icon to the left of the <span class="codeSnip">style</span> prop, indicating that it is a recognized, valid property.

To create custom-style flexibility in buttons, consider using:
- <span class="codeSnip">&lt;Pressable&gt;</span>  
- <span class="codeSnip">&lt;TouchableOpacity&gt;</span>

These alternative components allow full control over styling and interactive behavior.

---
### Example: Custom Button with &lt;Pressable&gt;
---

```js
import { Pressable, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>Custom Button</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 5
  },
  text: {
    color: '#fff',
    fontSize: 16
  }
});
```

This approach provides greater flexibility for appearance and interaction than the default <span class="codeSnip">&lt;Button&gt;</span> component.

---
### Summary
---

- <span class="codeSnip">&lt;Button&gt;</span> is simple and cross-platform — perfect for quick prototyping.  
- <span class="codeSnip">&lt;Pressable&gt;</span> and <span class="codeSnip">&lt;TouchableOpacity&gt;</span> allow custom styling and animation.  
- Use <span class="codeSnip">&lt;Pressable&gt;</span> for modern designs requiring advanced control and visual feedback.

---

### Where to Find More

The complete list of React Native components, along with detailed documentation, can be found in the official
React Native documentation:

<a href="/resources/frameworks/reactnative/basics#components" class="resourceLinks">
Jump to Components Section
</a>