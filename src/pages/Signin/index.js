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
import {useNavigation} from '@react-navigation/native'
import styles from './styles'
import { AuthContext } from '../../contexts/auth';

export default function SignIn() {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useContext(AuthContext)

  function handleLogin(){
    signIn(email, password)
  }

 return (
   <View style={styles.background}>
      <KeyboardAvoidingView style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding': ''}
        enabled
      > 
        <Image style={styles.logo}
          source={require('../../assets/Logo.png')}
        />
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
        onPress={handleLogin}
        >
          <Text style={styles.btnText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnLink}
        onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.linkText}>Criar uma conta!</Text>
        </TouchableOpacity>
        
      </KeyboardAvoidingView>
   </View>
  );
}

