import React, { useState, useContext} from 'react';
import { View, 
  Text, 
  Image, 
  StyleSheet, 
  TextInput, 
  KeyboardAvoidingView, // esse componente faz com que o teclado nao fique por cima do input
  TouchableOpacity,
  Platform
} from 'react-native';
import { AuthContext } from '../../contexts/auth';


import styles from '../Signin/styles'

export default function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');

  const { signUp } = useContext(AuthContext);

  function handleSignUp(){
    signUp(email, password, nome)
  }

 return (
   <View style={styles.background}>
      <KeyboardAvoidingView style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding': ''}
        enabled
      > 
        <View style={styles.areaInput}>
          <TextInput style={styles.input}
          placeholder='Nome'
          placeholderTextColor="#FFFFFF"
          autoCorrect={false}
          autoCapitalize='none' // nao começa com a primeira letra maiuscula
          value={nome}
          onChangeText={(nome) => setNome(nome)}
          />
        </View>

        <View style={styles.areaInput}>
          <TextInput style={styles.input}
          placeholder='E-mail'
          placeholderTextColor="#FFFFFF"
          autoCorrect={false}
          autoCapitalize='none' // nao começa com a primeira letra maiuscula
          value={email}
          onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={[styles.areaInput]}>
          <TextInput style={styles.input}
          placeholder='Senha'
          placeholderTextColor="#FFFFFF"
          autoCorrect={false}
          autoCapitalize='none' // nao começa com a primeira letra maiuscula
          value={password}
          onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity style={styles.btnsubmit}
        onPress={handleSignUp}
        >
          <Text style={styles.btnText}>Cadastrar</Text>
        </TouchableOpacity>
        
      </KeyboardAvoidingView>
   </View>
  );
}

