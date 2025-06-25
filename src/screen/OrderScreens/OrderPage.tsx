import React from 'react';
import { NativeModules, Platform, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import CustomHeader from '../../components/Header/CustomHeader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AppText from '../../components/AppText/AppText';
import { colors } from '../../utils/Colors';
import { BackBtn } from '../../assets/svg/ProductSvg/BackBtn';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import LocationIcon from '../../assets/svg/OrderSvg/LocationIcon';
import ClockIcon from '../../assets/svg/ProductSvg/ClockIcon';
import { rw } from '../../helper/responsiveUtils';
import { hp } from '../../helper/Responsive';
import BigRightArrow from '../../assets/svg/OrderSvg/BigRightArrow';
import FastImage from 'react-native-fast-image';
import { RouteString } from '../../utils/AppString';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/Store';
const {FoodDelivery} = NativeModules;

const OrderPage = () => {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    const insets = useSafeAreaInsets();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const customRightButton = () => {
        return (
            <View style={{
                flexDirection: 'row', alignItems: "center", width: "20%", justifyContent: "flex-end"
            }}>
                <TouchableOpacity style={styles.edit}>
                    <AppText color={colors.black} size={16} family='UberMoveRegular'>Edit</AppText>
                </TouchableOpacity>
            </View>
        )
    }
    
    
  const onStartActivity = () => {
    FoodDelivery?.startActivity();
  };
    const customLeftButton = () => {
        return (
            <View style={{ width: "35%", flexDirection: 'row', alignItems: 'center' }} >
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }}>
                    <BackBtn />
                </TouchableOpacity>
                <AppText color={colors.black} horizontal={6} size={20} family={'UberMoveBold'}>Your order</AppText>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={[{ flex: 1, width: '100%' }, Platform.OS === 'android' && { paddingTop: insets.top }]}>
                <CustomHeader
                    customLeftButton={customLeftButton}
                    logo={true}
                    customRightStatus={true}
                    customRightButton={customRightButton}
                />
                <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                    <View style={{ width: '100%', paddingVertical: hp(4) }}>
                        <View style={styles.addressRow}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <LocationIcon />
                                <View style={{ marginLeft: 14 }}>
                                    <AppText size={16} family='UberMoveBold' color={colors.black}>San Francisco Bay Area</AppText>
                                    <AppText size={14} color={colors.black} family='UberMoveMedium'>John’s List</AppText>
                                </View>
                            </View>
                            <BigRightArrow />
                        </View>
                        <View style={styles.storeHeader}>
                            <View style={styles.row}>
                                <FastImage source={require("../../assets/images/safeway.png")} style={{ height: 35, width: 35 }} resizeMode="contain" />
                                <AppText size={16} family="UberMoveMedium" color={colors.black} horizontal={10}>Safeway</AppText>
                            </View>
                            <AppText size={16} family="UberMoveMedium" color={colors.black}>$0.27</AppText>
                        </View>
                        {
                            cartItems?.map((item, index) => {
                                return (
                                    <View style={styles.cartItemRow}>
                                        <AppText size={16} family="UberMoveRegular" color={colors.black}>{index + 1}.</AppText>

                                        <AppText size={16} family="UberMoveRegular" horizontal={10}color={colors.black}>Qt : {item?.quantity}</AppText>
                                        <FastImage
                                            source={item?.image}
                                            style={{ height: 60, width: 60 }}
                                            resizeMode='contain'
                                        />
                                        <View style={{marginHorizontal:10,width:'50%'}}>
                                            <AppText size={16} color={colors.black} family="UberMoveRegular">{item?.title}</AppText>
                                            <AppText size={16} color={colors.black} family="UberMoveRegular">{item?.unit}</AppText>
                                        </View>
                                    </View>
                                )
                            })
                        }

                        <View style={styles.minOrderBox}>
                            <View style={styles.minOrderHeader}>
                                <ClockIcon />
                            </View>
                            <View style={{ width: '86%' }}>
                                <AppText size={16} family="UberMoveMedium" color={colors.black} >
                                    The minimum order amount is $10.00
                                </AppText>
                                <View style={styles.minOrderNote}>
                                    <AppText size={16} color={colors.grey_6B6B} family="UberMoveRegular">
                                        Add $29.73 more to your order and get your items delivered for free
                                    </AppText>
                                </View>
                            </View>

                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity style={styles.checkoutBtn} onPress={() => {
                    onStartActivity()
                    navigation?.navigate(RouteString.TRACKORDER)}}>
                    <AppText color={colors.white} size={16} family="UberMoveMedium">Go to Checkout</AppText>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default OrderPage;
