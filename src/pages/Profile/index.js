import React, { useContext} from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import { AuthContext } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {

  const {user, signOut} = useContext(AuthContext)
  const navigation = useNavigation();
 return (
   <View style={styles.container}>
    <Text style={styles.nome}>
      { user && user.nome}
    </Text>

    <TouchableOpacity style={styles.newLink}
      onPress={() => navigation.navigate('Registrar')}
    >
      <Text style={styles.newText}>
        Registrar gastos
      </Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.logout}
      onPress={() => signOut()}
    >
      <Text style={styles.logoutText}>
        Sair
      </Text>
    </TouchableOpacity>
   </View>
  );
}