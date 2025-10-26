## Running React Native Apps with CLI

---

### Introduction to Running Apps

Once you’ve set up your project with <span class="emphasis">React Native CLI</span>, the next step is to run your app on a device or emulator.

✅ **Requirements:**
- <span class="emphasis">Android Studio</span> installed and configured for Android builds.
- <span class="emphasis">Xcode</span> installed for iOS builds (Mac only).
- Simulators or physical devices connected and configured.
- Metro Bundler running to serve your JavaScript bundle.

---

### Starting the Metro Bundler

The **Metro Bundler** is the JavaScript bundler used by React Native.

- Start Metro:

```shell
npx react-native start
```

This command starts the development server and watches your source files for changes.

---

### Running the App on Android

Ensure that your Android emulator is running, or your Android device is connected.

- Run on Android:

```shell
npx react-native run-android
```

React Native CLI will build and install the app on the Android emulator or connected device.

---

### Running the App on iOS

⚠️ **Note:** Running on iOS requires macOS with Xcode installed.

- Run on iOS:

```shell
npx react-native run-ios
```

✅ This command opens the iOS simulator and installs the app.

---

### Verifying Device Connection

If you have a physical device connected:

- List available devices (Android):

```shell
adb devices
```

✅ Ensure your device appears in the list. If not, verify USB debugging is enabled on your Android device.

- List available devices (iOS):

```shell
xcrun xctrace list devices
```

✅ For iOS devices and simulators, this lists all available devices recognized by Xcode.

---

### Typical Development Workflow

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Step</th>
      <th class="tableCellHeader">Command</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Start Metro Bundler</td>
      <td class="tableCell"><span class="codeSnip">npx react-native start</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Run on Android</td>
      <td class="tableCell"><span class="codeSnip">npx react-native run-android</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Run on iOS</td>
      <td class="tableCell"><span class="codeSnip">npx react-native run-ios</span></td>
    </tr>
  </tbody>
</table>

---

✅ **Conclusion**

Starting your app with <span class="emphasis">React Native CLI</span> is straightforward once your environment is properly set up.

Use Metro to bundle your code, and target Android or iOS devices as needed for development and testing.
