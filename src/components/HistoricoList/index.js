import React from 'react';
import { View, Text, TouchableWithoutFeedback} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import styles from './styles';

export default function HistoricoList({data, deleteItem}) {
 return (
    <TouchableWithoutFeedback
        onLongPress={() => deleteItem(data)}
    >
   <View style={styles.container}>
        <View style={styles.tipo}>
            <View style={[styles.iconView, data.tipo === 'despesa'? {backgroundColor: '#c62c36'}: {backgroundColor: '#049301'}]}>
                <Feather 
                name={data.tipo === 'despesa' ? 'arrow-down' : 'arrow-up'} 
                size={20} 
                color='#FFF'
                />
                <Text style={styles.tipoText}>{data.tipo}</Text>
            </View>
        </View>
        <Text style={styles.valorText}>
            R$ {data.valor}
        </Text>
   </View>
   </TouchableWithoutFeedback>
  );
}