import React from 'react'
import { Text, useWindowDimensions, View } from 'react-native'
import { styles } from '../theme/styTheme'

const CajComponents = (props: any) => {
    const { height } = useWindowDimensions();
  return (
    <View style = {{...styles.stleCaj,
        height : height * 0.60
    }}>
        {props.children}
    </View>
  )
}

export default CajComponents
