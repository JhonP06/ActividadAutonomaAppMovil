import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Image, Text, useWindowDimensions, View } from 'react-native'
import { styles } from '../theme/styTheme';
import { StatusBar } from 'expo-status-bar';
import { BottonsPanta } from './BottonsPanta1';


interface Props extends StackScreenProps<any, any> {}

const Pantalla1Screens = ({navigation}:Props) => {
  const { height }= useWindowDimensions();
    //console.log(props.);
  return (
    <View style = {styles.margenTot}>
        <Text style={{...styles.styTex, textAlign:'left'}}>Home</Text>
        <Text style={styles.styTex} >BIENVENIDOS</Text>
        <Image
        
        source={{
        height:500,
        width:350,
          uri: 'https://blog.ida.cl/wp-content/uploads/sites/5/2017/02/MobilePlatforms.jpg',
        }}
      />
        <Button title='ACCEDER'
        onPress={() => navigation.navigate('FORMULARIO')}/>
        
        <StatusBar backgroundColor='#d9fcff'/>
    </View>
  )
}

export default Pantalla1Screens
