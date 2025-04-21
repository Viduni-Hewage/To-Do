import React from "react";
import HomeScreen from "../screens/Home.screen";
import DetailsScreen from "../screens/Details.screen";
import LoadingScreen from "../screens/Loading.screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AppNavigation = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen name = "Loading" component={LoadingScreen} options = {{headerShown: false}} />
            <Stack.Screen name = "Home" component={HomeScreen} />
            <Stack.Screen name = "Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
};

export default AppNavigation;