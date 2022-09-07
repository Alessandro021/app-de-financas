import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Picker as RNPickerSelect} from '@react-native-picker/picker';


export default function Picker({ onChange, tipo}) {
 return (
   <View style={styles.pickerView}>
    <RNPickerSelect
    style={{
        width: '100%'
    }}
    selectedValue={tipo}
    onValueChange={(valor) => onChange(valor)}
    >
       <RNPickerSelect.Item  label='Receita' value='receita'/>
       <RNPickerSelect.Item  label='Despesa' value='despesa'/>

    </RNPickerSelect>
   </View>
  );
}