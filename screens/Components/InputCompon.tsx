import React from 'react'
import { TextInput } from 'react-native'
import { styles } from '../theme/styTheme'

interface Props{
        placeholder: string;
    }
export const InputCompon = ({placeholder}: Props) => {
    
  return (
    <TextInput
        placeholder={placeholder}
        keyboardType='numeric'
        style={styles.texImp}
      />
  )
}


