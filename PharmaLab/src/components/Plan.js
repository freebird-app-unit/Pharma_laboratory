import React, { useState, useEffect } from 'react';
import {
    StyleSheet, View, Text, ScrollView,
    useWindowDimensions, Image, TouchableOpacity,
} from 'react-native';
import { theme } from '../core/theme';
import Button from '../components/Button';
import Swiper from 'react-native-swiper';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '../components/responsive-ratio';
import TextInput from '../components/TextInput';
import { FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Plans = ({ navigation }) => {

    // console.log('props>>', navigation)

    const [Plan, setPlan] = useState([{
        Days: '365 Days',
        Rs: '15,000',
        selected: false

    },
    {
        Days: '180 Days',
        Rs: '10,000',
        selected: false

    },
    {
        Days: '60 Days',
        Rs: '5,000',
        selected: false


    },
    {
        Days: '30 Days',
        Rs: '3,000',
        selected: false


    },
    ])


    const [itemChecked, setItemChecked] = useState(false);


    // const[Id,setId] = useState(0);
    const backgroundStyle = {
        flex: 1,
        width: '100%',
        height: hp(86),
        paddingBottom: 30,
        paddingTop: hp(3),
        marginTop: hp(2),
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

    };

    const InPutText = (props) => {
        return (
            <View style={{
                backgroundColor: '#fff', width: wp(90), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
            }}>
                <View style={{ width: wp(30), alignItems: 'flex-start', justifyContent: 'center', paddingTop: hp(1.5) }}>
                    <Text style={{
                        fontSize: hp(1.9),
                        color: theme.colors.text,
                        fontFamily: "Poppins-Regular"
                    }}>{props.label}</Text></View>
                <View style={{ width: wp(43), marginVertical: -4 }}><TextInput
                    returnKeyType="next"
                    require={true}
                    maxLength={50}
                    {...props}
                /></View>
                <View style={{ width: wp(18), alignItems: 'flex-start', justifyContent: 'center', paddingTop: hp(1.5) }}>
                    <Text style={{
                        fontSize: hp(1.7),
                        color: theme.colors.text,
                        opacity: 0.5,
                        fontFamily: "Poppins-Regular",
                        width: wp(18)
                    }} numberOfLines={2}>{props.labelValue}</Text></View>




            </View>
        )
    }

    // const FirstRoute = () => (
    //     <View style={{ flex: 1, marginTop: hp(1) }}>

    //         <Image style={{ width: wp(90), height: hp(25) }} source={require('../images/a1.png')} />
    //         <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: wp(2) }}>

    //             <Text style={styles.label}>Punjab Agriculture University (PAU) on wednesday asked the cotton growers to</Text>
    //             <Text style={[styles.VAlue1], { opacity: 0.5 }}>1h ago</Text>
    //         </View>
    //     </View>



    // );


    const select = (item) => {
        item.selected = !item.selected
        const updated = Plan.map((it) => {
            it.selected = false;
            if (it.Days === item.Days) {
                it.selected = !it.selected;
            }
            return it;
        });

        setPlan(updated)
        setItemChecked((prevState) => !prevState);
        // setPlan(pl)
    }





    const renderItem = ({ item }) => {
        return <View style={{
            borderWidth: wp(0.3), width: wp(40), margin: wp(2.5),
            paddingTop: hp(1), backgroundColor: 'rgba(0,0,0,0.02)',
            borderColor: item.selected ? theme.colors.primary : 'rgba(0,0,0,0.1)',
            justifyContent: 'space-between', borderRadius: wp(5),
            zIndex: 8888
        }} onStartShouldSetResponder={() => select(item)}>
            {item.selected && <View style={{ height: hp(3), width: hp(3), zIndex: 10000, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: hp(-1.5), left: wp(20) - hp(1.5) }}>
                <Ionicons name='checkmark-circle' size={hp(3)} color={theme.colors.primary} />
            </View>}
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                <View style={{ height: hp(9), marginTop: hp(1), alignItems: 'center' }}>
                    <Text style={{
                        fontSize: hp(2.2),
                        color: theme.colors.text,
                        opacity: 0.5,
                        fontFamily: "Poppins-Regular",
                    }}>Validity</Text>
                    <Text style={styles.label}>{item.Days}</Text>
                </View>
                <View style={{ width: wp(40), justifyContent: 'center', alignItems: 'center', }}>
                    <TouchableOpacity style={{
                        height: hp(4), justifyContent: 'center', alignItems: 'center',
                        backgroundColor: theme.colors.primary, width: wp(40),
                        borderBottomEndRadius: wp(5), borderBottomStartRadius: wp(5)
                    }}>
                        <Text style={styles.value}>{item.Rs}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    }

    // const setIndex = (index) => setId(index);

    return (
        <View style={{ flex: 1, backgroundColor: '#333', }}>
            <View style={{
                flexDirection: 'row', paddingHorizontal: wp(5),
                marginTop: hp(5), height: hp(5), alignItems: 'center', justifyContent: 'space-between'
            }}>
                <Ionicons name='chevron-back-outline' size={hp(3)} color='#fff' style={{ width: wp(30) }} onPress={() => navigation.goBack()} />
                <Text style={{ alignSelf: 'center', color: '#fff', fontSize: hp(3), fontFamily: 'Poppins - Regular' }}>Plans</Text>
                <View style={{ width: wp(30) }} />

            </View>
            <View style={backgroundStyle}>
                {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} hidden /> */}
                <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>

                    <View style={{
                        flex: 1, width: wp(100),
                        flexDirection: 'column', backgroundColor: '#fff', paddingHorizontal: wp(5)
                    }}>

                        <View style={{ flex: 1 }}>
                            <FlatList
                                data={Plan}
                                numColumns={2}
                                renderItem={renderItem}
                                extraData={itemChecked}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        fontSize: hp(2.4),
        color: theme.colors.text,
        fontFamily: "Poppins-Regular"
    },
    value: {
        fontSize: hp(2.5),
        color: '#fff',
        fontFamily: "Poppins-Bold",
    },
    VAlue1: {
        fontSize: hp(2),
        color: theme.colors.text,
        fontFamily: "Poppins-Regular"
    }

})

export default Plans