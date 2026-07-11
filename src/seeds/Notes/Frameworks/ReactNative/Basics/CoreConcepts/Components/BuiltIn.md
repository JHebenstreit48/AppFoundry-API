# The &lt;Button&gt; Component

<hr class="dividerSection" />

## Buttons in React Native vs Web

<hr class="dividerSection" />

In React Native, buttons are created differently compared to React for web development.

In React (<span class="emphasis">Web</span>), you can place text <span class="emphasis">between</span> the <span class="secondEmphasis">opening</span> and <span class="secondEmphasis">closing</span> tags:

```js
<button>Click Me</button>
```

In React Native, the <span class="codeSnip">&lt;Button&gt;</span> component is a <span class="emphasis">self-closing</span> element.

Instead of placing text between tags, you specify the button text using the <span class="codeSnip">title</span> prop.

### Important Notes

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The <span class="codeSnip">&lt;Button&gt;</span> component <span class="emphasis">requires</span> a <span class="codeSnip">title</span> prop to display the label on the button.</li>
    <li>At this stage, the button will not perform any action because no listener such as <span class="codeSnip">onPress</span> has been added yet.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Example — Creating a Button in a Basic Layout

<hr class="dividerSection" />

```js
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

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A <span class="codeSnip">&lt;View&gt;</span> wraps multiple <span class="codeSnip">&lt;Text&gt;</span> elements and a <span class="codeSnip">&lt;Button&gt;</span>.</li>
    <li>The <span class="codeSnip">&lt;Button&gt;</span> uses the <span class="codeSnip">title</span> prop to display "Tap me!" as its label.</li>
    <li>Since no <span class="codeSnip">onPress</span> listener has been defined, the button will not perform any action when tapped.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Styling Limitations with &lt;Button&gt;

<hr class="dividerSection" />

The <span class="codeSnip">&lt;Button&gt;</span> component does not support the <span class="codeSnip">style</span> prop.

As a result, you cannot directly apply styles such as background color, padding, or borders using inline style properties.

Because of this, IDEs such as VS Code will not provide autocomplete for <span class="codeSnip">style</span> when using a <span class="codeSnip">&lt;Button&gt;</span>.

If <span class="codeSnip">style</span> were supported, VS Code would show a wrench icon to the left of the <span class="codeSnip">style</span> prop, indicating that it is a recognized, valid property.

To create custom-style flexibility in buttons, consider using:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">&lt;Pressable&gt;</span></li>
    <li><span class="codeSnip">&lt;TouchableOpacity&gt;</span></li>
  </ul>
</div>

These alternative components allow full control over styling and interactive behavior.

<hr class="dividerSection" />

## Example — Custom Button with &lt;Pressable&gt;

<hr class="dividerSection" />

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

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">&lt;Button&gt;</span> is simple and cross-platform — perfect for quick prototyping.</li>
    <li><span class="codeSnip">&lt;Pressable&gt;</span> and <span class="codeSnip">&lt;TouchableOpacity&gt;</span> allow custom styling and animation.</li>
    <li>Use <span class="codeSnip">&lt;Pressable&gt;</span> for modern designs requiring advanced control and visual feedback.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">

  <div class="xrefItem">
    <a class="xrefBtn" href="/react-native/basics/core/components/core">← Back</a>
    <div class="xrefTitle">React Native → Components → Core</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/react-native/basics/core/components/patterns">Next →</a>
    <div class="xrefTitle">React Native → Components → Patterns</div>
  </div>
  
</div>