import React from "react";
import SignIn from '../pages/Signin/index'
import SignUp from "../pages/signup/index";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";

// const AuthStack = createNativeStackNavigator();
const AuthStack = createStackNavigator();

export default function AuthRoutes(){
    return(
        <AuthStack.Navigator
            screenOptions={{
                cardStyleInterpolator:
                    CardStyleInterpolators.forNoAnimation,
            }}
        >
            <AuthStack.Screen 
            name="SigIn"
            component={SignIn}
            options={{headerShown: false}}
            />

            <AuthStack.Screen 
            name="SignUp"
            component={SignUp}
            options={{
                headerStyle:{
                    backgroundColor: '#131313',
                    borderBottomWidth: 1,
                    borderBottomColor: '#00b94a',
                },
                headerTintColor: '#FFF',
                headerBackTitleVisible: false,
                headerTitle: 'Voltar',
             }}
            />
        </AuthStack.Navigator>
    )
}