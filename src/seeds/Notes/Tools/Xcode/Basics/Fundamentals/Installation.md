
# Installation & Command Line Tools

## Overview
Xcode is Apple’s IDE for iOS, iPadOS, macOS, watchOS, and tvOS development. Xcode and the iOS Simulator are macOS-only. There is no Windows equivalent.

## Install Xcode (App Store)
1) Open the App Store on macOS  
2) Search for Xcode  
3) Click Get → Install  
Note: Xcode is large (12 GB+). Ensure adequate disk space.

## Install Command Line Tools (CLT)
After Xcode is installed, install the CLT so command-line builds work.

```bash
xcode-select --install
```

Accept the dialog to download and install.

## Verify Installation

```bash
xcodebuild -version
```

If prompted for license:

```bash
sudo xcodebuild -license
```

Scroll/read, then type agree.

## What’s Included
- IDE, compilers, SDKs, iOS Simulator
- Project templates, signing utilities
- Instruments performance tools

<div class="xrefBox">
  <span class="emphasis">Next:</span>
<a href="/xcode/basics/fundamentals/first-run-updates">First Run &amp; Updates</a>.
</div>