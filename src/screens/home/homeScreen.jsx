import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { ImageBackground } from 'react-native';


const HomeScreen = () => (

    <View style={style.container}>
        <ImageBackground style={style.logo}
            resizeMode='cover'
            source={require('./logoFonsdal2.png')}>

            <Text style={style.text}> Une envie de se retaper en friandise, grosse soirèe entre potes ou bien le syndrome de Flemme,tranquille......
                La Fons'Dal est la pour toi :-D!</Text>

            <Button style={style.button}
                title='Go !!!'
            />


        </ImageBackground>



    </View>
);


const style = StyleSheet.create({
    container: {

        backgroundColor: '#44c2a3',
    },

    logo: {
        width: '100%',
        height: '100%',

    },
    text: {
        color: 'white',
        fontSize: 15,
        lineHeight: 15,
        fontWeight: 'condensed',
        textAlign: 'center',
      


    },
    button: {

     
        textAlign: 'center',
        justifyContent: 'center',
    }


});



export default HomeScreen;