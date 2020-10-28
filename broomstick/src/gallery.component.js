import React from 'react';
import { View, Image, ScrollView,Text } from 'react-native';

import styles from './styles';

export default ({captures=[]}) => (
    <ScrollView 
        horizontal={true}
        style={[styles.bottomToolbar, styles.galleryContainer]} 
    >
        {captures.map((obj) => (
            <View style={styles.galleryImageContainer} key={uri}>
                <Image source={obj.content } style={styles.galleryImage} />
                <Text>{obj.text}</Text>
            </View>
        ))}
    </ScrollView>
);