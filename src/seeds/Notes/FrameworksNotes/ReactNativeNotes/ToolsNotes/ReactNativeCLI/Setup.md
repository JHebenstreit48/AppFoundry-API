## React Native CLI: Setup and Bare Workflow

---

### Introduction to the Bare Workflow

The <span class="emphasis">Bare Workflow</span> is the standard React Native setup where you have full access to the native Android and iOS project files.

✅ Key Highlights:
- Full control over native code.
- Better suited for complex apps requiring custom native modules.
- Direct integration with native iOS and Android features.

---

### Why Choose React Native CLI?

✅ **Custom Native Modules**
- Use platform-specific code (Java/Kotlin for Android, Swift/Objective-C for iOS).
- Access native SDKs and libraries not available in Expo.

✅ **Flexibility**
- Modify build configurations directly (Gradle, Xcode settings).

✅ **Advanced Features**
- Implement custom UI components.
- Fine-tune app performance at the native level.

---

### Requirements

✅ **Software Needed:**
- Node.js and npm installed.
- Android Studio (for Android development).
- Xcode (for iOS development, macOS only).
- Watchman (recommended for macOS users).

✅ **Environment Setup:**
- Install React Native CLI globally:

```shell
npm install -g react-native-cli
```

- Install dependencies for iOS:

```shell
sudo gem install cocoapods
```

---

### Typical Workflow for Bare Workflow

- Initialize a new project:

```shell
npx react-native init MyNewApp
```

- Navigate into your project:

```shell
cd MyNewApp
```

- Run the app on Android:

```shell
npx react-native run-android
```

- Run the app on iOS (macOS only):

```shell
npx react-native run-ios
```

✅ Ensure that Android Studio and Xcode are installed and properly configured before running these commands.

---

### Pros and Cons of Bare Workflow

✅ **Pros:**
- Complete native control.
- Ability to use any native SDK.
- Ideal for large-scale, production-ready apps.

⚠️ **Cons:**
- More complicated setup.
- Requires knowledge of native development.
- Slower development cycle compared to Managed Workflow.

---

✅ **Conclusion**

The <span class="emphasis">Bare Workflow</span> via <span class="emphasis">React Native CLI</span> is ideal when you need full control and access to native platform capabilities.

It's the professional choice for apps requiring advanced features and custom integrations.
