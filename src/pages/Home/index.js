import React, { useContext, useState, useEffect} from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header/index';
import styles from './styles';
import HistoricoList from '../../components/HistoricoList';
import firebase from '../../services/firebaseConnection';
import { format } from 'date-fns'

export default function Home() {

  const { user } = useContext(AuthContext)
  const [historico, setHistorico] = useState([]);
  const [saldo, setSaldo] = useState(0)

  const uid = user && user.uid;

  useEffect(() => {
    async function loadList(){
      await firebase.database().ref('users').child(uid).on('value', (snapshot) =>{
        setSaldo(snapshot.val().saldo)
      })

      await firebase.database().ref('historico')
      .child(uid)
      .orderByChild('date').equalTo(format(new Date, 'dd/MM/yy'))
      .limitToLast(10).on('value', (snapshot) => {
        setHistorico([]);

        snapshot.forEach((childItem) => {
          let list ={
            key: childItem.key,
            tipo: childItem.val().tipo,
            valor: childItem.val().valor
          }

          setHistorico(oldArray => [...oldArray, list].reverse()) //reverse() inverte a renderização do array
        })
      })
    }
    loadList();
  }, [])
 return (
   <View style={styles.background}>
      <Header />

        <View style={styles.container}>
           <Text style={styles.nome}>{user && user.nome}</Text>
           <Text style={styles.saldo}>R$ {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Text>
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