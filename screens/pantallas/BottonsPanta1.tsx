import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../theme/styTheme'


export const BottonsPanta = () => {
  return (
    <View>
        <TouchableOpacity style={styles.bottonAcce}>
            <Text style={styles.bottonAccTex}>Acceder</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottonReg}>
            <Text style={styles.bottonRegTex}>Regresar</Text>
        </TouchableOpacity>
    </View>
  )
}

