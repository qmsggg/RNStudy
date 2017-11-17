import React, { Component } from 'react';
import { View } from 'react-native';

export default class AlignItemsBasics extends Component<{}> {
    render() {
        return(
            // 尝试把`alignItems`改为`flex-start`看看
            // 尝试把`justifyContent`改为`flex-end`看看
            // 尝试把`flexDirection`改为`row`看看
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                // alignItems: 'center'
                // alignItems: 'flex-start'
                alignItems: 'stretch'
            }}>
            <View style={{height: 50, backgroundColor: 'powderblue'}} />
            <View style={{height: 50, backgroundColor: 'skyblue'}} />
            <View style={{height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
};