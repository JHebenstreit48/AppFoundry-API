# Event Handling in React Native

<hr class="dividerSection" />

## What Is Event Handling?

<hr class="dividerSection" />

React Native handles user interactions using built-in event handlers such as <span class="codeSnip">onPress</span>, <span class="codeSnip">onChangeText</span>, and <span class="codeSnip">onSwipe</span>.

<hr class="dividerSection" />

## Handling Button Presses

<hr class="dividerSection" />

The <span class="codeSnip">onPress</span> event is used to detect when a button is tapped.

<hr class="dividerSubsection1" />

### Example: Handling Button Press

<hr class="dividerSubsection1" />

```js
import React, { useState } from "react";
import { View, Text, Button } from "react-native";

function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />
    </View>
  );
}

export default ClickCounter;
```

<hr class="dividerSection" />

## Handling Text Input Changes

<hr class="dividerSection" />

The <span class="codeSnip">onChangeText</span> event allows you to capture user input in a text field.

<hr class="dividerSubsection1" />

### Example: Handling Text Input

<hr class="dividerSubsection1" />

```js
import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

function NameInput() {
  const [name, setName] = useState("");

  return (
    <View>
      <Text>Enter your name:</Text>
      <TextInput
        placeholder="Type here..."
        value={name}
        onChangeText={text => setName(text)}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Text>Hello, {name}!</Text>
    </View>
  );
}

export default NameInput;
```

<hr class="dividerSection" />

## Handling Gestures and Touch Events

<hr class="dividerSection" />

React Native provides components like <span class="codeSnip">TouchableOpacity</span> and <span class="codeSnip">TouchableHighlight</span> for handling tap gestures.

<hr class="dividerSubsection1" />

### Example: Using TouchableOpacity

<hr class="dividerSubsection1" />

```js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function TouchableExample() {
  return (
    <View>
      <TouchableOpacity onPress={() => alert("Box Pressed!")}>
        <View style={{ padding: 20, backgroundColor: "lightblue" }}>
          <Text>Tap Me</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default TouchableExample;
```

<hr class="dividerSection" />

## Common Event Handlers

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Event</th>
      <th class="tableCellHeader">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">onPress</span></td>
      <td class="tableCell">Handles button or touch events</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">onChangeText</span></td>
      <td class="tableCell">Handles text input changes</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">onSwipe</span></td>
      <td class="tableCell">Handles swipe gestures</td>
    </tr>
  </tbody>
</table>

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Event</th>
      <th class="tableCellHeader">Example Component</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">onPress</span></td>
      <td class="tableCell"><span class="codeSnip">Button</span>, <span class="codeSnip">TouchableOpacity</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">onChangeText</span></td>
      <td class="tableCell"><span class="codeSnip">TextInput</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">onSwipe</span></td>
      <td class="tableCell"><span class="codeSnip">Gesture Recognizers</span></td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">onPress</span> is used for button clicks and touch gestures.</li>
    <li><span class="codeSnip">onChangeText</span> captures text input updates.</li>
    <li>Touchable components handle gestures and user interactions effectively.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/react-native/basics/core/jsx-tsx-event/jsx-and-tsx">← Back</a>
    <div class="xrefTitle">JSX/TSX & Event Handling - JSX & TSX</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/react-native/basics/core/props-and-state/fundamentals/props">Next →</a>
    <div class="xrefTitle">Topic: Props & State - Fundamentals - Props</div>
  </div>
</div>