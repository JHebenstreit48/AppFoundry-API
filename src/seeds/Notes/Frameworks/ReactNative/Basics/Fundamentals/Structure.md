## Introduction to Project Structure

React Native projects follow a standard structure that helps organize your app into logical parts.

**Key Highlights**:
- The entry point of the app is the root component.
- The project files are organized by platform and by features.
- JavaScript and TypeScript are both supported.

---

### Root Component and Entry Point

The root of every React Native app starts with the <span class="codeSnip">App</span> component.

**Key Points**:
- In JavaScript projects, the root file is <span class="codeSnip">App.js</span>.
- In TypeScript projects, the root file is <span class="codeSnip">App.tsx</span>.
- The root component is the starting point of the entire React component tree.
- <span class="codeSnip">App.js</span> or <span class="codeSnip">App.tsx</span> is automatically registered and rendered by the native code (via <span class="codeSnip">index.js</span>).

---

### Component Tree Structure

All other user interface elements and components must be placed **inside** the <span class="codeSnip">App</span> component or as **descendants** of it.

**Key Concept**:
- The <span class="codeSnip">App</span> component is the **single root** of the entire React Native application.
- All child components (views, screens, buttons, inputs) must be nested within it.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Term</th>
      <th class="tableCellHeader">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Root Component</td>
      <td class="tableCell">The top-most component in the component tree — <span class="codeSnip">App</span> in React Native projects.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Child Components</td>
      <td class="tableCell">Components nested inside the root — must be descendants of <span class="codeSnip">App</span>.</td>
    </tr>
  </tbody>
</table>

**Why This Matters**:
- React Native uses a single root approach — rendering begins at <span class="codeSnip">App</span>.
- It ensures a predictable and efficient rendering pipeline.
- It aligns with how React works in web development — everything is nested within one root.

---

### Why .js and .tsx for the Root Component?

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">File Type</th>
      <th class="tableCellHeader">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">.js</span></td>
      <td class="tableCell">JavaScript file that can include JSX syntax; handled by Babel during bundling.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">.tsx</span></td>
      <td class="tableCell">TypeScript file that contains JSX syntax; required for React components in TypeScript projects.</td>
    </tr>
  </tbody>
</table>

**Important**:
- <span class="codeSnip">.ts</span> files cannot contain JSX — only <span class="codeSnip">.tsx</span> files support it.
- JSX is core to React Native UI development, so components must be <span class="codeSnip">.tsx</span> in TypeScript projects.

---

### How TypeScript Works in React Native

React Native integrates TypeScript seamlessly without the need for custom build steps.

**Key Behavior**:
- TypeScript sources are transformed by **Babel** during bundling.
- The TypeScript compiler (<span class="codeSnip">tsc</span>) is used only for **type-checking**, not for code compilation.
- This keeps the development workflow fast and efficient.

---

### Typical Project File Structure

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Folder/File</th>
      <th class="tableCellHeader">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">App.js / App.tsx</td>
      <td class="tableCell">Root component of the app; entry point for the UI.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">index.js</td>
      <td class="tableCell">Entry point for native code to launch the app; usually unchanged even in TypeScript projects.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">android/</td>
      <td class="tableCell">Native Android project files (Gradle configuration, Java/Kotlin code).</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">ios/</td>
      <td class="tableCell">Native iOS project files (Xcode project, Objective-C/Swift code).</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">src/</td>
      <td class="tableCell">Folder where app code is typically organized (components, screens, utilities, assets).</td>
    </tr>
  </tbody>
</table>

---

### Summary

In a React Native project:
- **<span class="codeSnip">App.js</span>** or **<span class="codeSnip">App.tsx</span>** serves as the root of the app.
- **JavaScript** uses <span class="codeSnip">.js</span> files, but **TypeScript with JSX** requires <span class="codeSnip">.tsx</span>.
- **Metro Bundler** handles bundling and Babel transforms both JavaScript and TypeScript sources.
- The project structure is designed to keep app and native code logically separated and easy to manage.