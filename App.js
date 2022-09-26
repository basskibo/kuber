import { StatusBar } from 'expo-status-bar';
import { useState , useEffect} from 'react'
import {  SafeAreaView, StyleSheet, TextInput, Text, Keyboard, Alert,  Button,
  useColorScheme } from 'react-native';
import {Provider } from "react-redux";
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
            <Stack.Screen 
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown: false
            }}
            />    
            <Stack.Screen 
            name="MapScreen"
            component={MapScreen}
            options={{
              headerShown: false
            }}
            />
        </Stack.Navigator>
        {/* <HomeScreen/> */}
      {/* <SafeAreaView style={styles.container}>
      <Text> Building Kuber </Text>
        </SafeAreaView> */}
      </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#e0e7ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: '#ffff',
  },
  text: {
    color: '#cbd5e1',
  }

});
