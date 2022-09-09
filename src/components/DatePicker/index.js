import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles';

export default function DatePicker({ date, onClose, onChange}) {
    const [ dateNow, setDateNow] = useState(new Date(date));
 return (
   <TouchableOpacity style={styles.container}
   
   >
        {
            Platform.OS === 'ios' && (
                <View style={styles.header}>
                    <TouchableOpacity onPress={onClose}>
                        <Text style={styles.text}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        <DateTimePicker 
            value={dateNow}
            mode='date'
            display='default'
            onChange={ (event, date) => {
                const currentDate = date || dateNow;
                setDateNow(currentDate);
                onChange(currentDate)
            }}

            style={{backgroundColor: '#FFF'}}
        />
   </TouchableOpacity>
  );
}