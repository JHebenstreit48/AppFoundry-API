## React Native Introduction

---

### Overview

React is a JavaScript library used to build user interfaces. It focuses on UI logic and state management but doesn’t depend on the platform it's running on. This means the core of React is platform-agnostic.

However, to actually render React components in a real-world environment, you need a platform-specific renderer. For the web, that renderer is React-DOM. For mobile, the equivalent is React Native.

---

### React vs React DOM vs React Native

The following table highlights the primary differences between the core React library and two rendering targets: React-DOM (for browsers) and React Native (for native mobile apps).

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Method</th>
      <th class="tableCellHeader">Purpose</th>
      <th class="tableCellHeader">Platform</th>
      <th class="tableCellHeader">Renders To</th>
      <th class="tableCellHeader">Threading</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">React</span></td>
      <td class="tableCell">UI logic</td>
      <td class="tableCell">Agnostic</td>
      <td class="tableCell">Virtual DOM</td>
      <td class="tableCell">JS in runtime</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">React DOM</span></td>
      <td class="tableCell">Web rendering</td>
      <td class="tableCell">Browser</td>
      <td class="tableCell">HTML / CSS</td>
      <td class="tableCell">JS + DOM APIs</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">React Native</span></td>
      <td class="tableCell">Native rendering</td>
      <td class="tableCell">iOS / Android</td>
      <td class="tableCell">Native Views</td>
      <td class="tableCell">JS + Native Bridge</td>
    </tr>
  </tbody>
</table>

---

### Platform-Agnostic Core

React’s core provides tools for:

- Managing state
- Building and nesting component trees
- Handling UI logic

It does not render to a screen directly. That responsibility is delegated to renderers like React-DOM and React Native.

---

### What is React Native?

React Native is an alternative rendering system that allows React code to control native mobile interfaces. It uses a set of special built-in components like <span class="codeSnip">&lt;View&gt;</span> and <span class="codeSnip">&lt;Text&gt;</span> that map to native views on iOS and Android.

These components are not HTML. They compile to native equivalents, giving the app a native look and feel while keeping logic written in JavaScript.

---

### Why Not Just Use React DOM?

React DOM is limited to web browsers. It renders HTML elements using the DOM API and CSS for styling. It cannot access device-level features like the camera, accelerometer, or file system directly.

React Native solves this by providing native APIs to JavaScript, allowing for direct interaction with the device.
