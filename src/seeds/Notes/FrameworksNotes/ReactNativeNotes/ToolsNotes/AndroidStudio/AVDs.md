## Creating Virtual Devices (AVDs) in Android Studio

---

### Introduction to Android Emulators

Android Studio provides a built-in tool to create virtual devices — known as Android Virtual Devices (AVDs) — which are useful for testing apps without needing a physical device.

✅ Virtual devices allow developers to emulate different screen sizes, Android versions, and hardware profiles.

---

### Accessing AVD Manager

Once Android Studio is installed and configured:

- Open Android Studio.
- Navigate to the **More Actions** dropdown on the welcome screen.
- Select **Virtual Device Manager**.

✅ From here, you can create, manage, and run virtual devices.

---

### Creating a New Virtual Device

1. Click on **Create Virtual Device**.
2. Choose a device profile (e.g., Pixel 6, Nexus 5X) depending on the screen size and resolution you want to simulate.
3. Click **Next**.

---

### Selecting a System Image

- Pick an Android version (e.g., Android 13, Android 14) based on your testing needs.
- Download the system image if it’s not already installed.
- Click **Next**.

---

### Configuring the Virtual Device

- Keep the default settings unless specific configuration changes are needed (like orientation, memory, or storage).
- Name your virtual device.
- Click **Finish** to create the device.

✅ The AVD will now appear in your **Virtual Device Manager** list.

---

### Running the Virtual Device

- In **Virtual Device Manager**, locate your new device.
- Click the **Play** ▶️ button to launch the emulator.

✅ The emulator acts like a real Android device, enabling you to test your React Native apps without connecting physical hardware.

---

### Tips for Using AVDs

- **Performance**: Enable hardware acceleration (Intel HAXM or Hypervisor Framework) for better performance.
- **Snapshots**: Use quick boot snapshots for faster emulator startup.
- **Multiple Devices**: You can run multiple virtual devices simultaneously to test various form factors and Android versions.

---
