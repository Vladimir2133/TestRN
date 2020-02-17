import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const Navbar = (props) => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        height: 65,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#3949ac'
    },
    text: {
        color: '#fff',
        fontSize: 20,
    }
})