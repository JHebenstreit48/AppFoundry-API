## Accessing Native APIs in React Native

---

### Overview

React Native allows JavaScript code to access device hardware and system features through a bridge to native APIs. This enables cross-platform apps to interact with functionality such as:

- Camera
- Location services
- Accelerometer
- File system
- Push notifications

Native modules expose these device capabilities to JavaScript in a way that feels seamless to the developer.

---

### How the JavaScript Bridge Works

JavaScript code does not run natively on Android or iOS. Instead, React Native provides a bridge to communicate between:

- The JavaScript thread (running React logic)
- The native platform layer (iOS/Android)

When a React Native app needs to access device hardware, it sends a command across the bridge. The native code executes the command and sends the result back to JavaScript asynchronously.

**Advantages:**
- Keeps the JavaScript codebase clean and cross-platform.
- Allows access to powerful device features when needed.

**Considerations:**
- Communication across the bridge can have performance overhead if done excessively.
- Asynchronous behavior requires handling promises or callbacks carefully.

---

### Example: Using the Camera

One of the most common uses of native APIs is accessing the camera.

Popular libraries include:
- <span class="codeSnip">expo-camera</span> (for Expo projects)
- <span class="codeSnip">react-native-camera</span> (for bare React Native apps)

Example with Expo Camera:

```javascript
import { Camera } from 'expo-camera';
import { useState, useEffect } from 'react';
import { Button, View } from 'react-native';

export default function CameraExample() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  return (
    <View>
      {hasPermission && (
        <Camera ref={ref => setCameraRef(ref)} style={{ flex: 1 }}>
          <Button
            title="Take Picture"
            onPress={async () => {
              if (cameraRef) {
                let photo = await cameraRef.takePictureAsync();
                console.log(photo.uri);
              }
            }}
          />
        </Camera>
      )}
    </View>
  );
}
```

---

### Native API Access Considerations

- Always request permissions (Camera, Location, Microphone) before using native APIs.
- Not all native features are available on simulators; test on physical devices.
- Some APIs behave differently between iOS and Android — test both platforms.

---

**Conclusion**

React Native’s bridge architecture enables JavaScript code to access powerful native APIs without sacrificing cross-platform compatibility.  
For device features like camera and GPS, using well-established libraries can simplify development while maintaining app performance.
