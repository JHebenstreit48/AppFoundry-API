## Xcode: Installation & CLI Tools

---

### Introduction to Xcode

Xcode is Apple’s official integrated development environment (IDE) used for developing applications on iOS, iPadOS, macOS, watchOS, and tvOS.

✅ For React Native development on iOS, Xcode is necessary for:

- Building the iOS app.
- Running the app on a simulator.
- Accessing device logs.
- Managing provisioning profiles and certificates.

---

### Installing Xcode

1. Open the **App Store** on your Mac.
2. Search for **Xcode**.
3. Click **Get** and then **Install**.

Installation can take some time due to the size (~12 GB or more).

---

### Installing Xcode Command Line Tools

Even after installing Xcode, you must install its Command Line Tools (CLT) to compile and run iOS apps from the terminal.

- Open **Terminal**.
- Run the following command:

```shell
xcode-select --install
```

A dialog box will appear — confirm to download and install the tools.

---

### Verifying Xcode Installation

- Open **Terminal**.
- Run:

```shell
xcodebuild -version
```

This should display the installed version of Xcode and build tools.

---

### Licensing Xcode

The first time you use certain Xcode features or the iOS simulator, you may need to accept the license agreement:

```shell
sudo xcodebuild -license
```

- Read through the license.
- Type **agree** when prompted.

✅ This step ensures you can build and run apps without errors related to license agreements.

---

### Key Features for React Native Developers

- **iOS Simulators**: Test apps without needing a physical device.
- **Provisioning Profiles**: Handle app signing for physical device deployment.
- **Device Logs**: View real-time logs during app testing.
- **Interface Builder**: (Optional) UI design and testing tool.

---

✅ With Xcode and its CLI tools installed, you're fully prepared to build and test React Native apps on iOS!
