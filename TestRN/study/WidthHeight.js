import React, { Component } from 'react';
import { View } from 'react-native';

export default class FixedDimensBasics extends Component<{}> {
    render() {
        return (
            <View>
                <View style={{width:50, height:40, backgroundColor: 'powderblue'}}></View>
                <View style={{width:100, height:100, backgroundColor: 'skyblue'}}></View>
                <View style={{width:150, height:150, backgroundColor: 'steelblue'}}></View>            
            </View>
        );
    }
};