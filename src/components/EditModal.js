import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput, Button, Modal, Alert} from 'react-native'

export const EditModal = props => {

    const [title, setTitle] = useState(props.value)
    const saveHandler = () => {
        title.trim().length < 3
            ? Alert.alert('Error', `Минимальная длина 3 символа.`)
            : props.onSave(title)
    }

    return(
        <Modal
            visible={props.visible}
            animationType={'fade'}
            transparent={false}
        >
            <View style={styles.wrap}>
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    style={styles.input}
                    placeholder={'Введите название'}
                    autoCapitalize='none'
                    autoCorrect={false}
                />
                <View style={styles.buttons}>
                    <Button title = 'Сохранить' onPress={saveHandler} />
                    <Button title = 'Отменить' color={'red'} onPress={props.onCancel} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        padding: 5,
        borderBottomColor: '#3949ab',
        borderBottomWidth:2,
        width: '80%'
    },
    buttons: {
        width: '100%',
        flexDirection:'row',
        marginTop: 15,
        justifyContent: 'space-around',
    }

})