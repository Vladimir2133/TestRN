import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput,Button, Alert} from 'react-native'

export const AddTodo = ({addTodo}) => {
    const [value, setValue] = useState('')

    const pressHandler = () =>{
        if(value.trim()){
            addTodo(value)
            setValue('')
        }else {
            Alert.alert('Поле не может быть пустым')
        }
    }

    return(
        <View style = {styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
            />
            <Button title='Добавить'  onPress={pressHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:'space-around',
        paddingTop: 15,
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '70%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderStyle: 'solid',
        borderColor: '#3949ab',
    }
})