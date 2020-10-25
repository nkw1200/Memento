import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import gallery from './components/gallery.js'; //gallery of all notes taken so far 
import camera from './components/camera.js'; //connection to phone camera and save abilities 
//--------------------------------------------------------------------------------------------------------
// import settings from'component/settings.js'; //notification settings, location settings
// import captions from 'components/captions.js'; //polaroid concept, font?
//--------------------------------------------------------------------------------------------------------
//TODO:
  // minimum requirements: 
    // take pictures
    // save to gallery/save to folders
    // add captions to picture
    // customize captions/picture
    // reminder for time/location
    // search pictures

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={camera}
          options={{ title: 'Welcome' }}
        />
        {/* <Stack.Screen name="Gallery" component={gallery} /> */}

      </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
