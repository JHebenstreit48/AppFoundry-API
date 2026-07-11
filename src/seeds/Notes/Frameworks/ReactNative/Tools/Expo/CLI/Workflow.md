# The Managed Workflow in Expo

<hr class="dividerSection" />

## What Is the Managed Workflow?

<hr class="dividerSection" />

The <span class="emphasis">Managed Workflow</span> is Expo's simplified development model where much of the underlying configuration is abstracted away.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Focus on writing React Native code without worrying about native Android or iOS code.</li>
    <li>Expo manages all the native configuration, updates, and builds for you.</li>
    <li>Ideal for rapid development and prototyping.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Benefits of the Managed Workflow

<hr class="dividerSection" />

<hr class="dividerSubsection1" />

### Speed and Simplicity

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>No need to configure Android Studio or Xcode manually.</li>
    <li>Immediate access to Expo's APIs (camera, notifications, sensors, etc.).</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Over-the-Air (OTA) Updates

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Push code updates to your app without resubmitting to app stores.</li>
    <li>Fix bugs or release new features instantly.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Unified Development

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Develop apps simultaneously for both iOS and Android using a single codebase.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Expo Go App

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Preview your app instantly on a real device via QR code scanning.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Creating a New Expo Project

<hr class="dividerSection" />

The current recommended way to scaffold a new Expo project is using <span class="codeSnip">create-expo-app</span>.

This command both installs and scaffolds the project in one step — replacing the older approach of installing Expo CLI globally first.

```shell
npx create-expo-app MyNewApp
```

<hr class="dividerSubsection1" />

### SDK Version Prompt

<hr class="dividerSubsection1" />

The CLI now interactively prompts you to choose an SDK version rather than automatically using the latest.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Latest (SDK 57)</span> — Recommended for most projects when fully supported.</li>
    <li><span class="emphasis">For learning with Expo Go (SDK 54)</span> — Use this if the latest SDK has not yet been approved on the App Store or Google Play.</li>
    <li><span class="emphasis">Other SDK version</span> — For specific version requirements.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### SDK Compatibility with Expo Go

<hr class="dividerSubsection1" />

The SDK version you select must match the version currently supported by the <span class="emphasis">Expo Go</span> app on the App Store or Google Play.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>If you scaffold with the latest SDK and see a <span class="codeSnip">Project is incompatible with this version of Expo Go</span> error on your device, it likely means the App Store or Google Play build of Expo Go has not yet been approved for that SDK version.</li>
    <li>In this case rescaffold the project targeting the previously approved SDK — for example <span class="codeSnip">--template default@sdk-54</span> — to use the version that is currently available on your device.</li>
    <li>This is a temporary state — once the new Expo Go build is approved and available in the store, the latest SDK will work again.</li>
    <li>Check <a href="https://expo.dev/changelog">expo.dev/changelog</a> to confirm which SDK version is currently approved before scaffolding.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Git Repository Detection Prompt

<hr class="dividerSubsection1" />

If you are running <span class="codeSnip">create-expo-app</span> inside a folder that is already a git repository — such as a freshly cloned repo from GitHub — the CLI will detect this and prompt:

<span class="codeSnip">You are creating a project inside of an existing Git repository. Skip initializing a new git repository? (Y/n)</span>

Answering <span class="emphasis">Yes</span> skips re-initializing git, which is the correct choice when the folder is already a clone of an existing repo you want to keep using.

<hr class="dividerSection" />

## GitHub-First Project Setup

<hr class="dividerSection" />

If you created a repo on GitHub first — with a Node-based <span class="codeSnip">.gitignore</span> and a <span class="codeSnip">README.md</span> — and then cloned it down locally before scaffolding your Expo project, the git repo detection prompt described above will appear.

This is the correct approach when you want to keep using the existing cloned repo rather than letting Expo initialize a new one.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Create the repo on GitHub with a Node-based <span class="codeSnip">.gitignore</span> and a <span class="codeSnip">README.md</span>.</li>
    <li>Clone the repo down locally and open the folder in VS Code.</li>
    <li>Navigate into the correct folder in the terminal.</li>
    <li>Run <span class="codeSnip">npx create-expo-app MyNewApp</span> and answer <span class="emphasis">Yes</span> when prompted to skip git initialization.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Typical Workflow in Managed Mode

<hr class="dividerSection" />

<div class="centeredNumberedList">

1. <span class="emphasis">Create a new Expo project</span>

```shell
npx create-expo-app MyNewApp
```

2. <span class="emphasis">Navigate into your project</span>

```shell
cd MyNewApp
```

3. <span class="emphasis">Start the development server</span>

```shell
npx expo start
```

4. <span class="emphasis">Scan the QR code</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Use the <span class="emphasis">Expo Go</span> app on your iOS or Android device to scan the QR code.</li>
    <li>Your app will appear instantly without compiling native code.</li>
  </ul>
</div>

</div>

<hr class="dividerSection" />

## Running Your App on Simulators or Physical Devices

<hr class="dividerSection" />

Once you have started the Expo development server, you have several ways to view and test your app depending on your setup.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Android Emulator (AVD)</span> — for testing on virtual Android devices.</li>
    <li><span class="emphasis">iOS Simulator</span> — for testing on virtual iOS devices (Mac only).</li>
    <li><span class="emphasis">Expo Go App</span> — for testing on real Android and iOS devices using a QR code.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Launching the App After Starting the Metro Bundler

<hr class="dividerSection" />

After running <span class="codeSnip">npx expo start</span> in your project folder, the Metro Bundler will open.

You can use keyboard shortcuts to launch your app:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Press <span class="emphasis">a</span> to open the app on an Android emulator.</li>
    <li>Press <span class="emphasis">i</span> to open the app on an iOS simulator (Mac only).</li>
    <li>Press <span class="emphasis">w</span> to open the app in a web browser.</li>
    <li>The iOS Simulator option requires a Mac with <span class="emphasis">Xcode</span> installed and is not available on Windows.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Using Expo Go on Physical Devices

<hr class="dividerSection" />

<div class="centeredNumberedList">

1. <span class="emphasis">Install the Expo Go app</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>iOS — Available on the App Store.</li>
    <li>Android — Available on Google Play.</li>
  </ul>
</div>

2. <span class="emphasis">Start the Metro Bundler</span>

```shell
npx expo start
```

3. <span class="emphasis">Scan the QR code</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A QR code will appear in your terminal or Expo DevTools.</li>
    <li>Open the Expo Go app on your device and scan the QR code.</li>
    <li>Your app will open instantly on your physical device.</li>
  </ul>
</div>

</div>

<hr class="dividerSection" />

## Quick Summary

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Action</th>
      <th class="tableCellHeader">Shortcut or Tool</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Run on Android Emulator</td>
      <td class="tableCell">Press <span class="emphasis">a</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Run on iOS Simulator (Mac only)</td>
      <td class="tableCell">Press <span class="emphasis">i</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Run in Web Browser</td>
      <td class="tableCell">Press <span class="emphasis">w</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Run on Physical Device</td>
      <td class="tableCell">Use <span class="emphasis">Expo Go</span> and scan QR code</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

## Limitations of the Managed Workflow

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Access to Custom Native Code</span> — If you need custom native modules that Expo does not provide, you will have to eject.</li>
    <li><span class="emphasis">App Size</span> — Managed apps tend to have larger initial binary sizes compared to bare React Native projects.</li>
    <li><span class="emphasis">Advanced Native Features</span> — Some low-level platform customizations are not possible without ejecting.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Ejecting to Bare Workflow

<hr class="dividerSection" />

If you outgrow the Managed Workflow, Expo provides an ejecting option that generates native Android and iOS folders, transitioning you to a standard React Native project.

```shell
npx expo prebuild
```

<hr class="dividerSection" />

## Legacy Commands

<hr class="dividerSection" />

These commands are still recognized but no longer recommended for new projects.

The older approach required installing Expo CLI globally first before initializing a project — this has since been replaced by <span class="codeSnip">npx create-expo-app</span> which handles both installation and scaffolding in a single command.

```shell
npm install -g expo-cli
```

```shell
expo init MyNewApp
```

```shell
npm start
```
<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/react-native/tools/expo/cli/overview">← Back</a>
    <div class="xrefTitle">React Native → Tools → Expo CLI → Introduction</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/react-native/tools/expo/cli/eject">Next →</a>
    <div class="xrefTitle">React Native → Tools → Expo CLI → Ejecting</div>
  </div>
</div>