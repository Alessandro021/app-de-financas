import React, { useContext }from "react";
import { View, ActivityIndicator } from 'react-native'
import AuthRoutes from '../routes/auth.routes'
import AppRoutes from '../routes/app.routes'
import { AuthContext } from "../contexts/auth";

export default function Routes(){

    const {signed, loading} = useContext(AuthContext);

    if(loading){
        return(
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <ActivityIndicator size='large' color="#131313"/>
            </View>
        )
    }
    return(
        signed ? <AppRoutes /> : <AuthRoutes />
    )
}