import React, {useState,useRef} from 'react';
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  Image,
  StatusBar,
  ScrollView
} from 'react-native';
import {Card} from 'react-native-elements';
import { Searchbar,Button,RadioButton } from 'react-native-paper';
import { theme } from '../core/theme'

import BackButton from '../components/BackButton';
import TextInput from '../components/TextInput';

//svgs
import LabIcon from '../assets/LabName';
import DateIcon from '../assets/Date';




const BookAppointmentScreen = ({navigation}) => {


const [patientname, setPatientname] = useState({
    value: '',
    error: '',
  });

const [age, setAge] = useState({
    value: '',
    error: '',
  });

  const [mobile, setMobile] = useState({
    value: '',
    error: '',
  });


  const onChangedPatientName = (text) => {
    setPatientname({value: text, error: ''})
  }

  const onChangedMobileNumber = (text) => {
    setMobile({value: text.replace(/[^0-9]/g, ''), error: ''})
  }


  const onChangedAge = (text) => {
    setAge({value: text, error: ''})
  }


const [checkedGender, setCheckedGender] = React.useState('first');
const [checkedTestAt, setCheckedTestAt] = React.useState('first');
const [checkedPhysicals, setCheckedPhysicals] = React.useState('first');

const [homeAddress, setHomeAddress] = useState({value: '', error: ''});
const [homeDeliveryAddress, setHomeDeliveryAddress] = useState({value: '', error: ''});
  

const goBack =()=>{
    navigation.goBack();
}

  const goToDashboard = () => {
    const navigation = this.props.navigation;
    let canGoBack = navigation.canGoBack();
    return canGoBack
      ? navigation.goBack()
      : navigation.replace(this.props.route.params.prevScrName);
  };




  return (
    <SafeAreaView style={styles.container}>
  

    <View>

      <View style={{flexDirection:'row',height:50,marginTop:8,marginBottom:16,alignItems:'center'}}>
        
          <TouchableOpacity onPress={goBack} style={styles.containerBack}>
            <Image style={styles.image} source={require('../assets/arrow_back.png')} />
          </TouchableOpacity>
        
        <View style={{width:'100%',alignItems:'center'}}>
            <Text style={{fontSize: 22,
                  fontFamily: "Poppins-Medium",
                  color:'#1F1F1F'}}>Book Appointment</Text>
        </View>
      </View>


  <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          keyboardDismissMode="on-drag"
          
          contentContainerStyle={{ paddingBottom: 60}}
          style={{backgroundColor: 'white',height:'100%'}}>      

<Text style={{fontSize: 16, marginLeft:16,
            fontFamily: "Poppins-Regular",
            color:'#1F1F1F'}}>Patient Name</Text>

            <TextInput
              label="Patient Name"
              returnKeyType="next"
              value={patientname.value}
              onChangeText={text => onChangedPatientName(text)}
              error={!!patientname.error}
              errorText={patientname.error}
              autoCapitalize="none"
              autoCompleteType="off"
              textContentType="none"
              
              
            />

<Text style={{fontSize: 16, marginLeft:16,
            marginTop:8,
            fontFamily: "Poppins-Regular",
            color:'#1F1F1F'}}>Mobile Number</Text>   

            <TextInput
              label="Mobile Number"
              returnKeyType="next"
              value={mobile.value}
              onChangeText={text => onChangedMobileNumber(text)}
              error={!!mobile.error}
              errorText={mobile.error}
              autoCapitalize="none"
              autoCompleteType="off"
              textContentType="none"
              keyboardType="phone-pad"
              maxLength={10}
            />         


<View style={{flexDirection:"row",alignItems:'center'}}>
<Text style={{fontSize: 16, marginLeft:16,
  marginTop:8,
            fontFamily: "Poppins-Regular",
            color:'#1F1F1F'}}>Gender</Text>

      <RadioButton.Group onValueChange={newValue => setCheckedGender(newValue)} value={checkedGender}>

      <View style={{flexDirection:'row'}}>
      <View style={{flexDirection:"row",alignItems:'center'}}>
        
        <RadioButton color={theme.colors.buttonColor} value="first" /><Text style={{fontFamily:'Poppins-Regular',
                      fontSize: 16,
                      color: checkedGender === 'first' ? theme.colors.buttonColor : theme.colors.textGray}}>Male</Text>
      </View>
      <View style={{flexDirection:"row",alignItems:'center'}}>
        
        <RadioButton color={theme.colors.buttonColor} value="second" /><Text style={{fontFamily:'Poppins-Regular',
                      fontSize: 16,
                      color:checkedGender === 'second' ? theme.colors.buttonColor : theme.colors.textGray}}>Female</Text>
      </View>
      </View>
    </RadioButton.Group>

</View>

<Text style={{fontSize: 16, marginLeft:16,
            marginTop:8,
            fontFamily: "Poppins-Regular",
            color:'#1F1F1F'}}>Age</Text>

<TextInput
              label="Age"
              returnKeyType="next"
              value={age.value}
              onChangeText={text => onChangedAge(text)}
              error={!!age.error}
              errorText={age.error}
              autoCapitalize="none"
              autoCompleteType="off"
              textContentType="none"
              
              
            />            


<View style={{flexDirection:"row",alignItems:'center'}}>
<Text style={{fontSize: 16, marginLeft:16,
  marginTop:8,
            fontFamily: "Poppins-Regular",
            color:'#1F1F1F'}}>Test At</Text>  


  <RadioButton.Group onValueChange={newValue => setCheckedTestAt(newValue)} value={checkedTestAt}>
      <View style={{flexDirection:'row'}}>
      <View style={{flexDirection:"row",alignItems:'center'}}>
        
        <RadioButton color={theme.colors.buttonColor} value="first" /><Text style={{fontFamily:'Poppins-Regular',
                      fontSize: 16,
                      color: checkedTestAt === 'first' ? theme.colors.buttonColor : theme.colors.textGray}}>Lab</Text>
      </View>
      <View style={{flexDirection:"row",alignItems:'center'}}>
        
        <RadioButton color={theme.colors.buttonColor} value="second" /><Text style={{fontFamily:'Poppins-Regular',
                      fontSize: 16,
                      color: checkedTestAt === 'second' ? theme.colors.buttonColor : theme.colors.textGray}}>Home</Text>
      </View>
      </View>
    </RadioButton.Group>

</View>

 {checkedTestAt === 'second' && <View style={{marginTop: 0, marginBottom: 0}}>
        <TextInput
          style={styles.postInput}
          onChangeText={text =>
            setHomeAddress({value: text, error: ''})
          }
          multiline={true}
          value={homeAddress.value}
          numberOfLines={5}
          label="Address"
          underlineColorAndroid="transparent"
          returnKeyType="next"
          require={true}
          error={!!homeAddress.error}
          errorText={homeAddress.error}
          maxLength={200}
        />
 </View>}




<Text style={{fontSize: 16, 
            marginLeft:16,
            marginTop:8,
            fontFamily: "Poppins-Regular",
            color:'#1F1F1F'}}>Physicals Report</Text>   


    <RadioButton.Group onValueChange={newValue => setCheckedPhysicals(newValue)} value={checkedPhysicals} >
      <View style={{flexDirection:'row',marginLeft:10}}>
      
      <View style={{flexDirection:"row",alignItems:'center'}}>
        
        <RadioButton color={theme.colors.buttonColor} value="first" /><Text style={{fontFamily:'Poppins-Regular',
                      fontSize: 16,
                      color: checkedPhysicals === 'first' ? theme.colors.buttonColor : theme.colors.textGray}}>Collect</Text>
      </View>
      
      <View style={{flexDirection:"row",alignItems:'center'}}>
        
        <RadioButton color={theme.colors.buttonColor} value="second" />
                  <Text style={{fontFamily:'Poppins-Regular',
                      fontSize: 16,
                      color: checkedPhysicals === 'second' ? theme.colors.buttonColor : theme.colors.textGray }}>Home Delivery</Text>
      </View>
      
      </View>
    </RadioButton.Group>


     {checkedPhysicals === 'second' && <View style={{marginTop: 0, marginBottom: 0}}>
        <TextInput
          style={styles.postInput}
          onChangeText={text =>
            setHomeDeliveryAddress({value: text, error: ''})
          }
          multiline={true}
          value={homeDeliveryAddress.value}
          numberOfLines={5}
          label="Address"
          underlineColorAndroid="transparent"
          returnKeyType="next"
          require={true}
          error={!!homeDeliveryAddress.error}
          errorText={homeDeliveryAddress.error}
          maxLength={200}
        />
     </View>}



            <View style={{alignItems:'center',marginTop:15}}>
            <Button
                      mode="contained"
                      uppercase={false}
                      style={{height:45,width:'65%'}}
                      color={theme.colors.buttonColor}
                      labelStyle={{
                      fontFamily:'Poppins-Medium',
                      fontSize: 16,
                      color: 'white',
                    }}>
                      Select Test
                    </Button>

                    </View>


</ScrollView>

      </View> 

      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop:0,
    backgroundColor:'white'
  },
  item: {
    height: 64,
    width:'100%',
    backgroundColor: 'white',
    elevation: 5,
  },
  patientname:{
    fontSize: 12,
    fontFamily: "Poppins-SemiBold",
    color:'black'
  },
  patientaddr: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color:'black'
  },
  stylab:{
    fontSize: 8,
    fontFamily: "Poppins-Regular",
    color:'black'
  },
  styvdate:{
    fontSize: 8,
    fontFamily: "Poppins-Regular",
    color:'gray'
  },
  stypay:{
    fontSize: 12,
    fontFamily: "Poppins-Medium",
    color:'red'
  },
  lineStyle:{
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  postInput: {
    fontSize: 15,
    width: '90%',
    fontFamily: 'Outrun future',
    backgroundColor: theme.colors.surface,
    textAlignVertical: 'top',
  },
  containerBack:{
    position: 'absolute',
    top: 15,
    left:12,
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default BookAppointmentScreen;
