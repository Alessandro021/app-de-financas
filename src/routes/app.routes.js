import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from '../pages/Home/index'
import Profile from '../pages/Profile/index';
import New from '../pages/New/index';
import CustomDrower from "../components/CustomDrower";

const AppDrawer = createDrawerNavigator();

export default function AppRoutes(){
    return(
        <AppDrawer.Navigator

        drawerContent={ (props) => <CustomDrower {...props} />}
        screenOptions={{
            drawerStyle: {
                backgroundColor: "#171717",
                fontWeight: 'bold'
            },
            drawerLabelStyle: {
                fontWeight: 'bold',
                fontSize: 20
            },
            drawerActiveTintColor: '#FFF',
            drawerActiveBackgroundColor: '#00b94a',
            drawerInactiveBackgroundColor: '#000',
            drawerInactiveTintColor: '#DDD',
            drawerItemStyle: {
                marginVertical: 5,
            }
        }}        
        >
            <AppDrawer.Screen 
            name="Home"
            component={Home}
            options={{headerShown: false}}
            />

            <AppDrawer.Screen
            name='Registrar'
            component={New}
            options={{headerShown: false}}
            />

            <AppDrawer.Screen
            name='Perfil'
            component={Profile}
            options={{headerShown: false}}
            />
        </AppDrawer.Navigator>
    )
}