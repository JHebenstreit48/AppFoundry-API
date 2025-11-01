<br>

## Overview
---

Stack Navigation is a navigation pattern in <span class="emphasis">React Navigation</span> that allows apps to transition between screens by stacking them on top of each other.

### Key Features of Stack Navigation
- **Screen transitions follow a "stack" structure** (similar to browser history).
- **Supports gestures for navigating back** (iOS) and back button handling (Android).
- **Each screen is managed in a navigation stack**, allowing users to **push** or **pop** screens dynamically.

---
### Installing Dependencies
---

<span class="emphasis">Recommended</span> (native-stack, better performance & native transitions)

```bash
npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context react-native-gesture-handler

# Optional (only if needed): animations/icons
npm install react-native-reanimated react-native-vector-icons
```

#### Legacy (classic stack — kept for existing projects)

```bash
npm install @react-navigation/native @react-navigation/stack
npm install react-native-screens react-native-safe-area-context react-native-gesture-handler
```

#### Optional:

```bash
# Advanced transitions
react-native-reanimated

# Icon packs (headers, buttons, tabs, etc.)
react-native-vector-icons
```

<small>Tip (bare RN only): ensure <span class="codeSnip">react-native-gesture-handler</span> is imported at app entry before rendering any UI.</small>

---
### Setting Up Stack Navigation
---

To configure <span class="emphasis">Stack Navigation</span>, follow these steps:

1. Import the necessary components from React Navigation.
2. Create a <span class="emphasis">Stack Navigator</span> using <span class="codeSnip">createNativeStackNavigator</span>.
3. Define screens within the <span class="emphasis">Stack Navigator</span>.

```javascript  
import React from "react";  
import { NavigationContainer } from "@react-navigation/native";  
import { createStackNavigator } from "@react-navigation/stack";  
import { Button, View, Text } from "react-native";  

const Stack = createStackNavigator();  

function HomeScreen({ navigation }) {  
  return (  
    <View>  
      <Text>Home Screen</Text>  
      <Button title="Go to Details" onPress={() => navigation.navigate("Details")} />  
    </View>  
  );  
}  

function DetailsScreen() {  
  return (  
    <View>  
      <Text>Details Screen</Text>  
    </View>  
  );  
}  

export default function App() {  
  return (  
    <NavigationContainer>  
      <Stack.Navigator>  
        <Stack.Screen name="Home" component={HomeScreen} />  
        <Stack.Screen name="Details" component={DetailsScreen} />  
      </Stack.Navigator>  
    </NavigationContainer>  
  );  
}  
```

---
### Navigating Between Screens
---

Use the <span class="emphasis">navigation</span> prop to switch between screens dynamically.

```javascript  
<Button title="Go to Profile" onPress={() => navigation.navigate("Profile")} />  
```

---
### Passing Parameters Between Screens
---

To pass parameters between screens:

```javascript  
navigation.navigate("Details", { itemId: 42 });  
```

Retrieve the parameter in the target screen:

```javascript  
function DetailsScreen({ route }) {  
  const { itemId } = route.params;  
  return <Text>Item ID: {itemId}</Text>;  
}  
```

---
### **Customizing Screen Options**
---

Customize screen appearance using <span class="codeSnip">screenOptions</span>:

```javascript  
<Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#6200ee" }, headerTintColor: "#fff" }}>  
  <Stack.Screen name="Home" component={HomeScreen} />  
</Stack.Navigator>  
```

---
### Troubleshooting (Quick)
---
- <span class="emphasis">“Screens native module not found”</span> → ensure <span class="codeSnip">react-native-screens</span> is installed and rebuild the app.  
- <span class="emphasis">“Undefined is not an object (…navigation…)”</span> → ensure the component is rendered inside <span class="codeSnip">NavigationContainer</span>.  
- <span class="emphasis">Gesture/header differences</span> → native-stack uses platform-native behavior; tweak via <span class="codeSnip">screenOptions</span>.

---
### Legacy Notes (Classic Stack)
---
For older apps using <span class="codeSnip">@react-navigation/stack</span>, the concepts above are identical. The main differences:
- Install <span class="codeSnip">@react-navigation/stack</span> instead of <span class="codeSnip">@react-navigation/native-stack</span>.  
- JS-driven transitions by default; <span class="codeSnip">react-native-reanimated</span> is <span class="emphasis">optional</span> unless you add advanced animations.

---
### Conclusion
---
- <span class="emphasis">Stack Navigation allows hierarchical navigation in React Native apps.</span>  
- <span class="emphasis">Users can transition between screens dynamically.</span>  
- <span class="emphasis">Custom styles and parameters enhance navigation functionality.</span>  
- <span class="emphasis">Prefer native-stack for new projects; keep classic stack as legacy.</span>