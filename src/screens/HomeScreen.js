import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>Getting started with React Native!</Text>
            <Button
                title="Go to Components Demo"
                onPress={() => {
                    props.navigation.navigate('Components')
                }}
            />

            <Button
                title="Go to List Demo"
                onPress={() => {
                    navigation.navigate('List')
                }}
            />
            {/*<TouchableOpacity
                onPress={() => {
                    props.navigation.navigate('List')
                }}>
                <Text>"Go to List Demo</Text>
            </TouchableOpacity>*/}
        </View>
    );
};

const styles = StyleSheet.create({
    textHeader: {
        fontSize: 20
    },
    container: {
        marginHorizontal: 10
    }
});

export default HomeScreen;
