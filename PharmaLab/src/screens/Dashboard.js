import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  AppState,
  TouchableWithoutFeedback,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { baseUrl } from '../components/Global';
import Background from '../components/Background';
import Header from '../components/Header';
import {Appbar} from 'react-native-paper';
import Spinner from 'react-native-loading-spinner-overlay';
import {HomeScreen,AcceptedScreen,SamplesScreen,CompletedScreen} from '../screens';

import { Card } from 'react-native-elements'


//svgs
import Home from '../assets/Home';
import Employee from '../assets/Employee';
import EmployeeGray from '../assets/EmployeeGray';
import CustomerIcon from '../assets/CustomerIcon';
import FilterSettings from '../assets/FilterSettings';
import SampleIcon from '../assets/SampleIcon';
import CompletedIcon from '../assets/CompletedIcon';
import AcceptedIcon from '../assets/AcceptedIcon';
import HomeIcon from '../assets/HomeIcon';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 'true',
      spinner: false,
      token: '',
      isHome:true,
      isAccepted:false,
      isSamples:false,
      isCompleted:false
    };
  }

  componentDidMount() {
 
  }

  componentWillUnmount() {
   
  }

  onclickHome =()=>{

    this.setState({
        isHome: true,
        isAccepted:false,
        isSamples:false,
        isCompleted:false
      });
    
  }
  
  onclickAccepted =()=>{
      
      this.setState({
        isHome: false,
        isAccepted:true,
        isSamples:false,
        isCompleted:false
      });

  }

  onclickSamples =()=>{
      this.setState({
        isHome: false,
        isAccepted:false,
        isSamples:true,
        isCompleted:false
      });
  }

  onclickCompleted =()=>{

      this.setState({
        isHome: false,
        isAccepted:false,
        isSamples:false,
        isCompleted:true
      });
    
  }


  render() {

    return (
    
        
        <SafeAreaView
          style={{
            width: '100%',
            height:'100%',
            marginTop:  0,
          }}>

          <Spinner
            visible={this.state.spinner}
            color="#085cab" />

              {this.state.isHome && <HomeScreen/>}

              {this.state.isAccepted && <AcceptedScreen/>}

              {this.state.isSamples && <SamplesScreen/>}

              {this.state.isCompleted && <CompletedScreen/>}


          <Card  containerStyle={styles.module_card2}>
              <View style={{flexDirection:'row',marginTop:5}}>
                
                <TouchableOpacity style={{marginTop:5}} onPress={this.onclickHome}>
                    <View style={{alignItems:'center'}}>
                    <Home />
                    <Text style={{fontSize: 10,
    fontFamily: "Poppins-Regular",color:'black'}}>Home</Text>
                    </View>
                  </TouchableOpacity>


                 <TouchableOpacity style={{marginTop:5,marginLeft:40}} onPress={this.onclickAccepted}>
                 <View style={{alignItems:'center'}}>
                        <AcceptedIcon
                          />
                           <Text style={{fontSize: 10,
    fontFamily: "Poppins-Regular",color:'black'}}>Accepted</Text>
                    </View>
                  </TouchableOpacity>

                <TouchableOpacity style={{marginTop:5,marginLeft:40}} onPress={this.onclickSamples}>
                <View style={{alignItems:'center'}}>
                      <SampleIcon
                      />

                       <Text style={{fontSize: 10,
    fontFamily: "Poppins-Regular",color:'black'}}>Samples</Text>
                    </View>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={{marginTop:5,marginLeft:40}} onPress={this.onclickCompleted}>
                  <View style={{alignItems:'center'}}>
                      <CompletedIcon
                      />
                       <Text style={{fontSize: 10,
    fontFamily: "Poppins-Regular",color:'black'}}>Completed</Text>
                    </View>
                  </TouchableOpacity>

                 

              </View>
          </Card>

        </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  module_card2: {
    height: 60,
    width:'100%',
    backgroundColor: 'white',
    alignSelf:'center',
    alignItems:'center',
    padding: 0,
    bottom:0
  },

});

export default Dashboard;
