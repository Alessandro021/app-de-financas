import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback} from 'react-native';
import Header from '../../components/Header/index'
import styles from './styles';
import Picker from '../../components/Picker';

export default function New() {

  const [valor, setValor] = useState('')
  const [tipo, setTipo] = useState('receita')

 return (
  <TouchableWithoutFeedback // idel para o IOS quando o o teclado abre e nao tem como fechar
    onPress={() => Keyboard.dismiss()}
  >
   <View style={styles.background}>
      <Header/>

      <SafeAreaView style={{alignItems: 'center'}}>
          <TextInput style={styles.input} 
            placeholder='Valor desejado'
            placeholderTextColor='#222'
            keyboardType='numeric'
            returnKeyType='next'
            onSubmitEditing={() => Keyboard.dismiss()}
            value={valor}
            onChangeText={(text) => setValor(text)}
          />
          <Picker  onChange={setTipo} tipo={tipo}/>

          <TouchableOpacity style={styles.submitButton}
          
          >
            <Text style={styles.submitText}>Registrar</Text>

          </TouchableOpacity>

      </SafeAreaView>

   </View>
   </TouchableWithoutFeedback>
  );
}