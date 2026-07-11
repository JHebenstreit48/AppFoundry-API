# Introduction to React Native Components

<hr class="dividerSection" />

## Overview

<hr class="dividerSection" />

React Native provides a set of built-in components that are the building blocks for mobile app UIs.

These components abstract away the differences between Android and iOS platforms, allowing you to write one codebase that works across both.

Key highlights include:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Pre-built components save development time.</li>
    <li>Components behave consistently on Android and iOS.</li>
    <li>Native performance with JavaScript-level ease of use.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Core Components and Composition in React Native

<hr class="dividerSection" />

React Native is all about working with <span class="emphasis">Core Components</span> that are built into the framework.

Key concepts to understand:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Core Components are translated into <span class="emphasis">native UI elements</span> for Android and iOS by React Native.</li>
    <li>You build your app's UI by <span class="emphasis">combining Core Components</span> into <span class="secondEmphasis">custom components</span>.</li>
    <li>This process mirrors how React works in the <span class="emphasis">web environment</span> by combining elements.</li>
    <li>It is also similar to how <span class="emphasis">HTML</span> structures web UIs by combining tags.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Key Principle: Core Components Have a Defined Purpose

<hr class="dividerSection" />

In React Native, every core component is designed with a <span class="emphasis">clearly defined purpose</span>.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Core components are designed to handle specific parts of the UI — such as layout, text display, input handling, or user interaction.</li>
    <li>This strict design philosophy ensures a <span class="emphasis">clear separation of concerns</span> within your app.</li>
    <li>It encourages you to build apps that are more <span class="emphasis">organized</span>, <span class="emphasis">modular</span>, and <span class="emphasis">easy to maintain</span>.</li>
    <li>By using components for their intended roles, you can better predict behavior and structure your code effectively.</li>
  </ul>
</div>

This principle helps developers create apps that are easier to understand, scale, and debug — especially as the complexity of the UI grows.

<hr class="dividerSection" />

## How It Works

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Core Components</span> — Provided by React Native (e.g., View, Text, Button, TextInput, Image).</li>
    <li><span class="emphasis">Custom Components</span> — Created by combining Core Components and other built-in components to form more complex UI structures.</li>
  </ul>
</div>

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Core Components</th>
      <th class="tableCellHeader">Custom Components</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Built-in by React Native</td>
      <td class="tableCell">Created by combining Core Components</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Translated into native UI widgets</td>
      <td class="tableCell">Specific to your app's UI needs</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">View</span>, <span class="codeSnip">Text</span>, <span class="codeSnip">Button</span>, <span class="codeSnip">TextInput</span>, <span class="codeSnip">Image</span></td>
      <td class="tableCell"><span class="codeSnip">UserCard</span>, <span class="codeSnip">ProfileHeader</span>, <span class="codeSnip">MyTitle</span></td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

<div class="xrefNav">

  <div class="xrefItem">
    <a class="xrefBtn" href="/react-native/basics/fundamentals/structure">← Back</a>
    <div class="xrefTitle">Section: React Native → Fundamentals → Structure</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/react-native/basics/core/components/core">Next →</a>
    <div class="xrefTitle">React Native → Components → Core</div>
  </div>
  
</div>