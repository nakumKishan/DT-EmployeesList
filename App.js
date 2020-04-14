import React from 'react';
import { Platform,StyleSheet, Text, View,FlatList } from 'react-native';
import Header from './Components/Header'
import InputBar from './Components/InputBar'
import TodoItem from './Components/TodoItem'

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      todoInput1212: '',
      todos:[
        {id:0,title:"Take out the trash",done:false},
        {id:1,title:"Cook Diner",done:false},
      ]
    }
  }  
    addNewTodo(){
      let todos = this.state.todos

      todos.unshift({
        id: todos.length + 1,
        title: this.state.todoInput1212,
        done:false
      }); 

      this.setState({
        todos : todos,
        todoInput1212:''
      });

    }
  
render(){
  const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <view></view>;
  return (
    <View style={styles.container}>
      {statusbar}
      <Header title2 = "Hello World" />
      <InputBar 
      title2 ="ADD"
      addNewTodo = {() => this.addNewTodo()}
      textChange = {todoInput => this.setState({todoInput1212:todoInput})}
      todoInput={this.state.todoInput}
      />
      <FlatList 
      data = {this.state.todos}
      extraData = {this.state}
      keyExtractor= {(item,index) => index.toString()}
      renderItem = {({item,index})=>(<TodoItem todoItem={item} />)} 
      />
    </View>
  );
}  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusbar:{
    backgroundColor:'#FFCE00',
    height: 50
  }
});
