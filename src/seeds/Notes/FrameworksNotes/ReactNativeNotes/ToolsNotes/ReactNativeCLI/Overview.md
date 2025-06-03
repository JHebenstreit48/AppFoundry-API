## React Native CLI: Overview

---

### Introduction to React Native CLI

<span class="emphasis">React Native CLI</span> is the official command-line interface maintained by the React Native team and community.

It provides a more "bare-metal" approach to React Native app development compared to Expo CLI.

✅ Key Highlights:
- Full control over the native Android and iOS projects.
- Ability to integrate custom native modules.
- Preferred for large-scale production apps requiring customizations at the native level.

---

### Why Use React Native CLI?

While <span class="emphasis">Expo CLI</span> offers ease of use, it hides the native code. <span class="emphasis">React Native CLI</span> gives you complete freedom to work with native codebases when necessary.

✅ Advantages:

- No restrictions — full access to Android and iOS native code.
- Easier to link custom native libraries written in Java, Kotlin, Swift, or Objective-C.
- Preferred for apps with complex, performance-critical features.
- Native build tools available for advanced optimizations.

---

### Installing React Native CLI

First, install the CLI globally using npm:

```shell
npm install -g react-native-cli
```

✅ Alternatively, many projects use the `npx` tool to avoid global installation.

---

### Creating a New Project

Create a new project by running:

```shell
npx react-native init MyNewApp
```

✅ This generates a fully structured project, including the Android and iOS native directories.

---

### Project Structure

The folder structure you get includes:

- <span class="codeSnip">/android</span> — native Android project files (Java/Kotlin)
- <span class="codeSnip">/ios</span> — native iOS project files (Objective-C/Swift)
- <span class="codeSnip">/App.js</span> — the starting point for your React Native code
- <span class="codeSnip">/node_modules</span> — project dependencies
- <span class="codeSnip">package.json</span> — project metadata and scripts

---

### Running the App

Navigate into your project:

```shell
cd MyNewApp
```

Then run the app on Android:

```shell
npx react-native run-android
```

Or on iOS:

```shell
npx react-native run-ios
```
g
✅ You must have Android Studio (for Android) and Xcode (for iOS) installed and properly configured.

---

### Requirements

For Android:
- Android Studio
- Android SDK and Virtual Device Manager (AVD)

For iOS:
- macOS
- Xcode with Command Line Tools

---

✅ **Conclusion**

<span class="emphasis">React Native CLI</span> is the preferred tool for advanced app development, giving you complete control of the native layers.

While it has a steeper learning curve than <span class="emphasis">Expo CLI</span>, it is ideal for production apps that require maximum flexibility and performance.
