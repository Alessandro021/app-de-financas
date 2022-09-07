import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StatusBar } from 'react-native';
// import firebase from './src/services/firebaseConnection';
import Routes from './src/routes/index'
import  { NavigationContainer } from '@react-navigation/native'
import AuthProvider from './src/contexts/auth';
console.disableYellowBox=true;

/**
 * pacotes estalados de navegação={
 * expo install @react-navigation/native
 * npx expo install react-native-screens react-native-safe-area-context
 * expo install @react-navigation/native-stack
 * expo install @react-navigation/drawer
 * expo install react-native-gesture-handler react-native-reanimated
 * https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation
 * import 'react-native-gesture-handler';
 * }
 * 
 * => icons
 * expo install react-native-vector-icons
 * 
 */

export default function App() {
 return (
   <NavigationContainer>
    <AuthProvider>
        <StatusBar backgroundColor='#131313' barStyle='light-content' />
        <Routes/>
    </AuthProvider>
   </NavigationContainer>
  );
}