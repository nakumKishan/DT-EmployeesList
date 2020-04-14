import React from 'react';
import { Platform,StyleSheet, Text, View } from 'react-native';

const Header = (props) =>{
    return(
<View style={styles.header}>
<Text style = {styles.title}>{props.title2}</Text>
</View>
);
}

const styles = StyleSheet.create({
    header :{
        backgroundColor : '#171717',
        height : 60,
        alignItems:'center',
        justifyContent:'center'
    },
    title : {
        color:'#F3F3F3',
        fontSize:26,
        fontWeight: '900',
        textTransform:"uppercase"   
    }
});

export default Header;