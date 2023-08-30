import { useState, } from 'react';
import { View, TextInput, Button,Image,Alert} from 'react-native';
//import  axios  from "axios";



const Inscription = ({ navigation }) => {

    const [inputValue, setInputValue] = useState({
        first_name: "",
        last_name: "",
        birth_date: "",
        email: "",
        numero:"",
        adresse:"",
    });


    const handleChangeValue = (name, value) => {
        setInputValue({ ...inputValue, [name]: value })
    }


    // const handleSubmit = async () => {
    //     if (inputValue) {
    //        await (new Promise((resolve) => setTimeout(resolve, 2000)));
    //         try {
    //             const response = await axios.post( '',inputValue);
    //             if (response) {
    //                 Alert.alert('Success')
    //                 navigation.navigate('Profil')} 
                
    //         } catch (error) {
    //             console.error(error);
    //             Alert.alert('Error');
    //         }
    //     }else {
    //         Alert.alert('complete')};
    //     };


    return (

        <View>
          
        <View>
            <TextInput
                placeholder='Entrez votre prenom'
                inputMode='text'

                value={inputValue.first_name}

                onChangeText={(text) => handleChangeValue('first_name',text)}
            />
            <TextInput
                placeholder='Entrez votre nom'
                inputMode='text'
                onChangeText={(text) => handleChangeValue('last_name',text)}

                value={inputValue.last_name} />
            <TextInput
                placeholder='Entrez votre date de naissance(jj/mm/yyyy)'
                inputMode='text'

                value={inputValue.birth_date}

                onChangeText={(text) => handleChangeValue('birth_date',text)}
            />
            <TextInput
                placeholder='Entrez votre Email'
                inputMode='text'
                onChangeText={(text) => handleChangeValue('email',text)}

                value={inputValue.email} />
            <TextInput
                placeholder='Entrez votre numero de GSM:'
                inputMode='text'

                value={inputValue.numero} 
                onChangeText={(text) => handleChangeValue('numero',text)}
            />
            <TextInput
                placeholder='Entrez votre adresse (rue, n°, Localitè):'
                inputMode='text'
                onChangeText={(text) => handleChangeValue('adresse',text)}
                value={inputValue.adresse} />

            <Button
                title='Valider'
                onPress={''} />
            <Button
                title='Annuler'
                onPress={() => navigation.goBack()} />
                
        </View>
        </View>

    );

};

export default Inscription;