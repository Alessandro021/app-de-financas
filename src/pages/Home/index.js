import React, { useContext, useState, useEffect} from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header/index';
import styles from './styles';
import HistoricoList from '../../components/HistoricoList';
import firebase from '../../services/firebaseConnection';
import { format, isPast } from 'date-fns'

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
            valor: childItem.val().valor,
            date: childItem.val().date
          }

          setHistorico(oldArray => [...oldArray, list].reverse()) //reverse() inverte a renderização do array
        })
      })
    }
    loadList();
  }, [])

  function handleDelete(data){
    if(!isPast(new Date(data.date))){
      alert("Você não pode excluir um registro antigo!")
      return;
    }

    Alert.alert(
      'Cuidado Atenção!',
      `Você deseja excluir ${data.tipo} - Valor: ${data.valor}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleDeleteSuccess(data)
        }
      ]
    )
  }

  async function handleDeleteSuccess(data){
    await firebase.database().ref('historico')
    .child(uid).child(data.key).remove()
    .then(async ()=>{
      let saldoAtual = saldo;
      data.tipo === 'despesa' ? saldoAtual += parseFloat(data.valor) : saldoAtual -= parseFloat(data.valor)

      await firebase.database().ref('users').child(uid)
      .child('saldo').set(saldoAtual);
    })
    .catch((error) => {
      console.log(error)
    })
  }

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
        renderItem={({item}) => (<HistoricoList data={item} deleteItem={handleDelete}/>)}
         />

   </View>
  );
}