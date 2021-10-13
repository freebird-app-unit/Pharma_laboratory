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
  StatusBar
} from 'react-native';
import {Card} from 'react-native-elements';
import { Searchbar,Button } from 'react-native-paper';
import { theme } from '../core/theme'

//svgs
import LabIcon from '../assets/LabName';
import DateIcon from '../assets/Date';

const CompletedScreen = ({navigation}) => {


const [searchQuery, setSearchQuery] = React.useState('');
const onChangeSearch = query => setSearchQuery(query);


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'John Deo1',
    addr1:'711-2880 Nulla St.',
    addr2:'Mankato Mississippi 96522',
    addr3:'(257)563-7401',
    labname:'Lab name',
    vdate:'10-10-2020 10:00pm'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'John Deo2',
    addr1:'711-2880 Nulla St.',
    addr2:'Mankato Mississippi 96522',
    addr3:'(257)563-7401',
    labname:'Lab name',
    vdate:'10-10-2020 10:00pm'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'John Deo3',
    addr1:'711-2880 Nulla St.',
    addr2:'Mankato Mississippi 96522',
    addr3:'(257)563-7401',
    labname:'Lab name',
    vdate:'10-10-2020 10:00pm',
    statusPayment:'Unpaid Rs500'
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
    title: 'John Deo4',
    addr1:'711-2880 Nulla St.',
    addr2:'Mankato Mississippi 96522',
    addr3:'(257)563-7401',
    labname:'Lab name',
    vdate:'10-10-2020 10:00pm'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6c',
    title: 'John Deo5',
    addr1:'711-2880 Nulla St.',
    addr2:'Mankato Mississippi 96522',
    addr3:'(257)563-7401',
    labname:'Lab name',
    vdate:'10-10-2020 10:00pm'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7d',
    title: 'John Deo6',
    addr1:'711-2880 Nulla St.',
    addr2:'Mankato Mississippi 96522',
    addr3:'(257)563-7401',
    labname:'Lab name',
    vdate:'10-10-2020 10:00pm',
    statusPayment:'Unpaid Rs500'
  },
];

const Item = ({ dataItem }) => (
  <Card style={styles.item}>

    <Text style={styles.patientname}>{dataItem.title}</Text>
    
    <View style={{flexDirection: 'row',flex:1,width:'100%'}}>
          <Text style={styles.patientaddr}>{dataItem.addr1}{"\n"}{dataItem.addr2}{"\n"}{dataItem.addr3}</Text>
          
   </View>
    
    <View
      style={styles.lineStyle}
    />

    <View style={{flexDirection: 'row',flex:1,width:'100%',marginTop:4}}>

      <View style={{flexDirection: 'row',flex:1,alignItems:'center'}}>
        <LabIcon/>
        <Text style={styles.stylab}>{dataItem.labname}</Text>
      </View>
      
      <View style={{flexDirection: 'row',flex:1.5,alignItems:'center',}}>
          <DateIcon/>
        <Text style={styles.styvdate}>{dataItem.vdate}</Text>
      </View>
      
      <View style={{flexDirection: 'row',flex:1,alignItems:'center'}}>
        <Text style={styles.stypay}></Text>
      </View>

    </View>

  </Card>
);

 const renderItem = ({ item }) => (
    <Item dataItem={item} />
 );

  return (
    <SafeAreaView style={styles.container}>

    <View>

        <View style={{height:50,flexDirection:'row'}}>
        <Text style={theme.screenTitle}>Complete</Text>
        <DateIcon style={{alignItems:'flex-end',marginLeft:170}}/>
      </View>

      <Searchbar
        placeholder="Search Order or patient name"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={theme.searchStyle}
      />

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingBottom: 10 }}
       />

       </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: StatusBar.currentHeight || 0,
    marginBottom:100
  },
  item: {
    height: 66,
    width:'100%',
    position:'absolute',
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
  }
});

export default CompletedScreen;
