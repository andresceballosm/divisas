import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const getImage = (path) => {
    switch (path) {
        case 'dolar':
            return require('../assets/icons/dolar.png')
        case 'euro':
            return require('../assets/icons/euro.png')
        case 'real':
            return require('../assets/icons/real.png')
    }
}

export const Card = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.viewImage}>
                <Image 
                style={styles.icon} 
                source={getImage(props.divisa)}
                />  
            </View>
            <View style={styles.viewRight}>
                <View style={styles.moneda}>
                    <Text style={styles.title}>Moneda</Text>
                    <Text>{props.divisa}</Text>
                </View>
                <View style={styles.value}>
                    <Text style={styles.title}>Precio</Text>
                    <Text>{props.value}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        justifyContent: 'center',
        alignItems:'center',
        flexDirection:'row',
        flex:1,
        //height: 150,
        width:250,      
        marginTop:20,
        backgroundColor: '#ffffff',
        borderColor:'#b6b7ba'
    },
    icon:{
        width:70,
        height:70,
    },
    viewRight:{
        flex:1,
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center'
    },
    viewImage:{
       marginLeft:20 
    }, 
    title:{
        fontSize: 16,
        color:'#71C2FF'
    }, 
    moneda:{
        
    },
    value:{
        marginLeft:10
    }
  });