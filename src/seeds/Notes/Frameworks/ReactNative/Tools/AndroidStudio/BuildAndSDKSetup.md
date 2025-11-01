
# Preparing Android Studio for React Native

Android Studio is the official IDE for Android. For React Native it provides two essentials:
• The Android SDK used by the React Native CLI and Metro
• The AVD (Virtual Device) Manager for running virtual Android devices

## Quick RN Checklist
1) Install Android Studio and the Android SDK.
2) In SDK Manager, ensure Android SDK Platform, Android SDK Build-Tools, and Android Emulator are installed.
3) Create at least one virtual device in Virtual Device Manager (AVD Manager).
4) Set environment variables so CLI tools work:
   • ANDROID_HOME pointing to your SDK root
   • Add platform-tools and emulator directories to PATH
5) Verify tools are available:

```shell
adb --version
emulator -version
sdkmanager --list
```

6) Run a device and start your app:
   • Start an AVD, then in your project:
     – For Expo:
      - <span class="codeSnip">run npm start</span>,
      - press <span class="codeSnip">a</span> in the <span class="emphasis">Metro terminal</span>
     – For RN CLI:
      - <span class="codeSnip">run npx react-native run-android</span>

For a full guide on installing Android Studio and setting up SDKs, see:
<a href="/android-studio/basics/fundamentals/installation-sdk">Android Studio → Installation &amp; SDK Manager</a>.

For emulator setup details, see:
<a href="/android-studio/basics/emulators/avd-manager">Android Studio → AVD Manager</a>.