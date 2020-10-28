import React from 'react';
import GalleryPage from './src/gallery.page'
import CameraPage from './src/camera.page';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                <Stack.Screen
                    name="Camera"
                    component={CameraPage}
                />
                <Stack.Screen name="Gallery" component={GalleryPage} />
                </Stack.Navigator>
            </NavigationContainer>
            
        );
    };
};