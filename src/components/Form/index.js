import React from 'react' 
import {TextInput, Text, View} from 'react-native'

export default function Form() {
    return(
    <View>            
        <View>
            <Text>Altura</Text>
            <TextInput
                placeholder="Ex. 1.75"
                KeybordType="numeric"
            />
            <Text>Peso</Text>
            <TextInput
                placeholder="Ex. 75.365"
                KeybordType="numeric"
            />
        </View>
    </View>
    );
}