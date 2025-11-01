## Introduction to the Managed Workflow

The <span class="emphasis">Managed Workflow</span> is Expo's simplified development model where much of the
underlying configuration is abstracted away.

Key Highlights:

- Focus on writing React Native code without worrying about native Android or iOS code.
- Expo manages all the native configuration, updates, and builds for you.
- Ideal for rapid development and prototyping.

---

### Benefits of the Managed Workflow

**Speed and Simplicity**

- No need to configure Android Studio or Xcode manually.
- Immediate access to Expo’s APIs (camera, notifications, sensors, etc.).

**Over-the-Air (OTA) Updates**

- Push code updates to your app without resubmitting to app stores.
- Fix bugs or release new features instantly.

**Unified Development**

- Develop apps simultaneously for both iOS and Android using a single codebase.

**Expo Go App**

- Preview your app instantly on a real device via QR code scanning.

---

### Typical Workflow in Managed Mode

- Create a new Expo project:

```shell
    npx create-expo-app MyNewApp
```

- Navigate into your project:

```shell
    cd MyNewApp
```

- Start the development server:

```shell
    npx expo start
```

- Scan the QR code using the <span class="emphasis">Expo Go</span> app on your iOS or Android device.

You can immediately see your project running without compiling native code.

---

### Running Your App on Simulators or Physical Devices

Once you have started the Expo development server, you have several ways to view and test your app depending
on your setup.

**Available Options:**

- <span class="emphasis">Android Emulator</span> (AVD) — for testing on virtual Android devices.
- <span class="emphasis">iOS Simulator</span> — for testing on virtual iOS devices (Mac only).
- <span class="emphasis">Expo Go App</span> — for testing on real Android and iOS devices using a QR code.

---

### Launching the App After Starting the Metro Bundler

After running <span class="codeSnip">npx expo start</span> in your project folder, the Metro Bundler will
open. You can use keyboard shortcuts to launch your app:

**Keyboard Shortcuts:**

- Press <span class="emphasis">a</span> to open the app on an Android emulator.
- Press <span class="emphasis">i</span> to open the app on an iOS simulator (Mac only).
- Press <span class="emphasis">w</span> to open the app in a web browser.

⚠️ **Note**: The <span class="emphasis">iOS Simulator</span> option requires a Mac with
<span class="emphasis">Xcode</span> installed. This option is not available on Windows machines.

---

### Using Expo Go on Physical Devices

If you prefer testing on a real device:

1. Install the <span class="emphasis">Expo Go</span> app:

   - 📱 **iOS**: Available on the App Store.
   - 📱 **Android**: Available on Google Play.

2. Start the Metro Bundler:

```shell
    npx expo start
```

3. A QR code will appear in your terminal or Expo DevTools.

4. Open the <span class="emphasis">Expo Go</span> app on your device and use it to scan the QR code.

Your app will open instantly on your physical device.

---

### Quick Summary

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Action</th>
      <th class="tableCellHeader">Shortcut or Tool</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Run on Android Emulator</td>
      <td class="tableCell"><span class="emphasis">Press</span> <span class="emphasis">a</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Run on iOS Simulator (Mac only)</td>
      <td class="tableCell"><span class="emphasis">Press</span> <span class="emphasis">i</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Run in Web Browser</td>
      <td class="tableCell"><span class="emphasis">Press</span> <span class="emphasis">w</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Run on Physical Device</td>
      <td class="tableCell">Use <span class="emphasis">Expo Go</span> and scan QR Code</td>
    </tr>
  </tbody>
</table>

---

Depending on your operating system and development environment, Expo CLI gives you flexible options to run
your app — on emulators, simulators, or real devices — with minimal configuration.

---

### Limitations of the Managed Workflow

⚠️ **Access to Custom Native Code**

- If you need custom native modules that Expo doesn’t provide, you’ll have to eject.

⚠️ **App Size**

- Managed apps tend to have larger initial binary sizes compared to bare React Native projects.

⚠️ **Advanced Native Features**

- Some low-level platform customizations are not possible without ejecting.

---

### Ejecting to Bare Workflow

If you outgrow the Managed Workflow, Expo provides an ejecting option:

```shell
    npx expo prebuild
```

This will generate native Android and iOS folders, transitioning you to a standard React Native project.

---

### Legacy Commands (Deprecated but Functional)

These commands are still recognized but no longer recommended for new projects:

```shell
    npm install -g expo-cli
    expo init MyNewApp
    npm start
```

---

**Conclusion**

The <span class="emphasis">Managed Workflow</span> is perfect for quick iterations, MVPs, and apps that
primarily use Expo-supported APIs.

It offers a very low barrier to entry while still giving you the option to eject if more advanced
functionality is needed down the line.