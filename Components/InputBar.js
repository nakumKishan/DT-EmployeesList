import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, TextInput } from 'react-native';

const InputBar = (props) =>{
    return(
<View style={styles.inputContainer}>
<TextInput 
style={ styles.input}
onChangeText={(todoInput) => props.textChange(todoInput)}
defaultValue={props.todoInput}
></TextInput>
<TouchableOpacity style={styles.addButton} onPress ={props.addNewTodo} >
    <Text style = {styles.addButtonText}>{props.title2}</Text>
    </TouchableOpacity>
</View>
);
}

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        shadowOffset:{width:0,height:3},
        shadowOpacity: 0.1
    },
    input:{
        backgroundColor:'#F3F3F3',
        flex:1,
        fontSize:18,
        height:35
    },
    addButton:{
        backgroundColor:'#FFCE00',
        justifyContent:'center',
        alignItems:'center',
        width:100
    },
    addButtonText:{
        color: '#171717',
        fontSize:18,
        fontWeight:'700'

    }
})
export default InputBar;