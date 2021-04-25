import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import TextScreen from "./src/screens/TextScreen";
import ScanScreen from "./src/screens/ScanScreen";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen, 
    List: ListScreen, 
    Image: ImageScreen, 
    Counter: CounterScreen,
    Colors: ColorScreen,
    Square: SquareScreen,
    Text: TextScreen,
    Scan: ScanScreen

  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Shabi`s Proj"
    }
  }
);

export default createAppContainer(navigator);

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text> up App.js  start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
