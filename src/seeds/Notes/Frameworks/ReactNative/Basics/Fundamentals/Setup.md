<br>

## Project Setup Methods

---

There are two main ways to start a React Native project:

- <span class="emphasis">Expo</span> — a <span class="secondEmphasis">managed workflow</span> for
  <span class="secondEmphasis">rapid</span> development.
- <span class="emphasis">React Native CLI</span> — a bare-bones approach offering full native control.

Each setup method fits different project needs and complexity levels.

---

### Expo Quickstart

<span class="emphasis">Expo</span> is a free, open-source toolchain that simplifies React Native development
by providing a managed environment.

**Key Benefits:**

- No need to install Android Studio or Xcode for basic development.
- Built-in tools for testing, debugging, and live reloading.
- Ideal for prototyping, small-to-medium apps, and rapid iteration.

This launches the Metro Bundler and opens Expo DevTools with a QR code you can scan using
<span class="emphasis">Expo Go</span> to run the app on a physical device or emulator.

For full setup instructions, see  
<a href="/react-native/tools/expo/cli/workflow">Expo — CLI Workflow</a>

---

### React Native CLI Quickstart

<span class="emphasis">React Native CLI</span> is the official toolchain for apps requiring access to custom
native code.

**Key Benefits:**

- Full control over Android and iOS native layers.
- Easier integration with Java, Kotlin, Objective-C, or Swift modules.
- Ideal for production-grade apps needing platform-specific optimization.

Requires Android Studio (for Android) and Xcode (for iOS) installed and configured.  
For complete setup details, see  
<a href="/tools/react-native-cli/setup">React Native CLI — Setup</a>

---

### Language and Entry Files

When you create a new React Native project:

**Defaults:**

- Supports both <span class="emphasis">JavaScript</span> and <span class="emphasis">TypeScript</span> (choose
  a TS template or add a <span class="codeSnip">tsconfig.json</span>).
- TypeScript files that contain JSX must use the <span class="codeSnip">.tsx</span> extension.

**Root File:**

- JavaScript: <span class="codeSnip">App.js</span>
- TypeScript: <span class="codeSnip">App.tsx</span>

**Notes:**

- <span class="codeSnip">index.js</span> usually remains unchanged.
- The <span class="codeSnip">&lt;App /&gt;</span> component is your primary entry point.

For structure and architecture, see the <span class="emphasis">Project Structure</span> page.

---

### Choosing Between Expo and React Native CLI

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Setup Method</th>
      <th class="tableCellHeader">Best For</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">Expo</span></td>
      <td class="tableCell">Rapid prototyping, beginners, or projects without custom native code</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">React Native CLI</span></td>
      <td class="tableCell">Complex apps, native integration, or production-level performance tuning</td>
    </tr>
  </tbody>
</table>

---

### Pros and Cons Overview

#### Expo

**Pros**

- Fast and frictionless setup
- No native build tools required initially
- Live reload and testing via Expo Go

**Cons**

- Limited access to native modules unless ejected
- Slightly larger app binaries
- Some advanced features require the bare workflow

#### React Native CLI

**Pros**

- Full access to native APIs and libraries
- Ideal for complex and performance-intensive apps
- No limitations on third-party native modules

**Cons**

- Requires Android Studio and Xcode
- Higher setup complexity
- Steeper learning curve

---

### Summary

For beginners or fast iteration, start with <span class="emphasis">Expo</span>.  
For advanced features and full native control, use <span class="emphasis">React Native CLI</span>.

Choosing the right setup depends on your project’s scope, timeline, and technical needs.

---

<div class="xrefBox">
  <span class="emphasis">Next:</span>
<a href="/react-native/basics/fundamentals/structure">Project Structure</a>.
</div>