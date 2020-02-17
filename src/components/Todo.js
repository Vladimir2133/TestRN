import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native'

export const Todo = (props) => {
    return(
        <TouchableOpacity
        activeOpacity={.5}
        onPress={() => props.onOpen(props.todo.id)}
        onLongPress={() => props.remove(props.todo.id)}>
            <View style={styles.box}>
                <Text>{props.todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 5,
        backgroundColor:'#CBEEE3'
    },
    text: {

    }
})