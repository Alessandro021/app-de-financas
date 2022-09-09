import React, { useContext} from 'react';
import { View, Text, Image} from 'react-native';
import { DrawerItemList, DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import { AuthContext } from '../../contexts/auth';

export default function CustomDrower(props) {

    const { user, signOut} = useContext(AuthContext);
 return (
   <DrawerContentScrollView {...props}>
        <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 30}}>
            <Image 
            source={require('../../assets/Logo.png')}
            style={{width: 85, height: 85}}
            resizeMode='contain'
            />

            <Text style={{color: '#FFF', fontSize: 18, marginTop: 10}}>
                Bem vindo(a)
            </Text>

            <Text style={{color: '#FFF', fontSize: 17, marginTop: 10, fontWeight: 'bold', paddingBottom: 25}}>
                { user && user.nome}
            </Text>
        </View>

        <DrawerItemList {...props}/>
        
        <DrawerItem
        {...props}

        labelStyle= {{
            fontWeight: 'bold',
            fontSize: 20
        }}

        activeTintColor= '#FFF'
        activeBackgroundColor= '#00b94a'
        inactiveBackgroundColor = '#c62c36'
        inactiveTintColor= '#DDD'
        style= {{
            marginVertical: 5, 
        }}
        label="Sair do app"
        onPress={() => signOut()}
        />
   </DrawerContentScrollView>
  );
}