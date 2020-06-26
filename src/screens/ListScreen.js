import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';

const ListScreen = () => {
    const friends = [
        {
            name: 'Friend #1'/* , key: 'A' */,
            age: 28
        },
        {
            name: 'Friend #2'/* , key: 'A' */,
            age: 23
        },
        {
            name: 'Friend #3'/* , key: 'C' */,
            age: 24
        },
        {
            name: 'Friend #4'/* , key: 'D' */,
            age: 21
        },
        {
            name: 'Friend #5'/* , key: 'R' */,
            age: 14
        },
        {
            name: 'Friend #6'/* , key: 'F' */,
            age: 10
        },
        {
            name: 'Friend #7'/* , key: 'E' */,
            age: 21
        },
    ];

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({item}) => {
                return (
                    <Text style={styles.textStyle}>
                        Name: {item.name} - Age: {item.age}
                    </Text>
                );
            }}/>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 100
    }
});

export default ListScreen;
