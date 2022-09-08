import React, { useState, useContext } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Alert} from 'react-native';
import Header from '../../components/Header/index'
import styles from './styles';
import Picker from '../../components/Picker';
import firebase from '../../services/firebaseConnection'
import { format } from 'date-fns'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth'


export default function New() {

  const [valor, setValor] = useState('')
  const [tipo, setTipo] = useState('receita')

  const navigation = useNavigation();
  const {user: usuario } = useContext(AuthContext);

  function handleSubmit(){
    Keyboard.dismiss();
    if(isNaN(parseFloat(valor)) || tipo === null){
      alert('Preencha todos os campos!');
      return;
    }
    Alert.alert(
      'Confirmando dados',
      `Tipo ${tipo} - Valor: ${parseFloat(valor)}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleAdd()
        }
      ]
    )
  }

  async function handleAdd(){
    let uid = usuario.uid;
    let key = await firebase.database().ref('historico').child(uid).push().key
    await firebase.database().ref('historico').child(uid).child(key).set({
      tipo: tipo,
      valor: parseFloat(valor),
      date: format(new Date(), 'dd/MM/yy')
    })

    let user = firebase.database().ref('users').child(uid)
    await user.once('value').then((snapshot) => {
      let saldo = parseFloat(snapshot.val().saldo)

      tipo === 'despesa' ? saldo -= parseFloat(valor) : saldo += parseFloat(valor);

      user.child('saldo').set(saldo);
    })
    Keyboard.dismiss();
    setValor('')
    navigation.navigate('Home');
  }

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
          onPress={handleSubmit}
          >
            <Text style={styles.submitText}>Registrar</Text>

          </TouchableOpacity>

      </SafeAreaView>

   </View>
   </TouchableWithoutFeedback>
  );
}