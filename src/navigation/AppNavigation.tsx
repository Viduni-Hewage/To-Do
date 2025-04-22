import React from "react";
import MainScreen from "../screens/Main.screen";
import LoginScreen from "../screens/Login.screen";
import LoadingScreen from "../screens/Loading.screen";
import SignInScreen from "../screens/SignIn.screen";
import FirstadScreen from "../screens/Firstad.screen";
import SecondadScreen from "../screens/Secondad.screen";
import ThirdadScreen from "../screens/Thirdad.screen";
import HomeScreen from "../screens/Home.screen";
import CustomHeader from "../components/Header";
import AddTaskScreen from "../screens/Addtask.screen";
import EditTaskScreen from "../screens/Edittask.screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AppNavigation = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen name = "Loading" component={LoadingScreen} options = {{headerShown: false}} />
            <Stack.Screen name = "Main" component={MainScreen} options = {{headerShown: false}}/>
            <Stack.Screen name = "Login" component={LoginScreen} options = {{headerShown: false}}/>
            <Stack.Screen name = "SignIn" component={SignInScreen} options = {{headerShown: false}}/>
            <Stack.Screen name = "Firstad" component={FirstadScreen} options = {{headerShown: false}}/>
            <Stack.Screen name = "Secondad" component={SecondadScreen} options = {{headerShown: false}}/>
            <Stack.Screen name = "Thirdad" component={ThirdadScreen} options = {{headerShown: false}}/>
            <Stack.Screen name = "Home" component={HomeScreen} options = {{header: () => <CustomHeader canGoBack={false} />, headerShown: false }}/>
            <Stack.Screen name = "Addtask" component={AddTaskScreen} options = {{header: () => <CustomHeader canGoBack={true} />, headerShown: false }}/>
            <Stack.Screen name = "Edittask" component={EditTaskScreen} options = {{header: () => <CustomHeader canGoBack={true} />, headerShown: false }}/>

        </Stack.Navigator>
    );
};

export default AppNavigation;