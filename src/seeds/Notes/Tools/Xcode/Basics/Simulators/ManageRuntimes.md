# Manage Runtimes & Devices

## Install iOS Runtimes
Install additional simulator runtimes here:
<span class="codeSnip">Xcode → Settings → Components</span>

Download the iOS versions you need for testing. Ensure your app’s iOS Deployment Target is compatible with the available runtime.

## Launch and Choose a Device
- Use the Xcode toolbar device selector to pick a simulator
- Or open the Simulator directly from macOS

```bash
open -a Simulator
```

## Common Simulators Available
- iPhone 15, 15 Pro, 14, 14 Pro
- iPhone SE (2nd and 3rd Gen)
- iPad Pro (various sizes)
- iPad Air

More can be downloaded for older iOS versions.

## Tips
- Keep at least one runtime matching your project’s deployment target
- Remove unused runtimes to free disk space
- If a device won’t boot, try a different runtime or reset (see Custom & Resets)

## Next Steps
- Create custom simulators or reset stubborn devices:

<div class="xrefBox">
  <span class="emphasis">Previous:</span>
<a href="/xcode/basics/fundamentals/first-run-updates">First Run &amp; Updates</a>.
</div>

## Next Topic:

Xcode → Basics → Simulators

<a href="/xcode/basics/simulators/custom-and-reset">Custom Simulators &amp; Resets</a>.