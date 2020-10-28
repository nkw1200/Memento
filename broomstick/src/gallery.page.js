
import { View, Image, ScrollView } from 'react-native';
import React, { useState, useEffect } from "react";
import writeJsonFile from 'write-json-file';
import styles from './styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import captures from './captures.json'

export default function GalleryPage ({captures=[]}){
    return (
    <Grid container spacing={2} >
        <Grid item xs={12}>
        <Button
            title="Go to camera"
            onPress={() =>{
                await writeJsonFile('foo.json', captures);
                navigation.navigate('Camera');}
            }
        >Camera</Button>
        </Grid>
        {captures.map(({uri,caption}) => (
            <Grid item xs={6}>
                <View  key={uri}>
                    <Image source={{ uri }} />
                </View>
                <View>
                    <Text>{{caption}}</Text>
                </View>
            </Grid>
        ))}
    </Grid>
    );
};
