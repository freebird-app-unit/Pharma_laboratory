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

import { Searchbar,Button } from 'react-native-paper';
import { theme } from '../core/theme'
import { Card,Tab,TabView } from 'react-native-elements'


//svgs
import LabIcon from '../assets/LabName';
import DateIcon from '../assets/Date';

const HomeAdminScreen = ({navigation}) => {

const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const [index, setIndex] = useState(0);


  const [orderFlag, setOrder] = useState(true);
  const [pendingFlag, setPending] = useState(false);
const [sentFlag, setSent] = useState(false);


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'John Deo1',
    addr1:'CBC (Complete blood count)',
    addr2:'WBC (White blood cells)',
    addr3:'MPV (Mean platelet volume)',
    labname:'Home',
    vdate:'10-10-2020 10:00pm',
    statusPayment:'Paid ₹ 800',
    isPaid:true,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'John Deo2',
    addr1:'711-2880 Nulla St.',
    addr2:'Mankato Mississippi 96522',
    addr3:'(257)563-7401',
    labname:'Lab',
    vdate:'10-10-2020 10:00pm',
    statusPayment:'Unpaid ₹ 500',
    isPaid:false,
    
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'John Deo3',
    addr1:'711-2880 Nulla St.',
    addr2:'Mankato Mississippi 96522',
    addr3:'(257)563-7401',
    labname:'Lab name',
    vdate:'10-10-2020 10:00pm',
    statusPayment:'Unpaid Rs500',
    isPaid:false,
  },
    {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
    title: 'John Deo4',
    addr1:'711-2880 Nulla St.',
    addr2:'Mankato Mississippi 96522',
    addr3:'(257)563-7401',
    labname:'Lab name',
    vdate:'10-10-2020 10:00pm',
    isPaid:false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6c',
    title: 'John Deo5',
    addr1:'711-2880 Nulla St.',
    addr2:'Mankato Mississippi 96522',
    addr3:'(257)563-7401',
    labname:'Lab name',
    vdate:'10-10-2020 10:00pm',
    isPaid:false,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7d',
    title: 'John Deo6',
    addr1:'711-2880 Nulla St.',
    addr2:'Mankato Mississippi 96522',
    addr3:'(257)563-7401',
    labname:'Lab name',
    vdate:'10-10-2020 10:00pm',
    statusPayment:'Unpaid Rs500',
    isPaid:false,
  },
];


const Item = ({ dataItem }) => (
  <Card style={styles.item}>

    <Text style={styles.patientname}>{dataItem.title}</Text>
    
    <View style={{flexDirection: 'row',flex:1,width:'100%'}}>
    <Text style={styles.patientaddr}>{dataItem.addr1}{"\n"}{dataItem.addr2}{"\n"}{dataItem.addr3}</Text>

                    <Button
                      mode="contained"
                      uppercase={false}
                      style={{ width: '30%',height:35,alignItems:'center',flex:1,marginLeft:40}}
                      color={theme.colors.buttonColor}
                      labelStyle={{
                      fontFamily:'Poppins-Medium',
                      fontSize: 10,
                      color: 'white',
                    }}>
                      Accept
                    </Button>
                    </View>
    
    <View
      style={styles.lineStyle}
    />

    <View style={{flexDirection: 'row',flex:1,width:'100%',marginTop:4}}>

    <View style={{flexDirection: 'row',flex:1.5,alignItems:'center',}}>
          <DateIcon/>
        <Text style={styles.styvdate}>{dataItem.vdate}</Text>
      </View>


      <View style={{flexDirection: 'row',flex:1,alignItems:'center'}}>
        <LabIcon/>
        <Text style={styles.stylab}>{dataItem.labname}</Text>
      </View>
      
      
      
      <View style={{flexDirection: 'row',flex:1,alignItems:'center'}}>
        <Text style={{fontSize: 12,
    fontFamily: "Poppins-Medium",
    color:dataItem.isPaid?'#3DB24B':'#F34236'}}>{dataItem.statusPayment}</Text>
      </View>

    </View>

  </Card>
);

 const renderItem = ({ item }) => (
    <Item dataItem={item} />
 );



 const ItemPending = ({ dataItem }) => (
  <Card style={styles.item}>

    <Text style={styles.patientname}>{dataItem.title}</Text>
    
    <View style={{flexDirection: 'row',flex:1,width:'100%'}}>

            <Image
                  style={{height:50,width:50,marginLeft:0,marginBottom:10,marginTop:10}}
                  source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png'
                }}
                />
              <Button
                mode="contained"
                uppercase={false}
                style={{ height:35,alignItems:'center',marginLeft:150,marginTop:10}}
                color={theme.colors.buttonColor}
                labelStyle={{
                fontFamily:'Poppins-Medium',
                fontSize: 10,
                color: 'white',
              }}>
                Quotation
              </Button>
      </View>
    
    <View
      style={styles.lineStyle}
    />

    <View style={{flexDirection: 'row',flex:1,width:'100%',marginTop:4}}>

    <View style={{flexDirection: 'row',flex:1.5,alignItems:'center',}}>
          <DateIcon/>
        <Text style={styles.styvdate}>{dataItem.vdate}</Text>
      </View>


      <View style={{flexDirection: 'row',flex:1,alignItems:'center'}}>
        <LabIcon/>
        <Text style={styles.stylab}>{dataItem.labname}</Text>
      </View>
      
      
      
      <View style={{flexDirection: 'row',flex:1,alignItems:'center'}}>
        <Text style={{fontSize: 12,
    fontFamily: "Poppins-Medium",
    color:dataItem.isPaid?'#3DB24B':'#F34236'}}></Text>
      </View>

    </View>

  </Card>
);


  const renderItemPending = ({ item }) => (
    <ItemPending dataItem={item} />
 );




  const ItemSent = ({ dataItem }) => (
  <Card style={styles.item}>

    <Text style={styles.patientname}>{dataItem.title}</Text>
    
    <View style={{flexDirection: 'row',flex:1,width:'100%'}}>
    <Image
          style={{height:50,width:50,marginLeft:0,marginBottom:10,marginTop:2,marginRight:10}}
          source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png'
        }}
        />
        <Text style={styles.patientaddr}>{dataItem.addr1}{"\n"}{dataItem.addr2}{"\n"}{dataItem.addr3}</Text>

                    
      </View>
    
    <View
      style={styles.lineStyle}
    />

    <View style={{flexDirection: 'row',flex:1,width:'100%',marginTop:4}}>

    <View style={{flexDirection: 'row',flex:1.5,alignItems:'center',}}>
          <DateIcon/>
        <Text style={styles.styvdate}>{dataItem.vdate}</Text>
      </View>


      <View style={{flexDirection: 'row',flex:1,alignItems:'center'}}>
        <LabIcon/>
        <Text style={styles.stylab}>{dataItem.labname}</Text>
      </View>
      
      
      
      <View style={{flexDirection: 'row',flex:1,alignItems:'center'}}>
        <Text style={{fontSize: 12,
    fontFamily: "Poppins-Medium",
    color:dataItem.isPaid?'#3DB24B':'#F34236'}}>{dataItem.statusPayment}</Text>
      </View>

    </View>

  </Card>
);


    const renderItemSent = ({ item }) => (
    <ItemSent dataItem={item} />
 );

 

  return (
    <SafeAreaView style={styles.container}>

    <View>

      <View style={{flexDirection:'row',height:50,marginTop:16,marginBottom:16,alignItems:'center'}}>
        
        <Image
          style={{height:50,width:50,marginLeft:16}}
          source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png'
        }}
        />

        <View style={{marginLeft:8}}>
        <Text style={{fontSize: 16,
    fontFamily: "Poppins-Regular",
    color:'#1F1F1F'}}>Hello,</Text>
        <Text style={{fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    color:'#1F1F1F'}}>Maria Smith</Text>
        </View>
        <DateIcon style={{alignItems:'flex-end',marginLeft:140}}/>
      </View>



     <Searchbar
      placeholder="Search Order or patient name"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={theme.searchStyle}
      inputStyle={{fontSize: 15,
      fontFamily: "Poppins-Regular",color:theme.colors.text,alignSelf: 'center',}}
    />

    <View style={{width:'100%',flexDirection:'row',height:45}}>
        

<TouchableOpacity style={{flex:1,marginLeft:16}}
            onPress={() => {
              setOrder(true);
              setPending(false);
              setSent(false);
            }}>
    <View >

         <Text style={{fontSize: 14,
        fontFamily: orderFlag?"Poppins-SemiBold":"Poppins-Regular",
        color:orderFlag?'#06A0FD':'#727272',textAlign:'center',marginBottom:6}}>Order</Text>
    {orderFlag &&
        <View
          style={styles.lineStyleBlue}
        />}

    </View>
</TouchableOpacity>



<TouchableOpacity style={{flex:1,marginLeft:5,marginRight:5}}
            onPress={() => {
              setOrder(false);
              setPending(true);
              setSent(false);
            }}>

      <View >

              <Text style={{fontSize: 14,
                    fontFamily: pendingFlag?"Poppins-SemiBold":"Poppins-Regular",
                    color:pendingFlag?'#06A0FD':'#727272',textAlign:'center',marginBottom:6}}>Pending Quote</Text>

              {pendingFlag && <View
                style={styles.lineStyleBlue}
              />}

    </View>

 </TouchableOpacity>   


 <TouchableOpacity style={{flex:1,marginRight:16}}
            onPress={() => {
              setOrder(false);
              setPending(false);
              setSent(true);
            }}>

          <View >

              <Text style={{fontSize: 14,
                    fontFamily: sentFlag?"Poppins-SemiBold":'Poppins-Regular',
                    color:sentFlag?'#06A0FD':'#727272',textAlign:'center',marginBottom:6}}>Sent Quote</Text>

              {sentFlag && <View
                style={styles.lineStyleBlue}
              />}

    </View>

 </TouchableOpacity>  


    </View>
    


      {orderFlag && <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingBottom:10}}
       />}


       {pendingFlag && <FlatList
        data={DATA}
        renderItem={renderItemPending}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingBottom:10}}
       />}


       {sentFlag && <FlatList
        data={DATA}
        renderItem={renderItemSent}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingBottom:10}}
       />}

      </View> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop:0,
    marginBottom:185
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
    fontSize: 10,
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
    color:'gray',
    marginLeft:4
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
  
  lineStyleBlue:{
    borderBottomColor: '#06A0FD',
    borderBottomWidth: 1,
  }
});

export default HomeAdminScreen;
