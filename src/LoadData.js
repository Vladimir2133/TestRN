import React from 'react'
import {Text, View, Image, FlatList, StyleSheet, TouchableWithoutFeedback, Modal} from 'react-native'



export default class LoadData extends React.Component{
    state = {
        data: [],
        isLoading: false,
        page: 1
    }

    componentDidMount() {
        this.getFetch()
    }

    getFetch = async () => {
        const url = 'https://api.unsplash.com/photos?page='+this.state.page
        fetch(url).then(response => response.json())
            .then(responseJSON => {
                this.setState(
                    {
                        data: this.state.data.concat(responseJSON),
                        isLoading: true,
                    })
            })
        console.log(this.state.page)
    }

    handleLoadMore = () => {
        this.setState(
            {page: this.state.page + 1},
            this.getFetch
            )

    }



    photoRender = ({item}) => {
        const name = item.user.name
        return(
            <View style={styles.photoCard}>
                <Image source={{uri:item.urls.regular}}
                       style={{width:'100%', height:200}} />
                       <Text style={styles.text}>{name}</Text>
            </View>
        )
    }


    render() {
        const {data} = this.state
        return(
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={this.photoRender}
                    onEndReached={this.handleLoadMore}
                    onEndReachedThreshold={0.5}
                    removeClippedSubviews={true}
                    keyExtractor={item => item.index}
                />

            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#A2A28F'
    },
    photoCard:{
        flex:1,
        margin: 10,
        paddingBottom: 15,
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: {width: 2, height: 2 },
        elevation: 8,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        paddingTop: 5,

    }
})