# iOS Simulator for React Native

---

## Introduction

The iOS Simulator (part of Xcode) lets you test RN apps on virtual iPhones/iPads without a physical device.

Note: The iOS Simulator is <span class="emphasis">macOS-only</span>.

---

## Open the Simulator

From macOS:

```bash 
open -a Simulator
```

Or via Xcode:
<span class="codeSnip">Xcode → Settings → Components</span> to install runtimes, then pick a device from the Xcode toolbar.

Manage runtimes/devices:
<a href="/xcode/basics/simulators/manage-runtimes">Xcode → Manage Runtimes &amp; Devices</a>.

---

## Run Your RN App (Expo)

```bash 
npm start
```

When Metro opens:
- Press <span class="codeSnip">i</span> to launch on the running iOS Simulator (ensure it’s open first)

---

## Run Your RN App (RN CLI)

```bash 
# Start Metro
npm start
```

```bash 
# In a second terminal
npx react-native run-ios
```

```bash 
# Or target a device explicitly
npx react-native run-ios --simulator "iPhone 15"
```

If a matching runtime isn’t installed, use Xcode to download it:
<a href="/xcode/basics/simulators/manage-runtimes">Manage Runtimes &amp; Devices</a>.

---

## Useful Simulator Controls

- <span class="codeSnip">Hardware → Keyboard → Toggle Software Keyboard</span>  
- <span class="codeSnip">Device → Rotate Left/Right</span>  
- <span class="codeSnip">Device → Erase All Content and Settings</span> (factory reset)  
- <span class="codeSnip">Window → Scale</span> to change display size

Resetting often fixes stubborn issues:
<span class="codeSnip">Device → Erase All Content and Settings</span>.

---

## Terminal Automation (simctl)

List devices:

```bash 
xcrun simctl list devices
```

Boot a device:

```bash 
xcrun simctl boot "iPhone 15"
```
Shut down all:

```bash 
xcrun simctl shutdown all
```

You can also use <span class="codeSnip">simctl</span> to take screenshots, record video, and more.

---

## Troubleshooting

- <span class="emphasis">Simulator not detected by Metro</span>  
  Ensure it’s open first; restart Simulator and Metro.  
- <span class="emphasis">Build fails with iOS deployment target mismatch</span>  
  Align your target in Xcode <span class="codeSnip">Build Settings</span> or update the runtime.  
- <span class="emphasis">Network requests fail</span>  
  Check macOS firewall/VPN; the simulator uses host networking.

For deeper tools coverage, see:
<a href="/xcode/basics/simulators/custom-and-reset">Xcode → Custom Simulators &amp; Resets</a> and
<a href="/xcode/advanced/diagnostics/device-logs-and-crashes">Xcode → Device Logs &amp; Crash Reports</a>.

---