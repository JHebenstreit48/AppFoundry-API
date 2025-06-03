### Overview

React is a JavaScript library used to build user interfaces. It focuses on UI logic and state management but doesn’t depend on the platform it's running on. This means the core of React is platform-agnostic.

However, to actually render React components in a real-world environment, you need a platform-specific renderer. For the web, that renderer is <span class="codeSnip">React-DOM</span>. For mobile, the equivalent is <span class="codeSnip">React Native</span>.

---

### React vs React DOM vs React Native

#### Method and Purpose

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Method</th>
      <th class="tableCellHeader">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">React</span></td>
      <td class="tableCell">UI logic</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">React DOM</span></td>
      <td class="tableCell">Web rendering</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">React Native</span></td>
      <td class="tableCell">Native rendering</td>
    </tr>
  </tbody>
</table>

#### Method and Platform

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Method</th>
      <th class="tableCellHeader">Platform</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">React</span></td>
      <td class="tableCell">Agnostic</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">React DOM</span></td>
      <td class="tableCell">Browser</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">React Native</span></td>
      <td class="tableCell">iOS / Android</td>
    </tr>
  </tbody>
</table>

#### Method and Rendering Target

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Method</th>
      <th class="tableCellHeader">Renders To</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">React</span></td>
      <td class="tableCell">Virtual DOM</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">React DOM</span></td>
      <td class="tableCell">HTML / CSS</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">React Native</span></td>
      <td class="tableCell">Native Views</td>
    </tr>
  </tbody>
</table>

#### Method and Threading Model

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Method</th>
      <th class="tableCellHeader">Threading</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">React</span></td>
      <td class="tableCell">JS in runtime</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">React DOM</span></td>
      <td class="tableCell">JS + DOM APIs</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">React Native</span></td>
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

It does not render to a screen directly. That responsibility is delegated to renderers like <span class="codeSnip">React-DOM</span> and <span class="codeSnip">React Native</span>.

---

### What is React Native?

React Native is an alternative rendering system that allows React code to control native mobile interfaces. It uses a set of special built-in components like <span class="codeSnip">&lt;View&gt;</span> and <span class="codeSnip">&lt;Text&gt;</span> that map to native views on iOS and Android.

These components are not HTML. They compile to native equivalents, giving the app a native look and feel while keeping logic written in JavaScript.

---

### Why Not Just Use React DOM?

React DOM is limited to web browsers. It renders HTML elements using the DOM API and CSS for styling. It cannot access device-level features like the camera, accelerometer, or file system directly.

React Native solves this by providing native APIs to JavaScript, allowing for direct interaction with the device.

---

### JavaScript Thread and Native Bridge

The JavaScript logic itself is not compiled into native code. Instead, it runs in a lightweight thread hosted within the native app environment.

A simple JavaScript process is spun up as part of the native app:

- Manages the React components
- Communicates via a bridge to the native platform
- Allows seamless interaction between JavaScript and native APIs

✅ This bridge enables a hybrid communication model where the JavaScript thread can send and receive commands to native components asynchronously.

---

### Built-In Components in React Native

React Native provides several core components designed for building user interfaces:

<div class="bulletWrapper1">

<span class="bullet4">
- <span class="codeSnip">&lt;View&gt;</span> — acts like a generic container.
</span>

<span class="bullet4">
- <span class="codeSnip">&lt;Text&gt;</span> — used to display text.
</span>

<span class="bullet5">
- <span class="codeSnip">StyleSheet</span> — utility for defining component styles.
</span>

</div>

These components are compiled into their native equivalents on iOS and Android.

✅ <span class="codeSnip">&lt;View&gt;</span> and <span class="codeSnip">&lt;Text&gt;</span> are among the most essential and most used components in any React Native project.

---

### Additional Benefits of React Native

React Native provides even more advantages beyond being cross-platform and offering native API access:

- <span class="emphasis">Near-Native Performance</span>: React Native apps use actual native components, allowing for performance close to fully native apps.
- <span class="emphasis">Fast Development Cycles</span>: Features like Hot Reloading enable developers to instantly preview code changes without rebuilding the entire app.
- <span class="emphasis">Strong Ecosystem and Community</span>: A large community and extensive library ecosystem support rapid development with pre-built solutions and plugins.

✅ These benefits make React Native a powerful choice for building efficient, scalable, and high-quality mobile applications.