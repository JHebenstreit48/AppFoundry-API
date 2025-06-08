## Introduction to React Native Components

React Native provides a set of built-in components that are the building blocks for mobile app UIs.
These components abstract away the differences between Android and iOS platforms, allowing you to write one codebase that works across both.

**Key Highlights**:

- Pre-built components save development time.
- Components behave consistently on Android and iOS.
- Native performance with JavaScript-level ease of use.

---

### Core Components and Composition in React Native

React Native is all about working with **Core Components** that are built into the framework.

**Key Concepts**:

- Core Components are translated into **native UI elements** for Android and iOS by React Native.
- You build your app's UI by **combining Core Components** into **custom components**.
- This process mirrors how React works in the **web environment** by combining elements.
- It is also similar to how **HTML** structures web UIs by combining tags.

---

### Key Principle: Core Components Have a Defined Purpose

In React Native, every core component is designed with a **clearly defined purpose**.

- Core components are designed to handle specific parts of the UI — such as layout, text display, input handling, or user interaction.
- This strict design philosophy ensures a **clear separation of concerns** within your app.
- It encourages you to build apps that are more **organized**, **modular**, and **easy to maintain**.
- By using components for their intended roles, you can better predict behavior and structure your code effectively.

This principle helps developers create apps that are easier to understand, scale, and debug — especially as the complexity of the UI grows.

---

### How it Works

- **Core Components**: Provided by React Native (e.g., View, Text, Button, TextInput, Image).
- **Custom Components**: Created by combining Core Components and other built-in components to form more
  complex UI structures.

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
      <td class="tableCell">View, Text, Button, TextInput, Image</td>
      <td class="tableCell">UserCard, ProfileHeader, MyTitle</td>
    </tr>
  </tbody>
</table>