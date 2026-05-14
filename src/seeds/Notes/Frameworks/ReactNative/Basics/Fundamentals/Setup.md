# Project Setup Methods

<hr class="dividerSection" />

## Setup Options

<hr class="dividerSection" />

There are two main ways to start a React Native project:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Expo</span> — a <span class="secondEmphasis">managed workflow</span> for <span class="secondEmphasis">rapid</span> development.</li>
    <li><span class="emphasis">React Native CLI</span> — a bare-bones approach offering full native control.</li>
  </ul>
</div>

Each setup method fits different project needs and complexity levels.

<hr class="dividerSection" />

## Expo Quickstart

<hr class="dividerSection" />

<span class="emphasis">Expo</span> is a free, open-source toolchain that simplifies React Native development by providing a managed environment.

<hr class="dividerSubsection1" />

### Key Benefits

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>No need to install Android Studio or Xcode for basic development.</li>
    <li>Built-in tools for testing, debugging, and live reloading.</li>
    <li>Ideal for prototyping, small-to-medium apps, and rapid iteration.</li>
  </ul>
</div>

This launches the Metro Bundler and opens Expo DevTools with a QR code you can scan using <span class="emphasis">Expo Go</span> to run the app on a physical device or emulator.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/react-native/tools/expo/cli/workflow">
    React Native → Tools → Expo → CLI Workflow
  </a>
</div>

<hr class="dividerSection" />

## React Native CLI Quickstart

<hr class="dividerSection" />

<span class="emphasis">React Native CLI</span> is the official toolchain for apps requiring access to custom native code.

<hr class="dividerSubsection1" />

### Key Benefits

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Full control over Android and iOS native layers.</li>
    <li>Easier integration with Java, Kotlin, Objective-C, or Swift modules.</li>
    <li>Ideal for production-grade apps needing platform-specific optimization.</li>
  </ul>
</div>

Requires Android Studio (for Android) and Xcode (for iOS) installed and configured.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/tools/react-native-cli/setup">
    React Native → Tools → React Native CLI → Setup
  </a>
</div>

<hr class="dividerSection" />

## Language and Entry Files

<hr class="dividerSection" />

When you create a new React Native project:

<hr class="dividerSubsection1" />

### Defaults

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Supports both <span class="emphasis">JavaScript</span> and <span class="emphasis">TypeScript</span> — choose a TS template or add a <span class="codeSnip">tsconfig.json</span>.</li>
    <li>TypeScript files that contain JSX must use the <span class="codeSnip">.tsx</span> extension.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Root File

<hr class="dividerSubsection1" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Language</th>
      <th class="tableCellHeader">Root File</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">JavaScript</td>
      <td class="tableCell"><span class="codeSnip">App.js</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">TypeScript</td>
      <td class="tableCell"><span class="codeSnip">App.tsx</span></td>
    </tr>
  </tbody>
</table>

<hr class="dividerSubsection1" />

### Notes

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">index.js</span> usually remains unchanged.</li>
    <li>The <span class="codeSnip">&lt;App /&gt;</span> component is your primary entry point.</li>
  </ul>
</div>

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/react-native/basics/fundamentals/structure">
    React Native → Basics → Fundamentals → Structure
  </a>
</div>

<hr class="dividerSection" />

## Choosing Between Expo and React Native CLI

<hr class="dividerSection" />

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

<hr class="dividerSection" />

## Pros and Cons Overview

<hr class="dividerSection" />

<hr class="dividerSubsection1" />

### Expo

<hr class="dividerSubsection1" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Pros</th>
      <th class="tableCellHeader">Cons</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Fast and frictionless setup</td>
      <td class="tableCell">Limited access to native modules unless ejected</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">No native build tools required initially</td>
      <td class="tableCell">Slightly larger app binaries</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Live reload and testing via Expo Go</td>
      <td class="tableCell">Some advanced features require the bare workflow</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSubsection1" />

### React Native CLI

<hr class="dividerSubsection1" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Pros</th>
      <th class="tableCellHeader">Cons</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Full access to native APIs and libraries</td>
      <td class="tableCell">Requires Android Studio and Xcode</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Ideal for complex and performance-intensive apps</td>
      <td class="tableCell">Higher setup complexity</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">No limitations on third-party native modules</td>
      <td class="tableCell">Steeper learning curve</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

For beginners or fast iteration, start with <span class="emphasis">Expo</span>. For advanced features and full native control, use <span class="emphasis">React Native CLI</span>. Choosing the right setup depends on your project's scope, timeline, and technical needs.

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/react-native/basics/fundamentals/introduction">← Back</a>
    <div class="xrefTitle">Fundamentals - Introduction</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/react-native/basics/fundamentals/structure">Next →</a>
    <div class="xrefTitle">Fundamentals - Structure</div>
  </div>
</div>