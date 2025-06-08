### Common Components

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Component</th>
      <th class="tableCellHeader">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">View</td>
      <td class="tableCell">Acts as a container for layout and styling, similar to a div in web development.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Text</td>
      <td class="tableCell">Displays readable text on the screen.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">TextInput</td>
      <td class="tableCell">Allows the user to enter text input, such as for forms or search fields.</td>
    </tr>
  </tbody>
</table>

---

### Example: Building a Custom Component

```javascript
const MyTitle = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
};
```

In this example:

- <span class="codeSnip">MyTitle</span> is a **custom component**.
- It **combines Core Components**: <span class="codeSnip">View</span> and <span class="codeSnip">Text</span>.
- It uses <span class="codeSnip">props</span> to pass dynamic data into the component.

**Summary**: React Native allows you to build flexible, scalable UIs by composing built-in Core Components —
just like React for web and HTML element composition.

---

### About TextInput in React Native

The <span class="codeSnip">&lt;TextInput&gt;</span> component in React Native allows users to **enter text**.  
It must be **imported** just like all other core components.

The <span class="codeSnip">&lt;TextInput&gt;</span> component is a **self-closing** component.

Example:

```javascript
import { TextInput } from 'react-native';

export default function App() {
  return (
    <TextInput />
  );
}
```

You can also add a <span class="codeSnip">placeholder</span> prop inside the <span class="codeSnip">&lt;TextInput&gt;</span> component:

Example:

```javascript
import { TextInput } from 'react-native';

export default function App() {
  return (
    <TextInput placeholder="Your placeholder text here" />
  );
}
```

### Text vs TextInput

- <span class="codeSnip">&lt;Text&gt;</span> is used to **display static text**.
- <span class="codeSnip">&lt;TextInput&gt;</span> is used to **allow the user to input text** in a field.