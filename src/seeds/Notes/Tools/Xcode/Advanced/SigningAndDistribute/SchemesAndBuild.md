# Schemes & Build Settings

## Schemes
Schemes determine how your app is built and run (Debug vs Release). Edit via
<span class="codeSnip">Product → Scheme → Edit Scheme…</span>

## Build Configurations
- Debug: faster builds, debugging enabled
- Release: optimized builds for distribution

Key build settings live under the target’s
<span class="codeSnip">Build Settings</span> tab.

## Archiving
Use
<span class="codeSnip">Product → Archive</span>
to create distributable builds for TestFlight or App Store.

## Symbols and Optimization
- Ensure symbols are generated for crash symbolication
- Match optimization to your needs; avoid over-optimizing until stable


## Next Topic:

Xcode → Advanced → Diagnostics:

<a href="/xcode/advanced/diagnostics/device-logs-crashes">Device Logs &amp; Crash Reports</a>.