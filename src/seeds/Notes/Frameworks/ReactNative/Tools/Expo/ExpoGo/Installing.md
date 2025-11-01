## Installing and Running with Expo Go

---

### Introduction

Expo Go provides a simple way to preview and test React Native apps on a real device without the need for
setting up emulators or simulators.

**Key Highlights:**

- Easy installation on Android and iOS devices.
- Instant access to your development build by scanning a QR code.
- No native builds or configuration required for initial testing.
- Ideal for beginners who want to start coding immediately without complex setup.

---

### Prerequisites

Before running your app with <span class="emphasis">Expo Go</span>, ensure the following:

- <span class="emphasis">Node.js</span> is installed on your system.
- <span class="emphasis">Expo CLI</span> is available via **npx** (no need for global installation):

```shell
    npx create-expo-app MyNewApp
```

- Your development machine and mobile device are connected to the same Wi-Fi network.

These steps ensure smooth communication between your development server and your device.

---

### Installing Expo Go

To begin, install the <span class="emphasis">Expo Go</span> app on your device:

- 📱 **iOS**: Available for download from the App Store.
- 📱 **Android**: Available for download from Google Play.

The app is lightweight and free to use, making it a perfect tool for mobile development on real devices.

---

### Running Your App with Expo Go

1. Open your project folder in a terminal.
2. Start the Expo development server:

```shell
    npx expo start
```

3. The Metro Bundler will launch and display a QR code in the terminal and in Expo DevTools.
4. Open the <span class="emphasis">Expo Go</span> app on your device.
5. Use the app’s QR code scanner to scan the code displayed by the Metro Bundler.

Your app will open instantly on your physical device, allowing real-time development and testing.

---

### Tips for a Smooth Experience

- Ensure that your device’s camera has permission to access the Expo Go app for QR scanning.
- If scanning the QR code does not work immediately, try refreshing the Metro Bundler.
- Make sure both your computer and device are on the same network for optimal performance.

---

### Legacy Commands (Deprecated but Functional)

```shell
    npm install -g expo-cli
    expo init MyNewApp
    npm start
```

⚠️ While these commands still work, new projects should use <span class="codeSnip">npx create-expo-app</span> for best compatibility and future support.

---

**Conclusion**

Installing and running your app with <span class="emphasis">Expo Go</span> is the fastest and easiest way to
begin developing with React Native. With minimal setup, you can see your project live on a real device within
minutes.

**Next Steps**: Once you are comfortable with basic installation and running, explore live reload and fast
refresh features to improve your development workflow.