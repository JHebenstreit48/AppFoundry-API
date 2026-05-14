# How React Native Works

<hr class="dividerSection" />

## React vs React DOM vs React Native

<hr class="dividerSection" />

React is a JavaScript library used to build user interfaces. It focuses on UI logic and state management but does not depend on the platform it runs on — the core of React is platform-agnostic.

To render React components in a real-world environment, you need a platform-specific renderer. For the web that renderer is <span class="codeSnip">React DOM</span>. For mobile the equivalent is <span class="codeSnip">React Native</span>.

<hr class="dividerSubsection1" />

### Method and Purpose

<hr class="dividerSubsection1" />

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

<hr class="dividerSubsection1" />

### Method and Platform

<hr class="dividerSubsection1" />

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

<hr class="dividerSubsection1" />

### Method and Rendering Target

<hr class="dividerSubsection1" />

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

<hr class="dividerSubsection1" />

### Method and Threading Model

<hr class="dividerSubsection1" />

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

<hr class="dividerSection" />

## Platform-Agnostic Core

<hr class="dividerSection" />

React's core provides tools for:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Managing state</li>
    <li>Building and nesting component trees</li>
    <li>Handling UI logic</li>
  </ul>
</div>

It does not render to a screen directly. That responsibility is delegated to renderers like <span class="codeSnip">React DOM</span> and <span class="codeSnip">React Native</span>.

<hr class="dividerSection" />

## What Is React Native?

<hr class="dividerSection" />

React Native is an alternative rendering system that allows React code to control native mobile interfaces. It uses a set of special built-in components like <span class="codeSnip">&lt;View&gt;</span> and <span class="codeSnip">&lt;Text&gt;</span> that map to native views on iOS and Android.

These components are not HTML. They compile to native equivalents, giving the app a native look and feel while keeping logic written in JavaScript.

<hr class="dividerSection" />

## Why Not Just Use React DOM?

<hr class="dividerSection" />

React DOM is limited to web browsers. It renders HTML elements using the DOM API and CSS for styling. It cannot access device-level features like the camera, accelerometer, or file system directly.

React Native solves this by providing native APIs to JavaScript, allowing for direct interaction with the device.

<hr class="dividerSection" />

## JavaScript Thread and Native Bridge

<hr class="dividerSection" />

The JavaScript logic itself is not compiled into native code. Instead, it runs in a lightweight thread hosted within the native app environment.

A simple JavaScript process is spun up as part of the native app:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Manages the React components</li>
    <li>Communicates via a bridge to the native platform</li>
    <li>Allows seamless interaction between JavaScript and native APIs</li>
  </ul>
</div>

This bridge enables a hybrid communication model where the JavaScript thread can send and receive commands to native components asynchronously.

<hr class="dividerSection" />

## Built-In Components in React Native

<hr class="dividerSection" />

React Native provides several core components designed for building user interfaces:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">&lt;View&gt;</span> — acts like a generic container.</li>
    <li><span class="codeSnip">&lt;Text&gt;</span> — used to display text.</li>
    <li><span class="codeSnip">StyleSheet</span> — utility for defining component styles.</li>
  </ul>
</div>

These components are compiled into their native equivalents on iOS and Android. <span class="codeSnip">&lt;View&gt;</span> and <span class="codeSnip">&lt;Text&gt;</span> are among the most essential and most used components in any React Native project.

<hr class="dividerSection" />

## Additional Benefits of React Native

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Near-Native Performance</span>: React Native apps use actual native components, allowing for performance close to fully native apps.</li>
    <li><span class="emphasis">Fast Development Cycles</span>: Features like Hot Reloading enable developers to instantly preview code changes without rebuilding the entire app.</li>
    <li><span class="emphasis">Strong Ecosystem and Community</span>: A large community and extensive library ecosystem support rapid development with pre-built solutions and plugins.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/jetpack-compose/advanced/build-and-config/permissions-and-manifests">← Back</a>
    <div class="xrefTitle">Topic: Jetpack Compose - Advanced - Build & Config - Permissions & Manifests</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/react-native/basics/fundamentals/setup">Next →</a>
    <div class="xrefTitle">Fundamentals - Setup</div>
  </div>
</div>