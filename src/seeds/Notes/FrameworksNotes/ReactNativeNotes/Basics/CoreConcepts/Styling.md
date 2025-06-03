## Styling in React Native

---

### Key Difference: No CSS in React Native

There is no traditional CSS for styling in React Native. CSS does not exist in React Native because it is not designed for browser-based websites or web applications.

✅ Instead, styling is handled through JavaScript using the <span class="codeSnip">StyleSheet</span> API provided by React Native.

✅ Styles are written in JavaScript objects and applied directly to components.

---

### Why No CSS?

- React Native targets **native UI elements**, not HTML elements.
- Traditional web technologies like CSS are replaced with **style objects** that are optimized for mobile platforms.

---

### Web CSS vs React Native Styling

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Web (CSS)</th>
      <th class="tableCellHeader">React Native (StyleSheet)</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Separate .css or .scss files</td>
      <td class="tableCell">Styles defined inside JavaScript objects</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Class and ID selectors</td>
      <td class="tableCell">Direct styling via props or StyleSheet</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">CSS cascade and specificity</td>
      <td class="tableCell">No cascade — styles are applied directly</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Media queries for responsiveness</td>
      <td class="tableCell">Dimensions API, Flexbox, Platform API</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Hover, focus, active pseudo-classes</td>
      <td class="tableCell">Limited to touch events; no hover or focus states</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Font-family from system or imported fonts</td>
      <td class="tableCell">Custom fonts must be bundled manually</td>
    </tr>
  </tbody>
</table>

---

### Key Layout Differences

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Web Layout (CSS)</th>
      <th class="tableCellHeader">React Native Layout (Flexbox)</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">CSS Flexbox for layout</td>
      <td class="tableCell">React Native uses a subset of Flexbox</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">flexDirection defaults to row</td>
      <td class="tableCell">flexDirection defaults to column</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">CSS Grid support available</td>
      <td class="tableCell">No grid — only Flexbox for layout</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Box model with margin, padding, border</td>
      <td class="tableCell">Box model concept similar but tweaked for native</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Responsive units (%, vw, vh)</td>
      <td class="tableCell">Flex proportions and Dimensions API</td>
    </tr>
  </tbody>
</table>

---

### Writing Styles in JavaScript

In React Native, you write all your styles directly in JavaScript.

✅ **Key Points**:
- There is no extra styling language like CSS or SCSS.
- Styles are defined as JavaScript objects and passed to components.
- React Native provides a large set of styling properties that are **similar** to CSS properties.
- However, React Native supports only a **subset** of the full CSS feature set — not everything from CSS is available.

---

### Styling Approaches in React Native

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

✅ **Key Points**:
- All styles are **written in JavaScript**, next to your component code.
- The syntax is **similar to CSS**, but React Native supports only a **subset** of CSS properties and features.
- There is no separate styling file — everything stays in your JavaScript or TypeScript files.

---

✅ **Summary**

React Native eliminates the need for traditional CSS by shifting all styling into JavaScript.  
You can style your components using either **Inline Styles** or centralized **StyleSheet Objects**.  
While the syntax is similar to CSS, React Native implements only a subset of CSS properties, optimized for mobile development.

---