import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class LotsOfStyles extends Component<{}> {
    render() {
        return (
            <View>
                <Text style={style.red}>just red</Text>
                <Text style={style.bigblue}>just bigblue</Text>
                <Text style={[style.bigblue, style.red]}>bigblue, then red</Text>
                <Text style={[style.red, style.bigblue]}>red, then bigblue</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    bigblue:{
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
})