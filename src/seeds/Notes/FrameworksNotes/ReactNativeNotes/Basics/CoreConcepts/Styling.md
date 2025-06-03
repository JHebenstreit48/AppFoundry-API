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

✅ **Summary**

React Native moves away from traditional web styling paradigms.  
Instead of CSS, it uses **JavaScript-based style objects** and **Flexbox** for responsive, native-optimized layouts.  
Understanding these differences is essential when transitioning from web development to mobile development with React Native.
