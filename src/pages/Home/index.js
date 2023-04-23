import React, { useContext, useState, useEffect} from 'react';
import { View, Text, FlatList, Alert, TouchableOpacity, Platform } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header/index';
import styles from './styles';
import HistoricoList from '../../components/HistoricoList';
import firebase from '../../server/firebaseConection';
import { format, isBefore } from 'date-fns'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import DatePicker from '../../components/DatePicker';

export default function Home() {

  const { user } = useContext(AuthContext)
  const [historico, setHistorico] = useState([]);
  const [saldo, setSaldo] = useState(0)

  const uid = user && user.uid;

  const [ newDate, setNewDate] = useState( new Date());
  const [show, setShow] = useState(false);

  useEffect(() => {
    async function loadList(){
      await firebase.database().ref('users').child(uid).on('value', (snapshot) =>{
        setSaldo(snapshot.val().saldo)
      })

      await firebase.database().ref('historico')
      .child(uid)
      .orderByChild('date').equalTo(format(newDate, 'dd/MM/yyyy'))
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
  }, [newDate])

  function handleDelete(data){
    //pegando data do item
    const [diaItem, mesItem, anoItem ] = data.date.split('/')
    const dateItem = new Date(`${anoItem}/${mesItem}/${diaItem}`);

    //pegando data de hoje

    const formatDiaHoje = format(new Date(), 'dd/MM/yyyy');
    const [ diaHoje, mesHoje, anoHoje] = formatDiaHoje.split('/');
    const dateHoje = new Date(`${anoHoje}/${mesHoje}/${diaHoje}`);
  

    // if(isBefore(dateItem, dateHoje)){
    //   alert("Você não pode excluir um registro antigo!")
    //   return;
    // }

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

    function handleShowPicker(){
      setShow(true)
    }

    function handleClose(){
      setShow(false)
    }

    const onChange = (date) => {
        setShow(Platform.OS === 'ios')
        setNewDate(date)
    }

 return (
   <View style={styles.background}>
      <Header />

        <View style={styles.container}>
           <Text style={styles.nome}>{user && user.nome}</Text>
           <Text style={styles.saldo}>R$ {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Text>
        </View>

        <View style={styles.area}>
          <TouchableOpacity
            onPress={handleShowPicker}
          >
            <MaterialIcons name='event' color='#FFF' size={30}/>
          </TouchableOpacity>
          <Text style={styles.title}>Ultimas movimentações</Text>
        </View>

        <FlatList style={styles.list}
        showsHorizontalScrollIndicator={false}
        data={historico}
        keyExtractor={(item) => item.key}
        renderItem={({item}) => (<HistoricoList data={item} deleteItem={handleDelete}/>)}
        ListEmptyComponent={<Text style={styles.listaVazia}>Não ha nenhuma receita na aqui...</Text>}
         />

         {
          show && (
            <DatePicker 
              onClose={handleClose}
              date={newDate}
              onChange={onChange}
            />
          )
         }

   </View>
  );
}