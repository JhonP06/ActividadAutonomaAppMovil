import React, { useState } from 'react'
import { NativeEventEmitter, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../theme/styTheme'

interface Props{
    bottonTextP2: string;
    BottonAcc:()=> void;
    
}

const BottonComp = ({bottonTextP2, BottonAcc}: Props) => {
    
return (
    <View>
        <TouchableOpacity 
            style={styles.bottonP2} 
            onPress={BottonAcc}> 

            <Text style={styles.bottonTexP2}>{bottonTextP2}</Text>

        </TouchableOpacity>

        <Text>{}</Text>
    </View>
    )
}

export default BottonComp
