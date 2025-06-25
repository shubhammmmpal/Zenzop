import React, { useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, TextInput, NativeModules } from 'react-native';
import { useNavigation, NavigationProp, ParamListBase, useFocusEffect } from '@react-navigation/native';
import AppText from '../../components/AppText/AppText';
import { colors } from '../../utils/Colors';
import { styles as baseStyles, styles } from './styles'; // keep your base styles
import { hp, wp } from '../../helper/Responsive';
import { rw } from '../../helper/responsiveUtils';
import BottomSheet, { BottomSheetHandle, BottomSheetScrollView, SCREEN_HEIGHT, WINDOW_WIDTH } from "@gorhom/bottom-sheet";
import CustomHeader from '../../components/Header/CustomHeader';
import CloseIcon from '../../assets/svg/OrderSvg/CloseIcon';
import ShareIcon from '../../assets/svg/OrderSvg/ShareIcon';
import InfoIcon from '../../assets/svg/OrderSvg/InfoIcon';
import FastImage from 'react-native-fast-image';
import OrderProgressBar from './OrderProgressBar';
import LikeIcon from '../../assets/svg/OrderSvg/LikeIcon';
import VerifiedDriverIcon from '../../assets/svg/OrderSvg/VerifiedDriverIcon';
import PhoneIcon from '../../assets/svg/OrderSvg/PhoneIcon';
import TipIcon from '../../assets/svg/OrderSvg/TipIcon';
import ArrowDown from '../../assets/svg/OrderSvg/ArrowDown';
import { RouteString } from '../../utils/AppString';
const { FoodDelivery } = NativeModules;
const TrackOrderScreen = () => {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    const sheetRef = useRef<BottomSheet>(null);
    const [sendMessage, setSendMessage] = useState('');
    const [orderStage, setOrderStage] = useState<'preparing' | 'almost_there'>('preparing');
    const updateActivity = () => {
        FoodDelivery.updateActivityWithName("BurgerHouse", "Cheeseburger Menu x2", "$19.90", "Kadir's ETA", "8 min", 3);
    };
    const onEndActivity = () => {
        FoodDelivery.endActivity();
    };
    useEffect(() => {
        const firstTimer = setTimeout(() => {
            setOrderStage('almost_there');
            updateActivity()
            const secondTimer = setTimeout(() => {
                onEndActivity()
                navigation?.navigate(RouteString.DELIVEREDPAGE);
            }, 10 * 1000);

            return () => clearTimeout(secondTimer);
        }, 10 * 1000);

        return () => clearTimeout(firstTimer);
    }, []);

    const snapPoints = useMemo(
        () =>
            [
                SCREEN_HEIGHT / 2.4,
                SCREEN_HEIGHT / 1.2,
            ],
        [SCREEN_HEIGHT],
    );
    useFocusEffect(
        React.useCallback(() => {
            sheetRef.current?.snapToIndex(0);
        }, []),
    );

    const customRightButton = () => {
        return (
            <View style={{
                flexDirection: 'row', alignItems: "center", width: "27%", gap: 10, justifyContent: "flex-end"
            }}>
                <TouchableOpacity style={baseStyles.share}>
                    <ShareIcon />
                </TouchableOpacity>
                <TouchableOpacity style={baseStyles.edit}>
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
        <View style={baseStyles.container}>
            <CustomHeader
                customLeftButton={customLeftButton}
                logo={true}
                customRightStatus={true}
                customRightButton={customRightButton}
            />

            <View style={{ width: '100%', paddingVertical: hp(2), paddingHorizontal: rw(20) }}>
                <AppText size={24} color={colors.black} family={'UberMoveBold'}>
                    {orderStage === 'preparing' ? "Preparing your order..." : "Almost there..."}
                </AppText>
                <AppText size={16} color={colors.black} top={10} family={'UberMoveRegular'}>
                    Arriving at{' '}
                    <AppText size={16} color={colors.black} top={10} family={'UberMoveMedium'}>
                        10:15
                    </AppText>
                </AppText>
                <OrderProgressBar currentStep={orderStage === 'preparing' ? 0.5 : 2} />
                <View style={baseStyles.row}>
                    <AppText size={14} color={colors.black} family={'UberMoveRegular'}>
                        Latest arrival by 10:40
                    </AppText>
                    <InfoIcon style={{ left: 5 }} />
                </View>
            </View>

            {
                orderStage === 'preparing' ? (
                    <View style={baseStyles.mainContainer}>
                        <FastImage
                            source={require('../../assets/images/prepare.png')}
                            style={{ height: 287, width: 237 }}
                            resizeMode="contain"
                        />
                    </View>
                ) : (
                    <FastImage
                        source={require('../../assets/images/location.png')}
                        style={{ height: 370, width: WINDOW_WIDTH / 1 }}
                        resizeMode='contain'
                    />
                )
            }

            <BottomSheet
                ref={sheetRef}
                index={0}
                snapPoints={snapPoints}
                backgroundStyle={{ backgroundColor: colors.white }}
                handleComponent={BottomSheetHandle}
                handleIndicatorStyle={styles.handleIndicator}

            >
                <View style={[styles.contentContainer, { backgroundColor: colors.white }]}>
                    <BottomSheetScrollView contentContainerStyle={{}} keyboardShouldPersistTaps='always' keyboardDismissMode='on-drag' >
                        {
                            orderStage == "almost_there" && (
                                <>
                                    <View style={baseStyles.actioncontainer}>
                                        <View style={baseStyles.driverInfo}>
                                            <View style={{ width: '100%', flexDirection: 'row' }}>
                                                <View style={{ width: '40%' }}>
                                                    <FastImage
                                                        source={require('../../assets/images/user.png')}
                                                        style={baseStyles.profileImage}
                                                        resizeMode="contain"
                                                    />
                                                    <View style={styles.likeContainer}>
                                                        <AppText size={14} color={colors.black} family={'UberMoveRegular'}>
                                                            95%
                                                        </AppText>
                                                        <LikeIcon />
                                                    </View>
                                                </View>
                                                <View style={{ width: '60%', flexDirection: 'row', alignItems: 'center' }}>
                                                    <View>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <VerifiedDriverIcon />
                                                            <AppText size={16} horizontal={10} color={'#34A853'} family={'UberMoveMedium'}>
                                                                Jonathan
                                                            </AppText>
                                                        </View>
                                                        <AppText size={14} color={colors.black} top={2} family={'UberMoveRegular'}>
                                                            White Honda Civic
                                                        </AppText>
                                                    </View>
                                                    <View style={styles.dot} />
                                                    <AppText size={16} color={colors.black} family={'UberMoveMedium'}>
                                                        7EL005
                                                    </AppText>
                                                </View>
                                                <FastImage
                                                    source={require('../../assets/images/car.png')}
                                                    style={baseStyles.carImage}
                                                    resizeMode="contain"
                                                />
                                            </View>
                                        </View>
                                        <View style={[styles.row, { marginTop: 12, justifyContent: 'space-between' }]}>
                                            <TouchableOpacity style={[baseStyles.edit, { height: 44, width: 44, borderRadius: 100 }]}>
                                                <PhoneIcon />
                                            </TouchableOpacity>
                                            <View style={styles.searchTextInput}>
                                                <TextInput
                                                    value={sendMessage}
                                                    onChangeText={text => setSendMessage(text)}
                                                    placeholder={"Send a message"}
                                                    placeholderTextColor={colors.grey_6B6B}
                                                    style={styles.search}
                                                />
                                            </View>
                                            <TouchableOpacity style={[baseStyles.edit, { height: 44, width: 84, borderRadius: 100 }]}>
                                                <TipIcon />
                                                <AppText color={colors.black} size={14} horizontal={7} family={'UberMoveBold'}>Tip</AppText>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.blank} />
                                </>

                            )
                        }
                        <View style={{ paddingHorizontal: wp(4), marginTop: 10 }}>
                            <AppText color={colors.black} size={20} family={'UberMoveMedium'}>Delivery details</AppText>
                            <View style={styles.details}>
                                <AppText color={colors.grey_6B6B} size={14} family={'UberMoveRegular'}>Address</AppText>
                                <AppText color={colors.black} size={14} family={'UberMoveRegular'} top={3}>Bay Area, San Francisco, California, USA</AppText>
                            </View>
                            <View style={styles.details}>
                                <AppText color={colors.grey_6B6B} size={14} family={'UberMoveRegular'}>Type</AppText>
                                <AppText color={colors.black} size={14} family={'UberMoveRegular'} top={3}>Leave at door</AppText>
                            </View>
                            <View style={styles.details}>
                                <AppText color={colors.grey_6B6B} size={14} family={'UberMoveRegular'}>Instructions</AppText>
                                <AppText color={colors.black} size={14} family={'UberMoveRegular'} top={3}>Please knock to let me know it has arrive and then leave it at the doorstep</AppText>
                            </View>
                            <View style={[styles.details, { borderBottomColor: colors.white }]}>
                                <AppText color={colors.grey_6B6B} size={14} family={'UberMoveRegular'}>Service</AppText>
                                <AppText color={colors.black} size={14} family={'UberMoveRegular'} top={3}>Standard</AppText>
                            </View>
                        </View>
                        <View style={styles.blank} />
                        <View style={[styles.row, { paddingHorizontal: wp(4), justifyContent: "space-between" }]}>
                            <View>
                                <AppText color={colors.black} size={16} family={'UberMoveMedium'}>Share this delivery</AppText>
                                <AppText color={colors.black} size={14} family={'UberMoveRegular'} top={3}>Let someone follow along</AppText>
                            </View>
                            <TouchableOpacity style={[baseStyles.edit, { height: 44, width: 96, borderRadius: 100 }]}>
                                <ShareIcon />
                                <AppText color={colors.black} size={14} horizontal={7} family={'UberMoveMedium'}>Share</AppText>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.blank} />
                        <View style={{ paddingHorizontal: wp(4), }}>
                            <View style={[styles.row, { justifyContent: "space-between", alignItems: 'center' }]}>
                                <View>
                                    <AppText color={colors.black} size={18} family={'UberMoveMedium'}>Order summary</AppText>
                                    <AppText color={colors.grey_6B6B} size={14} family={'UberMoveRegular'} top={3}>Subway, Warriors Arena Road</AppText>
                                </View>
                                <AppText color={'#05A357'} size={14} family={'UberMoveMedium'}>view reciept</AppText>
                            </View>
                            <View style={[styles.row, { marginTop: 15 }]}>
                                <View style={styles.count}>
                                    <AppText color={colors.black} size={14} family={'UberMoveMedium'}>1</AppText>
                                </View>
                                <View style={{ marginHorizontal: 15 }}>
                                    <AppText color={colors.black} size={16} family={'UberMoveMedium'}>Cantina Crispy Chicken</AppText>
                                    <View style={[styles.row, { alignItems: 'center', marginTop: 5 }]}>
                                        <AppText color={colors.black} size={14} family={'UberMoveRegular'}>Show more</AppText>
                                        <ArrowDown style={{ left: 5 }} />
                                    </View>
                                </View>

                            </View>
                            <View style={[styles.row, { justifyContent: 'space-between', marginTop: 16 }]}>
                                <AppText color={colors.black} size={16} family={'UberMoveRegular'}>Total</AppText>
                                <AppText color={colors.black} size={16} family={'UberMoveRegular'}>US$13.18</AppText>
                            </View>
                        </View>
                        <View style={styles.blank} />
                        <View style={{ paddingHorizontal: wp(4), marginTop: 10 }}>
                            <AppText color={colors.black} size={18} family={'UberMoveMedium'}>Invite friends</AppText>
                            <View style={[styles.row, { marginTop: 16 }]}>
                                <FastImage
                                    source={require('../../assets/images/referral.png')}
                                    style={baseStyles.referral}
                                    resizeMode="contain"
                                />
                                <AppText color={'#05A357'} size={16} family={'UberMoveMedium'}>Invite a friend, get $5 off</AppText>

                            </View>
                        </View>
                    </BottomSheetScrollView>
                </View>
            </BottomSheet>
        </View >
    );
};

export default TrackOrderScreen;

