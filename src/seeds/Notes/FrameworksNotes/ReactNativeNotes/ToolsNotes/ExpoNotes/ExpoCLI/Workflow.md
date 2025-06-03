## Expo CLI: Managed Workflow

---

### Introduction to the Managed Workflow

The <span class="emphasis">Managed Workflow</span> is Expo's simplified development model where much of the underlying configuration is abstracted away.

✅ Key Highlights:
- Focus on writing React Native code without worrying about native Android or iOS code.
- Expo manages all the native configuration, updates, and builds for you.
- Ideal for rapid development and prototyping.

---

### Benefits of the Managed Workflow

✅ **Speed and Simplicity**
- No need to configure Android Studio or Xcode manually.
- Immediate access to Expo’s APIs (camera, notifications, sensors, etc.).

✅ **Over-the-Air (OTA) Updates**
- Push code updates to your app without resubmitting to app stores.
- Fix bugs or release new features instantly.

✅ **Unified Development**
- Develop apps simultaneously for both iOS and Android using a single codebase.

✅ **Expo Go App**
- Preview your app instantly on a real device via QR code scanning.

---

### Typical Workflow in Managed Mode

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

- Scan the QR code using the <span class="emphasis">Expo Go</span> app on your iOS or Android device.

✅ You can immediately see your project running without compiling native code.

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
expo eject
```

✅ This will generate native Android and iOS folders, transitioning you to a standard React Native project.

---

✅ **Conclusion**

The <span class="emphasis">Managed Workflow</span> is perfect for quick iterations, MVPs, and apps that primarily use Expo-supported APIs.

It offers a very low barrier to entry while still giving you the option to eject if more advanced functionality is needed down the line.
