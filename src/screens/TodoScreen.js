import React, {useState} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {AppCard} from "../components/ui/AppCard";
import {EditModal} from "../components/EditModal";

export const TodoScreen = props => {

    const [modal, setModal] = useState(false)
    const saveHandler = title => {
        props.onSave(props.todo.id, title)
        setModal(false)
    }

    return(
        <View style={styles.todoBox}>
            <AppCard style={styles.card}>
                <Text style={styles.text}>{props.todo.title}</Text>
                <Button title={'Edit'} onPress={() => setModal(true)}/>
            </AppCard>
            <View style={styles.boxButton}>
                <View style={styles.button}>
                    <Button title={'Back'} onPress={props.goBack} />
                </View>
                <View style={styles.button}>
                    <Button
                        title={'Delete'}
                        color={'red'}
                        onPress={() => props.remove(props.todo.id)}
                    />
                </View>
                <EditModal
                    visible={modal}
                    onCancel={()=>setModal(false)}
                    value={props.todo.title}
                    onSave={saveHandler}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    todoBox: {

    },
    boxButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    card: {
        marginBottom: 20,
        padding: 15,
    },
    button: {
      width: '40%'
    },
    textBox: {
        width: '65%'
    },
    text: {
        fontSize: 16
    }
})