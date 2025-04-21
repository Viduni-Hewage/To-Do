import {Button, View, Text} from 'react-native';

const MainScreen = ({navigation}: any) =>{
    return (
        <View>
            <Text>Main screen</Text>
            <Button
                title = "Get Started"
                onPress = {() => navigation.navigate('Login')}
            />
        </View>
    );
};

export default MainScreen;
