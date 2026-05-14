# Project Structure

<hr class="dividerSection" />

## Introduction to Project Structure

<hr class="dividerSection" />

React Native projects follow a standard structure that helps organize your app into logical parts.

<hr class="dividerSubsection1" />

### Key Highlights

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The entry point of the app is the root component.</li>
    <li>The project files are organized by platform and by features.</li>
    <li>JavaScript and TypeScript are both supported.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Root Component and Entry Point

<hr class="dividerSection" />

The root of every React Native app starts with the <span class="codeSnip">App</span> component.

<hr class="dividerSubsection1" />

### Key Points

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>In JavaScript projects, the root file is <span class="codeSnip">App.js</span>.</li>
    <li>In TypeScript projects, the root file is <span class="codeSnip">App.tsx</span>.</li>
    <li>The root component is the starting point of the entire React component tree.</li>
    <li><span class="codeSnip">App.js</span> or <span class="codeSnip">App.tsx</span> is automatically registered and rendered by the native code via <span class="codeSnip">index.js</span>.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Component Tree Structure

<hr class="dividerSection" />

All other user interface elements and components must be placed inside the <span class="codeSnip">App</span> component or as descendants of it.

<hr class="dividerSubsection1" />

### Key Concept

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The <span class="codeSnip">App</span> component is the <span class="emphasis">single root</span> of the entire React Native application.</li>
    <li>All child components — views, screens, buttons, inputs — must be nested within it.</li>
  </ul>
</div>

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

<hr class="dividerSubsection1" />

### Why This Matters

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>React Native uses a single root approach — rendering begins at <span class="codeSnip">App</span>.</li>
    <li>It ensures a predictable and efficient rendering pipeline.</li>
    <li>It aligns with how React works in web development — everything is nested within one root.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Why .js and .tsx for the Root Component?

<hr class="dividerSection" />

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

<hr class="dividerSubsection1" />

### Important

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">.ts</span> files cannot contain JSX — only <span class="codeSnip">.tsx</span> files support it.</li>
    <li>JSX is core to React Native UI development, so components must be <span class="codeSnip">.tsx</span> in TypeScript projects.</li>
  </ul>
</div>

<hr class="dividerSection" />

## How TypeScript Works in React Native

<hr class="dividerSection" />

React Native integrates TypeScript seamlessly without the need for custom build steps.

<hr class="dividerSubsection1" />

### Key Behavior

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>TypeScript sources are transformed by <span class="emphasis">Babel</span> during bundling.</li>
    <li>The TypeScript compiler (<span class="codeSnip">tsc</span>) is used only for <span class="emphasis">type-checking</span>, not for code compilation.</li>
    <li>This keeps the development workflow fast and efficient.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Typical Project File Structure

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Folder / File</th>
      <th class="tableCellHeader">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">App.js</span> / <span class="codeSnip">App.tsx</span></td>
      <td class="tableCell">Root component of the app; entry point for the UI.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">index.js</span></td>
      <td class="tableCell">Entry point for native code to launch the app; usually unchanged even in TypeScript projects.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">android/</span></td>
      <td class="tableCell">Native Android project files (Gradle configuration, Java/Kotlin code).</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">ios/</span></td>
      <td class="tableCell">Native iOS project files (Xcode project, Objective-C/Swift code).</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">src/</span></td>
      <td class="tableCell">Folder where app code is typically organized (components, screens, utilities, assets).</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">App.js</span> or <span class="codeSnip">App.tsx</span> serves as the root of the app.</li>
    <li>JavaScript uses <span class="codeSnip">.js</span> files, but TypeScript with JSX requires <span class="codeSnip">.tsx</span>.</li>
    <li>Metro Bundler handles bundling and Babel transforms both JavaScript and TypeScript sources.</li>
    <li>The project structure is designed to keep app and native code logically separated and easy to manage.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/react-native/basics/fundamentals/setup">← Back</a>
    <div class="xrefTitle">Fundamentals - Setup</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/react-native/basics/core/components/basics">Next →</a>
    <div class="xrefTitle">Topic: Core Concepts - Components - Basics</div>
  </div>
</div>