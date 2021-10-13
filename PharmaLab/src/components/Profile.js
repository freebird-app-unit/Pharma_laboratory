import React, { useState, useEffect } from 'react';
import {
    StyleSheet, View, Text, ScrollView,
} from 'react-native';
import { theme } from '../core/theme';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '../components/responsive-ratio';
import { Avatar } from 'react-native-paper';
import Stamp_Icon from '../assets/Stamp';

const Profile = ({ Props }) => {

    console.log('props>>')

    const Name = (item) => {
        let i = item.split(' ');
        let fname = i[0];
        let lname = i[1];
        return fname.charAt(0) + "" + lname.charAt(0);

    }


    const [itemChecked, setItemChecked] = useState(false);
    const [ProfileData, setProfileData] = useState([]);



    // const[Id,setId] = useState(0);
    const backgroundStyle = {
        flex: 1,
        width: '100%',
        height: hp(86),
        paddingBottom: 30,
        // paddingTop: hp(3),
        marginTop: hp(2),
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

    };

    const MainSection = (props) => (
        <View style={{ marginTop: hp(2), alignSelf: 'flex-start' }}>
            <Text style={styles.HeaderLAbel}>{props.Section}</Text>
        </View>
    )


    const LabelValue = (props) => (
        <View style={{ marginTop: hp(1), alignSelf: 'flex-start' }}>
            <Text style={styles.VAlue1}>{props.label}</Text>
            {props.label != 'Branch Address' ? <Text style={styles.ValueOfLabel}>{props.value}</Text> : <Text style={{
                width: wp(60), flexWrap: 'wrap', fontSize: hp(2),
                color: theme.colors.text,
                fontFamily: "Poppins-Bold",
                fontWeight: 'bold'
            }}>{props.value}</Text>}
        </View>
    )
    const Stamp = (props) => (
        <View style={{ marginTop: hp(2), alignSelf: 'flex-start' }}>
            <Text style={styles.ValueOfLabel}>{props.label}</Text>
            <Stamp_Icon
                size={20}
                color="black"
                style={{ width: 20, height: 20, }}
            />
        </View>
    )
    const YearValue = (props) => (
        <View style={{ marginTop: hp(1), alignSelf: 'flex-start' }}>
            <Text style={styles.VAlue1}>{props.label}</Text>
            <View style={{ flexDirection: 'column' }}>
                {
                    props.year.map(item => <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: wp(50) }}>
                        <Text style={styles.ValueOfLabel}>{item.year}</Text>
                        <Text style={styles.ValueOfLabel}>{item.turnover} cr</Text>
                    </View>)
                }
            </View>
        </View>
    )



    return (
        <ScrollView style={backgroundStyle}>
            {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} hidden /> */}
            <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', flexDirection: 'column', paddingHorizontal: wp(5) }}>
                <View style={{ alignItems: 'center', flexDirection: 'row', width: wp(90) }}>
                    <Avatar.Text size={hp(3)} style={{ height: hp(10), width: hp(10), borderRadius: hp(5) }}
                        labelStyle={{
                            fontSize: hp(2.5),
                            color: 'white',
                            fontFamily: "Poppins-Bold",
                            fontWeight: 'bold'
                        }} label={Name(Props.name)} backgroundColor={theme.colors.primary} />
                    <View style={{ flexDirection: 'column', marginLeft: wp(5) }}>
                        <Text style={styles.label}>{Props.name || 'Unknown'}</Text>
                        <Text style={styles.VAlue1}>{Props.user_type || 'not provided'}</Text>
                    </View>
                </View>
                <MainSection Section='Personal Details' />
                <LabelValue label='Contact Person Name' value={Props.name_of_contact_person || 'not provided'} />
                <LabelValue label='Contact Person Mobile Number' value={Props.mobile_number || 'not provided'} />
                <LabelValue label='Email Address' value={Props.email || 'not provided'} />
                <MainSection Section='Location Details' />
                <LabelValue label='Station' value='Saper' />
                <LabelValue label='District' value='Rajkot' />
                <LabelValue label='State' value='Gujarat' />
                <MainSection Section='Company Details' />
                <LabelValue label='Header' value='Partnership' />
                <LabelValue label='Mill reg number' value='123456789' />
                <LabelValue label='Mill reg Date' value='10-10-2019' />
                <LabelValue label='Reg as' value='MSME' />
                <YearValue label='Year' year={[{
                    year: Props.turnover_date_one,
                    turnover: Props.turnover_year_one
                }, {
                    year: Props.turnover_date_two,
                    turnover: Props.turnover_year_two
                }, {
                    year: Props.turnover_date_three,
                    turnover: Props.turnover_year_three
                }]} />
                <MainSection Section='Bank Details' />
                <LabelValue label='GST Number' value={Props.gst_no || 'Not Provided'} />
                <LabelValue label='Pan Number' value={Props.pan_no_of_buyer || 'not provided'} />
                <LabelValue label='Bank Name' value={Props.bank_name || 'not provided'} />
                <LabelValue label='Account Hoder Name' value={Props.account_holder_name || 'not provided'} />
                <LabelValue label='Branch Address' value={Props.branch_address || 'Not Provided'} />
                <LabelValue label='IFSC Code' value={Props.ifsc_code || 'not provided'} />
                <LabelValue label='Referral Code' value={Props.referral_code || 'not provided'} />
                <Stamp label='Stamp' />
            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    label: {
        fontSize: hp(2.4),
        color: theme.colors.text,
        fontFamily: "Poppins-Regular"
    },
    HeaderLAbel: {
        fontSize: hp(2.5),
        color: theme.colors.text,
        fontFamily: "Poppins-Bold",
        fontWeight: 'bold'
    },
    value: {
        fontSize: hp(2.5),
        color: '#fff',
        fontFamily: "Poppins-Bold",
    },
    VAlue1: {
        fontSize: hp(2),
        color: theme.colors.text,
        opacity: 0.5,
        fontFamily: "Poppins-Regular"
    },
    ValueOfLabel: {
        fontSize: hp(2),
        color: theme.colors.text,
        fontFamily: "Poppins-Bold",
        fontWeight: 'bold',
        lineHeight: hp(3)
    }

})

export default Profile