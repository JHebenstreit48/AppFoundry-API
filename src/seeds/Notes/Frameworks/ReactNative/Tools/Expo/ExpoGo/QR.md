## QR Codes and Device Testing with Expo Go

---

### Introduction

When developing React Native apps with Expo, using QR codes is a fast and convenient way to load your project
onto a real device. It allows you to test your app without setting up emulators or simulators.

**Key Highlights:**

- Instant loading of your app on physical Android and iOS devices.
- Efficient for rapid testing and iteration.
- Ideal when developing on Windows or without access to a Mac.

---

### Why Use QR Codes for Testing?

**Benefits of Using QR Codes and Expo Go:**

- **No Emulator/Simulator Needed:** Quickly test apps on real hardware.
- **Real Hardware Testing:** Experience your app the way users will, including performance and native
  behaviors.
- **Cross-Platform:** Works on both Android and iOS devices with minimal setup.

Using a real device can expose platform-specific issues earlier in the development process, leading to better
overall app quality.

---

### Quick Comparison

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Option</th>
      <th class="tableCellHeader">Requirement</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Android Emulator</td>
      <td class="tableCell">Android Studio installed with AVD configured</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">iOS Simulator</td>
      <td class="tableCell">Mac with Xcode installed</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Expo Go (Physical Device)</td>
      <td class="tableCell">Expo Go app installed on device</td>
    </tr>
  </tbody>
</table>

---

### Troubleshooting QR Code Scanning

Even though QR code testing is easy, some issues might occur. Here are common problems and their solutions:

---

#### QR Code Not Scanning

- Ensure your computer and mobile device are connected to the **same Wi-Fi network**.
- Adjust your device’s camera settings to ensure it can focus properly on the QR code.
- Refresh the Metro Bundler to generate a new QR code:

```shell
    r
```

Pressing <span class="emphasis">r</span> in the Metro Bundler terminal will refresh the QR code and restart
the development server.

---

#### App Not Loading After Scan

- Restart the <span class="emphasis">Expo Go</span> app and try scanning again.
- Restart the Metro Bundler server:

```shell
    npx expo start --clear
```

This will clear the cache and restart the bundler, solving many hidden issues.

- Ensure that there are no firewalls or VPNs blocking local network traffic.

---

#### Device Connection Issues

If the device still fails to connect:

- Verify that the IP address in the Metro Bundler URL matches your computer’s local network IP.
- Check if you need to configure your firewall to allow local network traffic for development.

---

### Legacy Commands (Deprecated but Functional)

```shell
    npm start --clear
```

Older projects created with <span class="codeSnip">expo-cli</span> can still use these, but new projects
should rely on the <span class="codeSnip">npx expo</span> workflow.

---

**Conclusion**

Using QR codes with <span class="emphasis">Expo Go</span> provides a fast, efficient, and reliable method to
test React Native apps on real devices. With minimal setup, you can avoid the overhead of emulators and
simulators while developing on any operating system.