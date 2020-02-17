import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import {Todo} from "../components/Todo";
import {AddTodo} from "../components/AddTodo";

export const MainScreen = props => {
    return(
        <View>
            <AddTodo addTodo={props.addTodo} />
            <FlatList
                data={props.todos}
                renderItem={({item}) => <Todo todo={item} onOpen={props.openTodo} remove={props.remove} />}
                keyExtractor = {item => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({})