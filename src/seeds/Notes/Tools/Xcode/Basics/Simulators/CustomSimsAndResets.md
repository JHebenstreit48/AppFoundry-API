# Custom Simulators & Resets

## Create a Custom Simulator
1) Open the Simulator app  
2) File → New Simulator  
3) Select Device Type, iOS version, and a name  
Use this to target specific sizes or versions not provided by default.

## Reset a Simulator
To factory reset a simulator:
<span class="codeSnip">Device → Erase All Content and Settings</span>

This resolves many stubborn state issues.

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

## Troubleshooting
- If a device won’t boot, erase content and settings
- If runtime mismatch errors occur, install a compatible iOS runtime from
<span class="codeSnip">Xcode → Settings → Components</span>.

<div class="xrefBox">
  <span class="emphasis">Previous:</span>
<a href="/xcode/basics/simulators/manage-runtimes">Manage Runtimes &amp; Devices</a>.
</div>

## Next Topic:

Xcode → Advanced → Signing and Distribution:

<a href="/xcode/advanced/signing-and-distribute/certs-and-provisioning">Certificates &amp; Provisioning Profiles</a>

