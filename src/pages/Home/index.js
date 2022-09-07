import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header/index';
import styles from './styles';

export default function Home() {

  const { user } = useContext(AuthContext)
 return (
   <View style={styles.background}>
      <Header />

        <View style={styles.container}>
           <Text style={styles.nome}>Alessandro</Text>
           <Text style={styles.saldo}>R$ 123, 45</Text>
        </View>

        <Text style={styles.title}>Ultimas movimentações</Text>

   </View>
  );
}