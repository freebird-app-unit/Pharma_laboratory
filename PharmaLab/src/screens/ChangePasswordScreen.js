import React, { useState } from 'react'
import Background1 from '../components/Background1'
import BackButton from '../components/BackButton'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { nameValidator } from '../helpers/nameValidator'
import { baseUrl } from '../components/Global';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  AppState,
  TouchableWithoutFeedback
} from 'react-native';
import {Appbar} from 'react-native-paper';

const ChangePasswordScreen = ({ navigation }) => {
  const [password, setPassword] = useState({ value: '', error: '' })

  const sendOTP = () => {
    const passwordError = nameValidator(password.value)
    if (passwordError) {
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.navigate('Dashboard')
  }

  return (
    <View style={{flex: 1,backgroundColor: 'white'}}>
    <View style={{width: '100%', marginTop: 0}}>

        <Appbar.Header style={{backgroundColor: 'transparent'}} >
            
            <Appbar.BackAction color='#2DA3FC' onPress={() => navigation.goBack()} />
            <Appbar.Content
              style={{alignItems: 'center'}}
              color='#2DA3FC'
              title="Change Password"
              titleStyle={{fontSize:16,fontFamily: "Poppins-SemiBold"}}
            />
            <Appbar.Action  color="transparent" onPress={() => {

                    
                  }} />
          </Appbar.Header>


        </View>

<View style={{flex: 1, marginTop:'1%',marginLeft:'5%',marginRight:'5%'}}>

<TextInput
        label="Current Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        autoCapitalize="none"
        
      />

      
      <TextInput
        label="New Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        autoCapitalize="none"
        
      />

       <TextInput
        label="Confirm Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        autoCapitalize="none"
        
      />

      <Button
        mode="contained"
        onPress={sendOTP}
        style={{ marginTop: 16,fontFamily:'Poppins-SemiBold' }}
      >
        Update Password
      </Button>
</View>

    </View>
  )
}

export default ChangePasswordScreen
