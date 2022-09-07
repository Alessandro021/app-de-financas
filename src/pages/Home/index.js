import React, { useContext, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header/index';
import styles from './styles';
import HistoricoList from '../../components/HistoricoList';

export default function Home() {

  const { user } = useContext(AuthContext)
  const [historico, setHistorico] = useState([
    { key: '1', tipo: 'receita', valor: 1200 },
    { key: '2', tipo: 'despesa', valor: 200 },
    { key: '3', tipo: 'receita', valor: 1300 },
    { key: '4', tipo: 'receita', valor: 500 },
  ]);
 return (
   <View style={styles.background}>
      <Header />

        <View style={styles.container}>
           <Text style={styles.nome}>{user && user.nome}</Text>
           <Text style={styles.saldo}>R$ 123, 45</Text>
        </View>

        <Text style={styles.title}>Ultimas movimentações</Text>

        <FlatList style={styles.list}
        showsHorizontalScrollIndicator={false}
        data={historico}
        keyExtractor={(item) => item.key}
        renderItem={({item}) => (<HistoricoList data={item}/>)}
         />

   </View>
  );
}