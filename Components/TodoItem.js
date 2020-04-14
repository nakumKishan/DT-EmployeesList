import React from 'react';
import { StyleSheet, Text, Button,View,TouchableOpacity, TextInput } from 'react-native';


export default class TodoItem extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        const todoItem = this.props.todoItem;
        return(
<TouchableOpacity style ={styles.todoItem}>
<Text style={(todoItem.done) ? {color:'#AAAAAAA'}:{color:'#313131'}}>{todoItem.title}</Text>
</TouchableOpacity>
)
    }
}

const styles = StyleSheet.create({
    todoItem:{
        width: '100%',
        height:40,
        borderBottomColor:'#DDD',
        borderBottomWidth:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:15
    }
})