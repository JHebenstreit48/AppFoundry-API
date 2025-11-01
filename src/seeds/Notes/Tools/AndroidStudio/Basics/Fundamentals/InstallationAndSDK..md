# Installation & SDK Manager

## Overview
Android Studio is the official IDE for Android. The Android Emulator runs via the AVD (Virtual Device) Manager inside Android Studio. This page covers installing Android Studio, configuring SDK components, and verifying CLI tools.

## Prerequisites
• Windows 10/11 or macOS 12+  
• 10–20 GB free disk space for SDKs and system images  
• Administrator rights to install  

## Install Steps
1) Download Android Studio from the official site and run the installer.  
2) On first launch, choose **Standard** setup unless you need custom paths.  
3) Confirm installation of:  
   • Android SDK  
   • Android SDK Platform (latest stable)  
   • Android SDK Build-Tools  
   • Android Emulator  
   • Android Platform-Tools  

## SDK Manager Checklist
Open **Settings / Preferences → Appearance & Behavior → System Settings → Android SDK.**  
• **SDK Platforms:** install the latest stable Android version plus any others you target.  
• **SDK Tools:** ensure Android SDK Build-Tools, Android Emulator, and Android SDK Platform-Tools are checked.  

## Environment Variables (CLI)
### Windows
• <span class="codeSnip">ANDROID_HOME</span> → <span class="codeSnip">C:\Users\<you>\AppData\Local\Android\Sdk</span>  
• Add to <span class="codeSnip">PATH</span>:  
    <span class="codeSnip">%ANDROID_HOME%\platform-tools</span> 
    <span class="codeSnip">%ANDROID_HOME%\emulator</span>  
    <span class="codeSnip">%ANDROID_HOME%\tools\bin</span> (if you use <span class="codeSnip">sdkmanager</span> / <span class="codeSnip">avdmanager</span>)  

### macOS
Add to your shell profile:

```shell
export ANDROID_HOME="$HOME/Library/Android/sdk"
export PATH="$PATH:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator"
```

Adjust the path if you chose a custom SDK location.  

## Verify Installation

```shell
adb --version
emulator -version
sdkmanager --list
```

If these commands run, your SDK and CLI integration are healthy.  

## Common Pitfalls
• **Emulator performance:** enable hardware acceleration (HAXM / Hypervisor / Apple VT) and allocate adequate RAM to the AVD.  
• **Device not detected:** start the AVD before launching your app; check <span class="codeSnip">adb devices</span>.  
• **Gradle sync issues:** use Android Studio’s bundled JDK to avoid version mismatches.  
• **PATH problems:** reopen your terminal after editing environment variables.  

## Next Steps
• Create a virtual device: see <a href="/android-studio/basics/emulators/avd-manager">Android Studio → AVD Manager</a>.  
• React Native specifics: see <a href="/react-native/tools/android-studio/build-and-sdk-setup">Preparing Android Studio for React Native</a>.  

## Legacy Notes
Older documentation sometimes states: “Android Studio provides a built-in Android device emulator.”  
This remains functionally correct but is now phrased more precisely: Android Studio is the IDE, and the Android Emulator runs via the <span class="emphasis">AVD (Virtual Device) Manager</span> inside Android Studio. Keep this for historical context while using the updated wording elsewhere.