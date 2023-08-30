import { useState, } from 'react';
import { View, TextInput, Button,Image,Alert,Text} from 'react-native';


const Profil = ({ navigation }) => {

    return (    
      <View>
        
      <View>
        <Text>Mon Profil</Text>
        <View/> 
        <Button
          onPress={() => navigation.navigate("shop")}
          title="shopping"
        />
        <Button
          title='retour'
          onPress={() => navigation.goBack()} />
      </View>
  </View>
    );
  };
  
  export default Profil;