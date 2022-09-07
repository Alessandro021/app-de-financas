import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from '../pages/Signin/index'
import SignUp from "../pages/signup/index";

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes(){
    return(
        <AuthStack.Navigator>
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
                    borderBottomColor: '#00b94a'
                },
                headerTintColor: '#FFF',
                headerBackTitleVisible: false,
                headerTitle: 'Voltar',
             }}
            />
        </AuthStack.Navigator>
    )
}