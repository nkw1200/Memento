import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CameraPage from './src/camera.page';
import CenteredGrid from './src/gallery'

// function HomeScreen() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Home!</Text>
//       </View>
//     );
//   }
  function NotesScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notes!</Text>
      </View>
    );
  }

  function GalleryScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <CenteredGrid/>
      </View>
    );
  }
  
  const Tab = createBottomTabNavigator();
  
  export default function App() {
    // render() {
        return (
        <NavigationContainer>
            <Tab.Navigator>
            <Tab.Screen name="Home" component={<CameraPage />} />
            <Tab.Screen name="Notes" component={NotesScreen} />
            <Tab.Screen name="Gallery" component={GalleryScreen} />
            </Tab.Navigator>
        </NavigationContainer>
        );
    // };
  };
