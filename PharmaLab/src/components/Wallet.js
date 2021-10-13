import React, { useState } from 'react';
import { View, Text, SectionList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from './responsive-ratio';
import { Button } from './Button';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { theme } from '../core/theme'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Avatar } from 'react-native-paper';

const App = ({ Props }) => {


    const [transaction, setTransaction] = useState(
        [
            {
                title: 'Today',
                data: [{
                    transactionDetail: 'Added to a wallet',
                    debited: true,
                    time: '09:00 pm',
                    closing_balance: '10,000',
                    trans_balance: '10,000',
                    wallet: true,
                    broker: false,
                    planRecharge: false
                }, {
                    transactionDetail: 'Added to a wallet',
                    debited: false,
                    time: '09:00 pm',
                    closing_balance: '10,000',
                    trans_balance: '10,000',
                    wallet: false,
                    broker: true,
                    brokerName: 'John Deo',
                    planRecharge: false

                },
                {
                    transactionDetail: 'Added to a wallet',
                    time: '09:00 pm',
                    closing_balance: '10,000',
                    trans_balance: '10,000',
                    wallet: false,
                    broker: false,
                    brokerName: 'John Deo',
                    debited: false,
                    planRecharge: true,
                    planValue: '5000',

                },
                ]
            },
            {
                title: '10-10-2021',
                data: [{
                    transactionDetail: 'Added to a wallet',
                    debited: true,
                    time: '09:00 pm',
                    closing_balance: '10,000',
                    trans_balance: '10,000',
                    wallet: true,
                    broker: false,
                    planRecharge: false
                }, {
                    transactionDetail: 'Added to a wallet',
                    debited: false,
                    time: '09:00 pm',
                    closing_balance: '10,000',
                    trans_balance: '10,000',
                    wallet: false,
                    broker: true,
                    brokerName: 'John Deo',
                    planRecharge: false

                },
                {
                    transactionDetail: 'Added to a wallet',
                    time: '09:00 pm',
                    closing_balance: '10,000',
                    trans_balance: '10,000',
                    wallet: false,
                    broker: false,
                    brokerName: 'John Deo',
                    debited: false,
                    planRecharge: true,
                    planValue: '5000',

                },
                ]
            },
        ]
    )


    const styles = {
        label: {
            fontSize: hp(2.1),
            color: theme.colors.text,
            fontWeight: 'bold',
            fontFamily: 'Poppins - Bold'
        },
        balance: {
            fontSize: hp(3), fontFamily: 'Poppins - Bold',
            fontWeight: 'bold'
        },
        time: {
            fontSize: hp(1.5),
            opacity: 0.5,
            fontFamily: 'Poppins - Regular'
        },
        sectionHeader: {
            marginVertical: hp(1.5),
            // paddingLeft: 10,
            // paddingRight: 10,
            // paddingBottom: hp(1),
            fontSize: hp(2.1),
            fontFamily: 'Poppins-Bold',
            color: "#333",
            opacity: 0.5
            // backgroundColor: '#8fb1aa',  
        }
    }

    const Name = (item) => {
        let i = item.split(' ');
        let fname = i[0];
        let lname = i[1];
        return fname.charAt(0) + "" + lname.charAt(0);

    }

    const renderItem = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', alignSelf: 'center', width: wp(94), marginVertical: hp(1) }}>
                <View style={{ alignItems: 'flex-start', justifyContent: 'center', width: wp(10) }}>
                    {item.wallet && <Ionicons name={'wallet-outline'} size={hp(3)} color='#333' />}
                    {item.broker && <Avatar.Text size={hp(3)} labelStyle={{ fontSize: hp(2.5) }} label={Name('John Deo')} backgroundColor={'transparent'} />}
                    {item.planRecharge && <View style={{
                        height: hp(3.5),
                        justifyContent: 'center', alignItems: 'center', width: hp(3.5), borderWidth: 0.5, borderColor: '#333',
                        borderRadius: hp(2)
                    }}><FontAwesome name={'rupee'} size={hp(2.7)} color='#333' /></View>}

                </View>
                <View style={{ width: wp(70), flexDirection: 'column', alignSelf: 'center', marginHorizontal: wp(2) }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                        {item.debited && <Text style={styles.label}>Added to the wallet</Text>}
                        {item.planRecharge && <Text style={styles.label}>Recharge Plan of {item.planValue}</Text>}
                        {item.broker && <Text style={styles.label}>{item.brokerName}</Text>}

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name={item.debited ? 'add-outline' : 'remove-outline'} size={hp(1.7)}
                                color={item.debited ? theme.colors.primary : 'red'} style={{ marginRight: wp(2) }} />
                            <FontAwesome name={'rupee'} size={hp(2)} color={item.debited ? theme.colors.primary : 'red'} style={{ marginRight: wp(1) }} />
                            <Text style={{
                                color: item.debited ? theme.colors.primary : 'red', fontSize: hp(2.1), fontFamily: 'Poppins - Bold',
                                fontWeight: 'bold'
                            }}>
                                {item.trans_balance}</Text>

                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: hp(1), justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.time}>09:09 pm</Text>
                        <Text style={styles.time}>closing balance {item.closing_balance}</Text>

                    </View>
                </View>
                <View style={{ alignItems: 'flex-end', justifyContent: 'center', width: wp(10) }}>
                    <Ionicons name='chevron-forward-outline' size={hp(3)} color='gray' />
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'transparent', marginTop: hp(1), paddingHorizontal: wp(3) }}>
            <View style={{ flex: 1, marginTop: hp(2) ,backgroundColor:'transparent'}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', 
                height: hp(17), backgroundColor: 'transparent' }}>
                    <View style={{ flexDirection: 'column', justifyContent: "space-between", height: hp(13),
                    backgroundColor:'transparent' }}>
                        <Text style={{
                            fontSize: hp(2.7),
                            color: theme.colors.text,
                            opacity: 0.5,
                            fontWeight: 'bold',
                            // paddingVertical: 12,
                        }}>Available Balance</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name={'rupee'} size={hp(3)} color='#333' style={{ paddingTop: hp(0.5), marginRight: wp(1) }} />
                            <Text style={{
                                fontSize: hp(3.5),
                                color: theme.colors.text,
                                fontWeight: 'bold',
                            }}>10000</Text></View>
                        <TouchableOpacity onPress={() => Props.navigation.navigate('Plan')}>
                            <View style={{
                                height: hp(5), paddingHorizontal: wp(2), paddingVertical: hp(1), borderRadius: 5, justifyContent: 'center',
                                alignItems: 'center', borderWidth: wp(0.3), borderColor: theme.colors.primary
                            }}>
                                <Text style={{ color: theme.colors.primary }}>Show Plans</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'column', height: hp(13), justifyContent: 'space-between', alignItems: 'center' }}>
                        <AnimatedCircularProgress
                            size={hp(11)}
                            width={wp(0.5)}
                            fill={70}
                            // padding={1}
                            tintColor={theme.colors.primary}
                            backgroundColor="#d1d1d1"
                            backgroundWidth={wp(0.3)}
                        >
                            {
                                (fill) => (
                                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}><Text style={{
                                        fontSize: hp(2.8),
                                        color: theme.colors.text,
                                        fontWeight: 'bold',
                                    }}>
                                        30
                                    </Text>
                                        <Text style={{
                                            fontSize: hp(1.7),
                                            color: theme.colors.text,
                                            opacity: 0.5,
                                        }}>
                                            Days Left
                                    </Text>
                                    </View>
                                )
                            }
                        </AnimatedCircularProgress>
                        <Text style={{
                            fontSize: hp(1.3),
                            color: theme.colors.text,
                            opacity: .5
                        }}>Expired 10-10-2020</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: hp(2.5), justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{
                        fontSize: hp(2.5),
                        color: theme.colors.text,
                        fontWeight: 'bold',
                        // paddingVertical: 12,
                    }}>Transaction</Text>
                    <Ionicons name='options-outline' size={hp(3)} color='#333' />
                </View>

                <View style={{
                    flex: 1
                }}><SectionList sections={transaction}
                    renderItem={renderItem}
                    renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                    />
                </View>
            </View>
        </View>
    )
}


export default App