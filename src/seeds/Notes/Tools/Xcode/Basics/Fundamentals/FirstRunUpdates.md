# First Run & Updates

## First Launch
On first run, Xcode may prompt to install additional components. Allow these so builds and the simulator function correctly.

## Updates
- Update Xcode via the App Store
- Update additional components (SDKs, simulator runtimes) in Xcode

Where to find simulator runtimes:
<span class="codeSnip">Xcode → Settings → Components</span>

## Storage Considerations
- SDKs and runtimes consume significant space
- Remove unused runtimes periodically from
<span class="codeSnip">Settings → Components</span>

## Command Line Tools Switching
If you have multiple Xcode versions installed, select which provides the CLT:

```bash
sudo xcode-select -s /Applications/Xcode.app
```

Adjust the path if your Xcode lives elsewhere.

## Next Steps
- Manage simulator runtimes and devices:

<div class="xrefBox">
  <span class="emphasis">Previous:</span>
<a href="/xcode/basics/fundamentals/installation-and-clt">Installation &amp; Command Line Tools</a>.
</div>

## Next Topic:

Xcode → Basics → Simulators:

<a href="/xcode/basics/simulators/manage-runtimes">Manage Runtimes &amp; Devices</a>.