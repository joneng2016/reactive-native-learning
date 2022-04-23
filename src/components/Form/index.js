import React, { useState, onPress} from 'react' 
import {TextInput, Text, View, Button} from 'react-native'
import Title from '../Title'
import ResultImc from '../ResultImc';

export default function Form() {
    
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("preencha o peso e altura")
    const [imc,setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator() {
        return setImc(weight/(height*height).toFixed(2))
    }

    function validationImc() {
        if (weight !== null && height !== null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual: ")
            setTextButton("Calcular Novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("preencha o peso e a altura")
    }
    
    return(
    <View>            
        <View>
            <Title/>
            <Text>Altura</Text>
            <TextInput
                value={height}
                onChangeText={setHeight}
                placeholder="Ex. 1.75"
                keyboardType="numeric"
            />
            <Text>Peso</Text>
            <TextInput
                value={weight}
                onChangeText={setWeight}
                placeholder="Ex. 75.365"
                keyboardType="numeric"
            />
            <Button
                onPress={() => validationImc()}
                title={textButton}
            />
            <ResultImc
                messageResultImc={messageImc}
                resultImc={imc}
            />
        </View>
    </View>
    );
}