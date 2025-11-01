# Certificates & Provisioning Profiles

## Overview
iOS signing ensures the app is trusted by devices and the App Store. Development builds use development certificates and provisioning profiles; distribution builds use distribution certificates and profiles.

## Development (Debug)
- Use your Apple ID as a team in Xcode
- Enable Automatic Signing in the target’s
<span class="codeSnip">Signing &amp; Capabilities</span>
- Xcode creates a development provisioning profile

## Distribution (Release)
- Use an Apple Developer Program team
- Create or manage certificates and App IDs in the Developer portal
- Generate distribution provisioning profiles (App Store or Ad Hoc)
- Download and select them in Xcode

## Device Registration
For Ad Hoc testing, register device UDIDs in the provisioning profile.

## Best Practices
- Prefer Automatic Signing for debug
- Limit who holds distribution certs; rotate when team members change
- Keep profiles tidy; remove stale identifiers

<div class="xrefBox">
  <span class="emphasis">Next:</span>
<a href="/xcode/advanced/signing-and-distribute/schemes-and-build">Schemes &amp; Build Settings</a>.
</div>
