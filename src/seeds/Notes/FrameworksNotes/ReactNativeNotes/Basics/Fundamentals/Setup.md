<br>

---

## Project Setup Methods

---

There are two main ways to start a React Native project:

- <span class="emphasis">Expo CLI</span> — a <span class="secondEmphasis">managed workflow</span> for <span class="secondEmphasis">rapid</span> development.
- <span class="emphasis">React Native CLI</span> — a bare-bones approach for more control.

Each setup method offers different benefits depending on the project needs and complexity.

---

### Expo CLI Quickstart

<span class="emphasis">Expo CLI</span> is a free third-party service that simplifies React Native development by providing a managed environment.

Key Benefits:

- No need to install Android Studio or Xcode for basic development.
- Comes with built-in tools for testing and debugging.
- Easier to get started — ideal for prototyping and small to medium apps.

Typical Workflow:

- Install Expo CLI globally:  

```shell
npm install -g expo-cli
```

- Create a new project:

```shell
expo init MyNewApp
```

- Start the development server:

```shell
cd MyNewApp
npm start
```

This will launch the Metro Bundler and you can use **Expo Go** to run the app on a physical device or emulator.

---

### React Native CLI Quickstart

<span class="emphasis">React Native CLI</span> is the official toolchain recommended for apps that require custom native code.

Key Benefits:

- Full control over the native code (iOS and Android).
- Easier integration with native modules written in Java, Kotlin, Objective-C, or Swift.
- Ideal for larger, production-grade apps needing advanced functionality.

Typical Workflow:

- Install React Native CLI globally:

```shell
npm install -g react-native-cli
```

- Create a new project:  

```shell
npx react-native init MyNewApp
```

- Navigate into the project folder:

```shell
cd MyNewApp
```

- Run the app:

```shell
npx react-native run-android
npx react-native run-ios
```

This process requires Android Studio (for Android) and Xcode (for iOS) to be installed and configured.

---

### Default Language and File Setup

When you create a new React Native project:

**Defaults**:
- React Native defaults to **TypeScript** for new projects created with the CLI or Expo CLI.
- JavaScript is still supported if you prefer.

**Root File**:
- JavaScript projects: <span class="codeSnip">App.js</span>.
- TypeScript projects: <span class="codeSnip">App.tsx</span>.

**Note**:
- The entry file <span class="codeSnip">index.js</span> typically remains unchanged even in TypeScript projects.
- TypeScript projects require the <span class="codeSnip">.tsx</span> extension for files containing JSX.

*For a deeper explanation of file structure and project architecture, see the [Project Structure](#) section.*

---

### Choosing Between Expo CLI and React Native CLI

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Setup Method</th>
      <th class="tableCellHeader">Best For</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">Expo CLI</span></td>
      <td class="tableCell">Rapid prototyping, beginners, apps without custom native code</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">React Native CLI</span></td>
      <td class="tableCell">Full control, custom native modules, complex production apps</td>
    </tr>
  </tbody>
</table>

---

### Expo CLI Pros and Cons

**Pros:**

- Quick setup and development.
- No native build tools required initially.
- Easy testing with Expo Go app.

**Cons:**

- Limited access to native modules unless you eject.
- Larger app sizes.
- Some advanced features might require ejecting to bare workflow.

---

### React Native CLI Pros and Cons

**Pros:**

- Full access to native APIs and libraries.
- Better suited for larger, complex apps.
- No limitations on custom native modules.

**Cons:**

- Requires Android Studio and Xcode.
- More complicated setup.
- Higher learning curve for beginners.

---

**Conclusion**

For simple apps or quick development cycles, <span class="emphasis">Expo CLI</span> is a great starting point.  
For full native access and advanced features, <span class="emphasis">React Native CLI</span> is the better choice.

Choosing the right setup depends on your project's needs, timeline, and complexity.
