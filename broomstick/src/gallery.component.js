import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import React, { Component } from 'react';
import {CameraRoll} from 'react-native-community/cameraroll';
import styles from './styles';

CameraRoll.getPhotos({
    first: 20,
    assetType: 'Photos',
  })
  .then(r => {
    this.setState({ photos: r.edges });
  })
  .catch((err) => {
     //Error Loading Images
  });
};

export default class gallery extends React.Component {
    

    render() {
        return (
          <View>
            <Button title="Load Images" onPress={this._handleButtonPress} />
            <ScrollView>
              {this.state.photos.map((p, i) => {
              return (
                <Image
                  key={i}
                  style={{
                    width: 300,
                    height: 100,
                  }}
                  source={{ uri: p.node.image.uri }}
                />
              );
            })}
            </ScrollView>
          </View>
        );
}

// export default ({captures=[]}) => (
//     <ScrollView 
//         horizontal={true}
//         style={[styles.bottomToolbar, styles.galleryContainer]} 
//     >
//         {captures.map(({ uri }) => (
//             <View style={styles.galleryImageContainer} key={uri}>
//                 <Image source={{ uri }} style={styles.galleryImage} />
//             </View>
//         ))}
//     </ScrollView>
// );