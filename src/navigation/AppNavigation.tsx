import React from "react";
import MainScreen from "../screens/Main.screen";
import LoginScreen from "../screens/Login.screen";
import LoadingScreen from "../screens/Loading.screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AppNavigation = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen name = "Loading" component={LoadingScreen} options = {{headerShown: false}} />
            <Stack.Screen name = "Main" component={MainScreen} />
            <Stack.Screen name = "Login" component={LoginScreen} options = {{headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default AppNavigation;