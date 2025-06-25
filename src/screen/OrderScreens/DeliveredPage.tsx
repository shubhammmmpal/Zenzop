import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import AppText from '../../components/AppText/AppText';
import { colors } from '../../utils/Colors';
import { rw } from '../../helper/responsiveUtils';
import { hp } from '../../helper/Responsive';
import CustomHeader from '../../components/Header/CustomHeader';
import { styles } from './styles';
import CloseIcon from '../../assets/svg/OrderSvg/CloseIcon';
import { useNavigation, NavigationProp, ParamListBase, useFocusEffect } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import { RouteString } from '../../utils/AppString';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/slice/CartSlice';

const DeliveredPage = () => {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();
const dispatch = useDispatch();

    const customRightButton = () => {
        return (
            <View style={{
                flexDirection: 'row', alignItems: "center", width: "27%", gap: 10, justifyContent: "flex-end"
            }}>
                <TouchableOpacity style={styles.edit}>
                    <AppText color={colors.black} size={16} family={'UberMoveMedium'}>Help</AppText>
                </TouchableOpacity>
            </View>
        )
    }
    const customLeftButton = () => {
        return (
            <View style={{ width: "28%", flexDirection: 'row', alignItems: 'center' }} >
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }}>
                    <CloseIcon />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <CustomHeader
                customLeftButton={customLeftButton}
                logo={true}
                customRightStatus={true}
                customRightButton={customRightButton}
            />

            <View style={{ width: '100%', paddingVertical: hp(2),flex:1, paddingHorizontal: rw(20) }}>
                <AppText size={24} color={colors.black} family={'UberMoveMedium'}>
                    Enjoy your order
                </AppText>
                  <AppText size={16} color={colors.black} top={25} family={'UberMoveMedium'}>
                    Jonathan and Subway (Warriors Arena Road) worked their magic for you. Take a minute to rate, tip, and say thanks.
                </AppText>
                <View style={{alignItems:'center',marginTop:hp(13)}}>
                      <FastImage
                        source={require('../../assets/images/deliverBag.png')}
                        style={{ height: 210, width: 205 }}
                        resizeMode='contain'
                    />
                </View>
               
            </View>
              <TouchableOpacity style={styles.checkoutBtn} onPress={()=>{
                dispatch(clearCart()); 
                navigation?.navigate(RouteString.PRODUCTPAGE)}}>
                    <AppText color={colors.white} size={16} family="UberMoveMedium">Close</AppText>
                </TouchableOpacity>
        </View>
    );
}


export default DeliveredPage;
