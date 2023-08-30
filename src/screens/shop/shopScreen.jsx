import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import MyTable from '../components/table';


const Shop = () => {

    return (

        <View> 
            <View>
                <ImageBackground 
                style={''}
                resizeMode='cover'
                source={require('../home/logoFonsdal2.png')} />
            </View>
            <View>
            <MyTable/>
           </View>
          



       
        </View>


    );


}

export default Shop;