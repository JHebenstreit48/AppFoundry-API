# Styling Basics in React Native

<hr class="dividerSection" />

## Styling in React Native

<hr class="dividerSection" />

<hr class="dividerSubsection1" />

### Key Difference: No CSS in React Native

<hr class="dividerSubsection1" />

There is no traditional CSS for styling in React Native.

CSS does not exist in React Native because it is not designed for browser-based websites or web applications.

Instead, styling is handled through JavaScript using the <span class="codeSnip">StyleSheet</span> API provided
by React Native.

Styles are written in JavaScript objects and applied directly to components.

<hr class="dividerSubsection1" />

### Writing Styles in JavaScript

<hr class="dividerSubsection1" />

In React Native, you write all your styles directly in JavaScript.

Key points to understand:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>There is no extra styling language like CSS or SCSS.</li>
    <li>Styles are defined as JavaScript objects and passed to components.</li>
    <li>React Native provides a large set of styling properties that are <span class="emphasis">similar</span> to CSS properties.</li>
    <li>However, React Native supports only a <span class="emphasis">subset</span> of the full CSS feature set. Not everything from CSS is available.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Why No CSS?

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>React Native targets <span class="emphasis">native UI elements</span>, not HTML elements.</li>
    <li>Traditional web technologies like CSS are replaced with <span class="emphasis">style objects</span> that are optimized for mobile platforms.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Web CSS vs React Native Styling

<hr class="dividerSubsection1" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Web (CSS)</th>
      <th class="tableCellHeader">React Native (StyleSheet)</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Separate .css/.scss files <span class="secondEmphasis">or</span> inline <span class="codeSnip">style</span> attributes</td>
      <td class="tableCell">Styles defined inside JavaScript objects</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Class and ID selectors</td>
      <td class="tableCell">Direct styling via props or StyleSheet</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">CSS cascade and specificity</td>
      <td class="tableCell">No cascade. Styles are applied directly.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Media queries for responsiveness</td>
      <td class="tableCell">Dimensions API, Flexbox, Platform API</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Hover, focus, active pseudo-classes</td>
      <td class="tableCell">Limited to touch events. No hover or focus states.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Font-family from system or imported fonts</td>
      <td class="tableCell">Custom fonts must be bundled manually</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSubsection1" />

### Important Note: camelCase Property Names

<hr class="dividerSubsection1" />

Property names in React Native use <span class="emphasis">camelCase</span> instead of the kebab-case used in
CSS.

This is because dashes are not valid in JavaScript property names — for example
<span class="codeSnip">background-color</span> would be interpreted as subtraction in JavaScript, so React
Native uses <span class="codeSnip">backgroundColor</span> instead.

<hr class="dividerSubsection1" />

### Important: Combining Multiple Styles

<hr class="dividerSubsection1" />

While the order of properties <span class="emphasis">inside a single object</span> does not matter, the
<span class="emphasis">order in which you apply multiple styles</span> does matter.

When applying an array of styles to a component, later styles in the array can
<span class="emphasis">override</span> earlier ones:

```js
import { View } from 'react-native';

<View style={[styles.base, styles.override]} />;
```

In this example:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The styles in <span class="codeSnip">styles.override</span> will <span class="emphasis">override</span> any conflicting properties from <span class="codeSnip">styles.base</span>.</li>
    <li>The order <span class="emphasis">within an array</span> behaves like <span class="emphasis">last-in wins</span>. The later style object can overwrite earlier ones.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Key Differences: CSS vs React Native Styling Behavior

<hr class="dividerSubsection1" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">CSS (Web)</th>
      <th class="tableCellHeader">React Native (Mobile)</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Order of properties can matter due to cascading rules.</td>
      <td class="tableCell">Order inside a style object does not matter.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Later CSS rules can override earlier ones (Cascading Style Sheets).</td>
      <td class="tableCell">Only the order of style application (arrays) affects overrides.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">CSS specificity and rule order both affect style resolution.</td>
      <td class="tableCell">JavaScript object merge behavior governs style application.</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSubsection1" />

### Why Use StyleSheet.create()

<hr class="dividerSubsection1" />

While you can define style objects directly in JavaScript, React Native provides the
<span class="codeSnip">StyleSheet.create()</span> API for important reasons:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Freezes the style object to make it immutable, preventing accidental changes at runtime.</li>
    <li>Validates style properties at creation time, catching typos and invalid styles early.</li>
    <li>Optimizes performance by reducing memory usage and generating internal IDs for faster lookups.</li>
    <li>Improves debugging by warning about invalid or unsupported properties.</li>
  </ul>
</div>

Using <span class="codeSnip">StyleSheet.create()</span> is considered a best practice in React Native,
especially for production apps where performance, scalability, and reliability matter.

<hr class="dividerSubsection1" />

### Inline Styles vs StyleSheet Objects

<hr class="dividerSubsection1" />

In React Native, there are two main ways to apply styles to components:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Inline Styles</span> — Defined directly in the component using JavaScript objects.</li>
    <li><span class="emphasis">StyleSheet Objects</span> — Created using <span class="codeSnip">StyleSheet.create()</span> and applied via a reference.</li>
  </ul>
</div>

Each method has advantages and trade-offs, but for most real-world apps, using a StyleSheet object is the
better choice for performance, readability, and scalability.

<hr class="dividerSubsection1" />

### Comparison: Inline Styles vs StyleSheet Objects

<hr class="dividerSubsection1" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Inline Styles</th>
      <th class="tableCellHeader">StyleSheet Objects</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Defined directly inside component props</td>
      <td class="tableCell">Created separately using <span class="codeSnip">StyleSheet.create()</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">New object created on every render</td>
      <td class="tableCell">Frozen object improves performance</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Quick for small, simple components</td>
      <td class="tableCell">Better for larger, complex apps</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Can get messy as styles grow</td>
      <td class="tableCell">Keeps code organized and readable</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Not easily reusable</td>
      <td class="tableCell">Styles are reusable across components</td>
    </tr>
  </tbody>
</table>

<hr class="dividerExample" />

#### Example — Inline Styles

```js
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hello World</Text>
    </View>
  );
}
```

<hr class="dividerExample" />

#### Example — Using StyleSheet.create()

```js
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
    </View>
  );
}
```

<hr class="dividerSubsection1" />

### Modularizing Styles: Best Practice for Large Projects

<hr class="dividerSubsection1" />

For larger and more complex projects, it is a good idea to separate styles into a dedicated file — typically a
<span class="codeSnip">.js</span> or <span class="codeSnip">.ts</span> file.

This approach improves:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Scalability</span> — Easier to manage styles as the app grows.</li>
    <li><span class="emphasis">Maintainability</span> — Styles are centralized and easier to update.</li>
    <li><span class="emphasis">Reusability</span> — Shared styles can be imported across multiple components.</li>
  </ul>
</div>

<hr class="dividerExample" />

#### Example — Modularized Styles: AppStyles.js

```js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default styles;
```

<hr class="dividerExample" />

#### Example — Modularized Styles: App.js

```js
import { View, Text } from 'react-native';
import styles from './AppStyles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
    </View>
  );
}
```

<hr class="dividerSection" />

## Styling Approaches in React Native

<hr class="dividerSection" />

Since there is no CSS in React Native, you apply styles in one of two ways:

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Approach</th>
      <th class="tableCellHeader">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Inline Styles</td>
      <td class="tableCell">Define styles directly inside component props using JavaScript objects.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">StyleSheet Objects</td>
      <td class="tableCell">Create a centralized style object using <span class="codeSnip">StyleSheet.create()</span> and reference styles by name.</td>
    </tr>
  </tbody>
</table>

Key points:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>All styles are <span class="emphasis">written in JavaScript</span>, next to your component code.</li>
    <li>The syntax is <span class="emphasis">similar to CSS</span>, but React Native supports only a <span class="emphasis">subset</span> of CSS properties and features.</li>
    <li>There is no separate styling file — everything stays in your JavaScript or TypeScript files.</li>
  </ul>
</div>

<hr class="dividerSection" />

## The StyleSheet API

<hr class="dividerSection" />

The <span class="codeSnip">StyleSheet.create()</span> method is the recommended way to define styles in React
Native.

It takes an object of style definitions and returns an optimized style object.

<hr class="dividerExample" />

#### Example — Basic StyleSheet

```js
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  }
});
```

<hr class="dividerSection" />

## Common Style Properties

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Property</th>
      <th class="tableCellHeader">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">backgroundColor</span></td>
      <td class="tableCell">Sets the background color of a component</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">color</span></td>
      <td class="tableCell">Sets the text color</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">fontSize</span></td>
      <td class="tableCell">Sets the size of the text</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">fontWeight</span></td>
      <td class="tableCell">Sets the weight of the text such as bold</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">padding</span></td>
      <td class="tableCell">Adds space inside the component</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">margin</span></td>
      <td class="tableCell">Adds space outside the component</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">borderRadius</span></td>
      <td class="tableCell">Rounds the corners of a component</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">flex</span></td>
      <td class="tableCell">Controls how a component grows or shrinks in a flex container</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">width</span> / <span class="codeSnip">height</span></td>
      <td class="tableCell">Sets the dimensions of a component</td>
    </tr>
  </tbody>
</table>

<hr class="dividerExample" />

#### Example — Styling a List Item

```js
goalItem: {
  margin: 8,
  padding: 8,
  borderRadius: 6,
  backgroundColor: '#5e0acc',
}
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">margin</span> adds space outside the item to separate it from other items in the list.</li>
    <li><span class="codeSnip">padding</span> adds space inside the item between the text and the edges.</li>
    <li><span class="codeSnip">borderRadius</span> rounds the corners to give the item a pill-like appearance.</li>
    <li><span class="codeSnip">backgroundColor</span> sets the background color using a hex value.</li>
    <li>Note: <span class="codeSnip">color</span> is not set here because styles do not cascade in React Native. Text color must be set directly on the <span class="codeSnip">&lt;Text&gt;</span> element using a separate style object.</li>
  </ul>
</div>

<hr class="dividerSection" />

## iOS vs Android Styling Differences

<hr class="dividerSection" />

The idea behind React Native is that you can write code with React that will give you native mobile apps for
multiple target platforms.

Sometimes there are differences between platforms and you may need to make tiny code adjustments to target all
platforms correctly.

<hr class="dividerSubsection1" />

### borderRadius on iOS vs Android

<hr class="dividerSubsection1" />

Rounded corners applied directly to a <span class="codeSnip">&lt;Text&gt;</span> component will work on
Android but not on iOS.

This is because React Native translates components into native UI elements and the underlying native text
element on iOS does not support rounded corners.

As a result, <span class="codeSnip">borderRadius</span> has no effect on
<span class="codeSnip">&lt;Text&gt;</span> elements on iOS.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>On <span class="emphasis">Android</span>, the native element that <span class="codeSnip">&lt;Text&gt;</span> is compiled to supports rounded corners.</li>
    <li>On <span class="emphasis">iOS</span>, the native text output element does not support rounded corners so <span class="codeSnip">borderRadius</span> is ignored.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### The Fix: Wrap Text in a View

<hr class="dividerSubsection1" />

As a workaround, wrap the <span class="codeSnip">&lt;Text&gt;</span> component inside a
<span class="codeSnip">&lt;View&gt;</span> element and apply the <span class="codeSnip">borderRadius</span> to
the <span class="codeSnip">&lt;View&gt;</span> instead.

The <span class="codeSnip">&lt;View&gt;</span> is a more generic container element.

The underlying native element it compiles to supports rounded corners on both platforms.

<hr class="dividerExample" />

#### Example — borderRadius Fix for iOS and Android

```js
{
  courseGoals.map((goal) => (
    <View
      style={styles.goalItem}
      key={goal}
    >
      <Text>{goal}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },
  goalText: {
    color: 'white'
  }
});
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The <span class="codeSnip">borderRadius</span> and <span class="codeSnip">backgroundColor</span> are moved to the <span class="codeSnip">&lt;View&gt;</span> style.</li>
    <li>The <span class="codeSnip">color</span> property for the text stays on the <span class="codeSnip">&lt;Text&gt;</span> style since color only applies to text.</li>
    <li>The <span class="codeSnip">key</span> prop and <span class="codeSnip">style</span> assignment both move to the opening <span class="codeSnip">&lt;View&gt;</span> tag since it is now the main element being output in the list.</li>
    <li>The <span class="codeSnip">&lt;Text&gt;</span> tag is still needed because text still needs to be output on the app. It becomes a nested element inside the <span class="codeSnip">&lt;View&gt;</span>.</li>
    <li>The <span class="codeSnip">&lt;View&gt;</span> element is more versatile than <span class="codeSnip">&lt;Text&gt;</span> and supports rounded corners on both iOS and Android.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Styles Do Not Cascade in React Native

<hr class="dividerSubsection1" />

Unlike CSS for the web, styles in React Native do <span class="emphasis">not cascade</span>.

If a color is assigned to a <span class="codeSnip">&lt;View&gt;</span> it will not affect the text inside the
<span class="codeSnip">&lt;Text&gt;</span> element nested within it.

This is because each element is a totally separate and standalone element.

<hr class="dividerExample" />

#### Example — Styles Do Not Cascade

```js
// Apply the style directly on the <Text> element
<Text style={styles.goalText}>{goal}</Text>

// This will NOT make the text white
goalItem: {
  backgroundColor: '#5e0acc',
  color: 'white', // has no effect on nested <Text> element
}

// You must apply the color directly to the <Text> element
goalText: {
  color: 'white', // this works
}
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Moving <span class="codeSnip">color: 'white'</span> to the <span class="codeSnip">&lt;View&gt;</span> style will not make the text white — it has no effect on the <span class="codeSnip">&lt;Text&gt;</span> element inside it.</li>
    <li>You must add a separate style object like <span class="codeSnip">goalText</span> and apply it directly to the <span class="codeSnip">&lt;Text&gt;</span> element using the <span class="codeSnip">style</span> prop.</li>
    <li>This is why you have to set styles on the elements where they are supported instead of a global parent element like you can do in CSS.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Key Takeaway

<hr class="dividerSubsection1" />

The general idea is that you have one codebase that targets both platforms but there are still differences
under the hood.

Some differences can simply be solved by adding an extra wrapper element like
<span class="codeSnip">&lt;View&gt;</span>.

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="https://reactnative.dev/docs/view-style-props" target="_blank" rel="noopener noreferrer">React Native Official Docs → View Style Props</a>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

React Native eliminates the need for traditional CSS by shifting all styling into JavaScript.

You can style your components using either <span class="emphasis">Inline Styles</span> or centralized
<span class="emphasis">StyleSheet Objects</span>.

While the syntax is similar to CSS, React Native implements only a subset of CSS properties optimized for
mobile development.

While inline styles are acceptable for small and simple components, <span class="emphasis">StyleSheet
objects</span> created using <span class="codeSnip">StyleSheet.create()</span> offer better performance and
maintainability.

For larger apps, modularizing styles into separate files is considered a best practice to improve scalability
and code organization.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Inside a style object, the <span class="emphasis">order of properties does NOT affect the rendered style</span>.</li>
    <li>When combining multiple styles, <span class="emphasis">later styles override earlier styles</span> in the array.</li>
    <li>React Native simplifies style resolution compared to the cascading behavior of CSS, making it easier to predict final styles.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/react-native/basics/core/props-and-state/global/persist-and-offline">← Back</a>
    <div class="xrefTitle">Section: React Native → Props & State → Global State → Persist & Offline (RN)</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/react-native/basics/core/styling/fundamentals/layout">Next →</a>
    <div class="xrefTitle">React Native → Styling → Fundamentals → Layout</div>
  </div>
</div>