
import { View, Image, ScrollView } from 'react-native';
import React, { useState, useEffect } from "react";

import styles from './styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import captures from './captures.json'

export default function Gallery ({captures=[]}){
    return (
    <Grid container spacing={2} >
        {captures.map(({uri,caption}) => (
            <Grid item xs={6}>
                {/* on click some link change */}
                <a>
                <View  key={uri}>
                    <Image source={{ uri }} />
                </View>
                <View>
                    <Text>{{caption}}</Text>
                </View>
                </a>
            </Grid>
        ))}
    </Grid>
    );
};
