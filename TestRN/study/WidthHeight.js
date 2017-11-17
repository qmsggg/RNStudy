import React, { Component } from 'react';
import { View } from 'react-native';

export default class FixedDimensBasics extends Component<{}> {
    render() {
        return (
            // 尝试把`flexDirection`改为`column`看看
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
        );
    }
};