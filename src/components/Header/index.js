import React from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from "@react-navigation/native";


export default function Header() {
    const navigation = useNavigation();
 return (
   <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.buttonMenu}
            onPress={() => navigation.toggleDrawer()}
        >
            <Feather name='menu' color='#FFF' size={35}/>
        </TouchableOpacity>
   </SafeAreaView>
  );
}