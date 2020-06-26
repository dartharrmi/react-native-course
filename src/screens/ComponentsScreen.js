import React from 'react';
import {StyleSheet, Text} from 'react-native';

const ComponentsScreen = () => {
    return <Text style={styles.textStyle}>This is a ComponentsScreen</Text>;
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50
    }
});

export default ComponentsScreen;
