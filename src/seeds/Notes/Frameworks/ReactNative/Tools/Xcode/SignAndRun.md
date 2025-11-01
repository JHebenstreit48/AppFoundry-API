# Signing & Run (RN)

---

## Overview

For iOS React Native apps, Xcode is required to:
- Build and run on <span class="emphasis">Simulator</span> or a <span class="emphasis">real device</span>
- Handle <span class="emphasis">code signing</span> for device builds
- View <span class="emphasis">device logs</span> and diagnose crashes

Note: Xcode and the iOS Simulator are <span class="emphasis">macOS-only</span>. There is no Windows equivalent. On Windows, use <span class="emphasis">Expo Go</span> on a real iPhone for iOS testing.

---

## Quick Start: Run on iOS Simulator (RN CLI)

From your RN project directory:

```bash 
# Ensure pods are installed for iOS (run once or when deps change)
cd ios && pod install && cd ..
```

```bash 
# Launch Metro in one terminal
npm start
```

```bash 
# In another terminal, build & run the iOS app on the default simulator
npx react-native run-ios
```

Need a specific simulator?

```bash 
npx react-native run-ios --simulator "iPhone 15"
```

If the simulator isn’t installed or running, see:
<a href="/xcode/basics/simulators/manage-runtimes">Xcode → Manage Runtimes &amp; Devices</a>.

---

## Quick Start: Run with Expo

```bash 
npm start
```

When Metro opens:
- Press <span class="codeSnip">i</span> to launch on the iOS Simulator (make sure it’s running)
- Or open <span class="emphasis">Expo Go</span> on a real iPhone and scan the QR

For simulator setup help, see:
<a href="/react-native/tools/xcode/ios-simulators">iOS Simulator for RN</a>  

and  

<a href="/xcode/basics/simulators/manage-runtimes">Xcode → Manage Runtimes &amp; Devices</a>.

---

## Running on a Real Device (Debug)

1) Connect your iPhone via USB (or same-network Wi-Fi debugging)  
2) Open <span class="codeSnip">ios/*.xcworkspace</span> in Xcode  
3) In the toolbar, pick your device and press <span class="codeSnip">Run</span> ▶︎  
4) If prompted for signing:
   - Set a <span class="codeSnip">Development Team</span> under <span class="codeSnip">Signing &amp; Capabilities</span> (your Apple ID is fine for debug)
   - Xcode will create a debug provisioning profile automatically

More on signing concepts:
<a href="/xcode/advanced/signing-and-distribute/certs-and-provisioning">Xcode → Certificates &amp; Provisioning Profiles</a>.

---

## Release Builds (High-Level)

- Archive in Xcode (<span class="codeSnip">Product → Archive</span>) for TestFlight / App Store  
- Use your Distribution certificate and App Store or Ad Hoc provisioning profile  
- Configure Schemes & Build Settings (Release, symbols, etc.)

Deep dive:
<a href="/xcode/advanced/signing-and-distribute/schemes-and-build">Xcode → Schemes &amp; Build Settings</a>.

---

## Common RN iOS Run Issues

- <span class="emphasis">“No bundle URL”</span>: Ensure Metro is running (<span class="codeSnip">npm start</span>) and the app can reach it (same network)  
- <span class="emphasis">Code signing errors</span>: Pick a <span class="codeSnip">Development Team</span> for the target; clean build folder (<span class="codeSnip">Shift+Cmd+K</span>)  
- <span class="emphasis">Pods missing</span>: Run <span class="codeSnip">cd ios &amp;&amp; pod install</span> (requires CocoaPods)  
- <span class="emphasis">Wrong simulator</span>: Start a supported runtime (e.g., iOS 17) or switch device in Xcode

For device logs and crash diagnostics, see:
<a href="/xcode/advanced/diagnostics/device-logs-and-crashes">Xcode → Device Logs &amp; Crash Reports</a>.

---