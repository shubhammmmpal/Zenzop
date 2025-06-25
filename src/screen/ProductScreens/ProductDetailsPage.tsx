import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, FlatList, Button, NativeModules } from "react-native";
import { ParamList } from '../../utils/Types';
import CustomHeader from '../../components/Header/CustomHeader';
import { HapticFeedbackPress } from '../../components/HapticFeedbackPress';
import CartIcon from '../../assets/svg/ProductSvg/CartIcon';
import { styles } from './styles';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import AppText from '../../components/AppText/AppText';
import { colors } from '../../utils/Colors';
import { nutritionFacts, related, RouteString } from '../../utils/AppString';
import FastImage from 'react-native-fast-image';
import { SCREEN_WIDTH } from '../../utils/CommonFunction';
import { shadowStyle } from '../../utils/typography';
import NoteIcon from '../../assets/svg/ProductSvg/NoteIcon';
import SubstractIcon from '../../assets/svg/ProductSvg/SubstractIcon';
import PlusIcon from '../../assets/svg/ProductSvg/PlusIcon';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/Store';
import { addToCart, decreaseQuantity } from '../../redux/slice/CartSlice';
const ProductDetailsPage = () => {
    const routes = useRoute<RouteProp<ParamList, "ProductDetailsPage">>()?.params;
    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    const [quantity, setQuantity] = useState(1);
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();
    const product = routes?.product;
    const itemInCart = cartItems.find((item) => item.id === product?.id && item.title === product?.title);
    const quantitys = itemInCart?.quantity || 0;


    const increase = () => {
        dispatch(addToCart({
            ...product,
            quantity: 1, // only 1, since logic in slice increases if already exists
        }));
    };

    const decrease = () => {
        dispatch(decreaseQuantity({ id: product.id, title: product.title }));
    };

    const customRightButton = () => {
        return (
            <View style={{
                flexDirection: 'row', alignItems: "center", width: "52%", justifyContent: "flex-end"
            }}>
                <TouchableOpacity style={styles.bgIcon} onPress={() => {
                    navigation?.navigate(RouteString?.CARTPAGE)
                }}>
                    <CartIcon />
                    <View style={styles.cart}>
                        <AppText color={colors.white} size={12} family='UberMoveBold'>
                            {cartItems?.reduce((total, item) => total + (item.quantity || 0), 0)}
                        </AppText>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <CustomHeader
                logo={true}
                navigation={navigation}
                customRightStatus={true}
                customRightButton={customRightButton}
            />
            <ScrollView style={[styles.container, {}]} showsVerticalScrollIndicator={false}>
                <Image source={routes?.product?.image} style={styles.image} resizeMode="contain" />
                <View style={styles.infoSection}>
                    <AppText size={24} color={colors.black} family='UberMoveBold' >{routes?.product?.title}</AppText>
                    <AppText size={16} color={colors.black} family='UberMoveMedium' top={20}  >Information</AppText>
                    <View style={styles.productrow}>
                        <AppText size={16} color={colors.grey_6B6B} family='UberMoveMedium'>Price</AppText>
                        <AppText size={16} color={colors.black} family='UberMoveMedium'>${routes?.product?.price}</AppText>
                    </View>
                    <View style={styles.productrow}>
                        <AppText size={16} color={colors.grey_6B6B} family='UberMoveMedium'>Price per ground</AppText>
                        <AppText size={16} color={colors.black} family='UberMoveMedium'>$1.09/lb</AppText>
                    </View>
                    <View style={styles.productrow}>
                        <AppText size={16} color={colors.grey_6B6B} family='UberMoveMedium'>Package</AppText>
                        <AppText size={16} color={colors.black} family='UberMoveMedium'  >{routes?.product?.unit}</AppText>
                    </View>
                    <AppText size={16} color={colors.black} family='UberMoveMedium' top={20}>Nutrition facts</AppText>
                    <View style={styles.nutritionSection}>
                        <AppText size={16} color={colors.black} top={10} family='UberMoveMedium' >Serving Size about 1 banana</AppText>
                        <View style={styles.line} />
                        <View style={styles.productrow}>
                            <AppText size={16} color={colors.black} family='UberMoveBold'>Calories 110</AppText>
                            <AppText size={16} color={colors.black} family='UberMoveBold' >% Daily Value</AppText>
                        </View>
                        <View style={styles.line} />
                        {nutritionFacts.map((item, index) => (
                            <View key={index} style={styles.nutritionRow}>
                                <View style={styles.productrow}>
                                    <Text style={[styles.name]}>
                                        {item.name}
                                        {item.amount ? (
                                            <Text style={styles.amount}> {item.amount}</Text>
                                        ) : null}
                                    </Text>
                                    <Text style={styles.value}>{item.dailyValue}</Text>
                                </View>
                                {item.children?.map((child, childIndex) => (
                                    <View key={childIndex} style={styles.childRow}>
                                        <Text style={styles.childName}>
                                            {child.name}
                                            {child.amount ? (
                                                <Text style={styles.amount}> {child.amount}</Text>
                                            ) : null}
                                        </Text>
                                        <Text style={styles.value}>{child.dailyValue}</Text>
                                    </View>
                                ))}
                            </View>
                        ))}
                        <AppText size={16} color={colors.grey_6B6B} family='UberMoveBold' top={10}> * The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes
                            to a daily diet. 2,000 calories a day is used for general nutritional advice.</AppText>
                    </View>
                    <View >
                        <AppText size={16} color={colors.black} family='UberMoveMedium' top={10}>Related</AppText>
                        <FlatList
                            data={related}
                            keyExtractor={(item) => item?.id}
                            horizontal
                            snapToAlignment="start"
                            decelerationRate="fast"
                            bounces={false}
                            snapToInterval={(SCREEN_WIDTH * 0.9) + 11}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => (
                                <View style={[styles.relatedConatiner, shadowStyle]}>
                                    <FastImage
                                        key={index}
                                        source={item?.image}
                                        style={[styles.relatedavatar]}
                                        resizeMode='contain'
                                    />
                                </View>
                            )}
                        />
                    </View>
                    <View style={styles.maincontainer}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.quantityContainer}>
                                <TouchableOpacity onPress={decrease} style={styles.iconBox}>
                                    <SubstractIcon />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={increase} style={styles.iconBox}>
                                    <PlusIcon />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <AppText size={16} color={colors.black} family='UberMoveMedium' horizontal={10}>
                                    {quantitys || 0}pc
                                </AppText>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.noteContainer}>
                            <NoteIcon />
                            <AppText size={16} color={colors.black} family='UberMoveMedium' horizontal={6} >Leave a note</AppText>

                        </TouchableOpacity>
                    </View>
                </View>


            </ScrollView>
        </View>
    );
}

export default ProductDetailsPage;
