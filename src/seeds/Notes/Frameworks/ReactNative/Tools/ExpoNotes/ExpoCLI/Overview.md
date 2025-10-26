### Introduction to Expo CLI

<span class="emphasis">Expo CLI</span> is a free, open-source toolchain built around React Native, offering a managed workflow for app development.

It simplifies many of the complex native configurations required in standard React Native projects.

✅ Key Highlights:
- Eliminates the need for Xcode or Android Studio for basic development.
- Provides a set of prebuilt APIs and UI components.
- Simplifies building, testing, and deploying React Native apps.

---

### Why Use Expo CLI?

Using <span class="emphasis">Expo CLI</span> streamlines the development process for mobile apps, especially for beginners or projects that don’t require heavy native customization.

✅ Advantages:
- Fast setup — no native build dependencies required initially.
- Access to device APIs via Expo SDK (camera, location, notifications).
- Live reloading and easy debugging via Expo Go app.
- Simplified publishing and sharing of builds.
- Easy over-the-air (OTA) updates without App Store resubmission.

---

### Installing Expo CLI

To get started with <span class="emphasis">Expo CLI</span>, install it globally using npm:

```shell
npm install -g expo-cli
```

✅ Make sure you have Node.js installed first, as Expo CLI is a Node-based tool.

---

### Creating a New Project

Once installed, you can create a new Expo project with:

```shell
expo init MyNewApp
```

✅ This will prompt you to select a template — you can start with a blank project or choose templates with prebuilt navigators or TypeScript support.

---

### Running Your Project

Navigate into your project directory:

```shell
cd MyNewApp
```

Then start the development server:

```shell
npm start
```

✅ This will launch the Metro Bundler and a QR code — scan it with the Expo Go app on your mobile device to run the project instantly.

---

### Expo Go: A Quick Companion

Expo Go is a companion app that allows you to load and preview your Expo projects directly on a physical device without a build process.

✅ Benefits:
- Instantly preview changes.
- Works on both Android and iOS.
- Great for rapid iteration and debugging.

---

✅ **Conclusion**

<span class="emphasis">Expo CLI</span> is a powerful and beginner-friendly tool for developing React Native apps.  
It accelerates development, removes native configuration hassles, and offers a smooth on-device testing workflow.

For most projects that don't require custom native modules, <span class="emphasis">Expo CLI</span> is a perfect fit.
