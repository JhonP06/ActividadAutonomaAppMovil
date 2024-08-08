import React, { useState } from 'react'
import { Button, Text, useWindowDimensions, View } from 'react-native'
import { Navigation } from '../navegator/Navegation';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { styles } from '../theme/styTheme';
import CajComponents from '../Components/CajComponents';
import BottonComp from '../Components/BottonComp';
import { InputCompon } from '../Components/InputCompon';
import { TextInput } from 'react-native-gesture-handler';

const [count, setCount] = useState(0)
const onPress = () => setCount(prevCount => prevCount + 1);

export const Pantalla2Screens = () => {
    const navigation = useNavigation();
    
    const reaccionts = () => {
      console.log(reaccionts);
      {}
    }

  return (
    <View style = {styles.margenTot}>
        <CajComponents>
          <Text style={styles.textP2}>Formulario:</Text>
          <Text style={styles.descText}>Componentese reutilizables</Text>

          <View style={styles.contenCompIm}>
            <InputCompon placeholder='campo número 1'/>
            <InputCompon placeholder='campo número 2'/>
          </View>

          <BottonComp bottonTextP2='Dividir'
          BottonAcc={reaccionts}/>

          <Text></Text>

        </CajComponents>
        <Button title='REGRESAR'
        onPress={() =>navigation.dispatch(CommonActions.navigate({name: 'HOME'})) }
        />
    </View>
  )
}
