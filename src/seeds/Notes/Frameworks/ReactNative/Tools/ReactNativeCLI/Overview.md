## React Native CLI: Overview

---

### Introduction to React Native CLI

<span class="emphasis">React Native CLI</span> is the official command-line interface maintained by the React Native team and community.

It provides a more "bare-metal" approach to React Native app development compared to Expo CLI.

Key Highlights:
- Full control over the native Android and iOS projects.
- Ability to integrate custom native modules.
- Preferred for large-scale production apps requiring customizations at the native level.

---

### Why Use React Native CLI?

While <span class="emphasis">Expo CLI</span> offers ease of use, it hides the native code. <span class="emphasis">React Native CLI</span> gives you complete freedom to work with native codebases when necessary.

Advantages:

- No restrictions — full access to Android and iOS native code.
- Easier to link custom native libraries written in Java, Kotlin, Swift, or Objective-C.
- Preferred for apps with complex, performance-critical features.
- Native build tools available for advanced optimizations.

---

For setup instructions, see  
<a href="/react-native/tools/rn-cli/setup">React Native CLI — Setup</a>  

### Project Structure

The folder structure you get includes:

- <span class="codeSnip">/android</span> — native Android project files (Java/Kotlin)
- <span class="codeSnip">/ios</span> — native iOS project files (Objective-C/Swift)
- <span class="codeSnip">/App.js</span> — the starting point for your React Native code
- <span class="codeSnip">/node_modules</span> — project dependencies
- <span class="codeSnip">package.json</span> — project metadata and scripts

For detailed workflow and commands, see  
<a href="/react-native/tools/rn-cli/running">Running Apps with React Native CLI</a>  

---

### Requirements

For Android:
- Android Studio
- Android SDK and Virtual Device Manager (AVD)

For iOS:
- macOS
- Xcode with Command Line Tools

These native build tools are required for compiling and running React Native apps outside of Expo.

---

### Relationship to Other Tools

- **Metro Bundler:** The JavaScript bundler automatically launched when running React Native CLI.  
- **Android Studio:** Used to manage SDKs, emulators, and Android builds.  
- **Xcode:** Required for iOS builds on macOS.  

Each of these tools has its own dedicated section in the Tools category for configuration and troubleshooting.

---

✅ **Conclusion**

<span class="emphasis">React Native CLI</span> is the preferred tool for advanced app development, giving you complete control of the native layers.

While it has a steeper learning curve than <span class="emphasis">Expo CLI</span>, it is ideal for production apps that require maximum flexibility and performance.

<div class="xrefBox">
  <span class="emphasis">Next:</span>
  <a href="/react-native/tools/rncli/setup">Setup and Bare Workflow</a>
</div>