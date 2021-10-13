import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import { theme } from './src/core/theme';
import {
  SplashScreen,
 ForgotPasswordScreen,
 SetPasswordScreen,
  VerifyOtpScreen,
  ChangePasswordScreen,
  LoginScreen,
  Dashboard,
    HomeScreen,
  AcceptedScreen,
  SamplesScreen,
  CompletedScreen,
} from './src/screens';



  

const Stack = createStackNavigator()
const App = () => {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}/>
            <Stack.Screen
            name="SetPasswordScreen"
            component={SetPasswordScreen}/>
            <Stack.Screen
            name="ChangePasswordScreen"
            component={ChangePasswordScreen}/>
            <Stack.Screen name="VerifyOtpScreen" component={VerifyOtpScreen} />

            <Stack.Screen name="Dashboard" component={Dashboard} />

            <Stack.Screen name="HomeScreen" component={HomeScreen} />

            <Stack.Screen name="AcceptedScreen" component={AcceptedScreen} />

            <Stack.Screen name="SamplesScreen" component={SamplesScreen} />

            <Stack.Screen name="CompletedScreen" component={CompletedScreen} />

            
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
