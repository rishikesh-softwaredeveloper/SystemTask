import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button,SafeAreaView } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './screens/login-screen';
import SuccessScreen from './screens/success-screen';
import RegistrationScreen from './screens/registration-screen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={styles.root}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='LoginScreen'
            component={LoginScreen}
            options={{title:'Login',headerTitleAlign:'center',headerStyle:{backgroundColor:'#1194f6'}}}
          />
          <Stack.Screen 
            name='SuccessScreen'
            component={SuccessScreen}
            options={{title:'Reffer',headerTitleAlign:'center',headerStyle:{backgroundColor:'#1194f6'}}}
          />
          <Stack.Screen 
            name="RegistrationScreen" 
            component={RegistrationScreen} 
            options={{title:'Register',headerTitleAlign:'center',headerStyle:{backgroundColor:'#1194f6'}}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  root:{
    flex:1
  }
});
