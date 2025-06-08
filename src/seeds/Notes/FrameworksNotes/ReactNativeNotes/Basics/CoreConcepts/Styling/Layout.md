## Layouts in React Native

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

### Flexbox in React Native: Enabled by Default

In React Native, **Flexbox is enabled by default** on all <span class="codeSnip">&lt;View&gt;</span> components.

- There is **no need** to set <span class="codeSnip">display: 'flex'</span> manually, unlike in web development with CSS.
- Every <span class="codeSnip">&lt;View&gt;</span> already behaves like a Flex container.
- You can immediately control layout using properties like <span class="codeSnip">flexDirection</span>, <span class="codeSnip">justifyContent</span>, and <span class="codeSnip">alignItems</span>.

In comparison:

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Web (CSS)</th>
      <th class="tableCellHeader">React Native (Mobile)</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Must set <span class="codeSnip">display: flex</span> manually</td>
      <td class="tableCell">Flexbox is the default on <span class="codeSnip">&lt;View&gt;</span></td>
    </tr>
  </tbody>
</table>

---

### Flexbox Layouts in React Native

In React Native, layouts are typically created using **Flexbox** — similar to how Flexbox works in web development.

- Elements are positioned inside containers, just like CSS Flexbox.
- Positioning and layout are controlled via style properties applied to the container.
- Flexbox is all about controlling the **axes** inside the container.

Example:

```javascript
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  }
});
```

In this example:

- <span class="codeSnip">flex: 1</span> tells the container to **expand and occupy all available space** relative to its siblings.
- <span class="codeSnip">flexDirection</span> controls the **orientation** of the layout:
  - **Main Axis**: The primary direction along which items are laid out (defaults to vertical / column in React Native).
  - **Cross Axis**: The axis perpendicular to the Main Axis (defaults to horizontal / row).

---

### Understanding Padding in React Native

Padding in React Native works just like it does in web development with CSS.

- **Padding** controls the **space inside** a component, between the component’s content and its border (if any).
- It defines the **internal spacing**, ensuring that the text or child elements do not touch the component’s edges.
- Padding is applied on all sides or can be controlled individually using
  <span class="codeSnip">paddingTop</span>, <span class="codeSnip">paddingBottom</span>,
  <span class="codeSnip">paddingLeft</span>, and <span class="codeSnip">paddingRight</span>.

This behavior is consistent with how padding works in **React for the web** (CSS box model).

---

### Layout Summary

<span class="codeSnip">justifyContent</span> positions children **along** the Main Axis (layout direction).  
<span class="codeSnip">alignItems</span> positions children **across** the Cross Axis (perpendicular to layout direction).  
This behavior closely mirrors **CSS Flexbox** — but React Native defaults to a **column layout** (<span class="codeSnip">flexDirection: 'column'</span>), unlike the web where the default is row.