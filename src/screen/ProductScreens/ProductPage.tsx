import React, { useState } from 'react';
import { FlatList, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomHeader from '../../components/Header/CustomHeader';
import { rw } from '../../helper/responsiveUtils';
import { styles } from './styles';
import { HapticFeedbackPress } from '../../components/HapticFeedbackPress';
import UserIcon from '../../assets/svg/ProductSvg/UserIcon';
import CartIcon from '../../assets/svg/ProductSvg/CartIcon';
import AppText from '../../components/AppText/AppText';
import { colors } from '../../utils/Colors';
import SearchIcon from '../../assets/svg/ProductSvg/SearchIcon';
import ClockIcon from '../../assets/svg/ProductSvg/ClockIcon';
import DollarIcon from '../../assets/svg/ProductSvg/DollarIcon';
import { SCREEN_WIDTH } from '../../utils/CommonFunction';
import FastImage from 'react-native-fast-image'
import ProductSection from './ProductSection';
import { Beverages, cheese, frozenFoods, groceries, meatSeafood, pantry, productsFruits, RouteString } from '../../utils/AppString';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { RootState } from '../../redux/Store';
import { useSelector } from 'react-redux';

const featuredCategories = ['Featured', 'Categories', 'Orders'];
const banner = [
    {
        id: '1',
        image: require("../../assets/images/banner.png"),
    },
    {
        id: '2',
        image: require("../../assets/images/banner.png"),
    },
];

const ProductPage = () => {
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Featured');
    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const renderCategoryTabs = () => (
        <View style={styles.tabContainer}>
            {featuredCategories.map((cat) => (
                <TouchableOpacity key={cat} onPress={() => setSelectedCategory(cat)}>
                    <Text
                        style={[
                            styles.tabText,
                            selectedCategory === cat && styles.selectedTab,
                        ]}
                    >
                        {cat}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );

    const customRightButton = () => {
        return (
            <View style={{
                flexDirection: 'row', alignItems: "center", width: "28%", justifyContent: "flex-end"
            }}>
                <TouchableOpacity style={styles.bgIcon} onPress={() => {
                    // navigation?.navigate(RouteString?.ORDERPAGE)
                    HapticFeedbackPress()
                }}>
                    <UserIcon />
                </TouchableOpacity>
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
    const customLeftButton = () => {
        return (
            <View style={{ width: "28%", }} >
                <AppText color={colors.black} size={20} family='UberMoveRegular'>Safeway</AppText>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={[{ flex: 1, width: '100%' }, Platform.OS == "android" && { paddingTop: useSafeAreaInsets()?.top }]} >
                <CustomHeader
                    customLeftButton={customLeftButton}
                    logo={true}
                    customRightStatus={true}
                    customRightButton={customRightButton}
                />
                <ScrollView style={[styles.container, { paddingTop: rw(14) }]} showsVerticalScrollIndicator={false}>
                    <View style={{ width: '100%', paddingHorizontal: rw(20) }}>
                        <View style={styles.searchTextInput}>
                            <SearchIcon />
                            <TextInput
                                value={search}
                                onChangeText={text => setSearch(text)}
                                placeholder={"Search stores and produ..."}
                                placeholderTextColor={colors.grey_6B6B}
                                style={styles.search}
                            />
                        </View>
                        <View style={styles.row}>
                            <View style={styles.row}>
                                <ClockIcon />
                                <AppText horizontal={10} color={colors.black} size={16} family='UberMoveRegular'>In 60 minutes</AppText>
                            </View>
                            <View style={styles.row}>
                                <DollarIcon />
                                <AppText horizontal={10} color={colors.black} size={16} family='UberMoveRegular'>Pricing and Fees</AppText>
                            </View>
                        </View>
                        {renderCategoryTabs()}
                        <FlatList
                            data={banner}
                            keyExtractor={(item) => item?.id}
                            horizontal
                            snapToAlignment="start"
                            decelerationRate="fast"
                            bounces={false}
                            snapToInterval={(SCREEN_WIDTH * 0.9) + 11}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => (
                                <View style={[styles.bannerConatiner]}>
                                    <FastImage
                                        key={index}
                                        source={item?.image}
                                        style={[styles.avatar]}
                                        resizeMode='contain'
                                    />
                                    <Text style={styles.overlayText}>
                                        $0 Delivery Fee with selected yogurt products
                                    </Text>
                                </View>
                            )}
                        />
                        <ProductSection products={productsFruits} title='Fruits & Vegetables' />
                        <ProductSection products={Beverages} title='Beverages' />
                        <ProductSection products={frozenFoods} title='Frozen Foods' />
                        <ProductSection products={pantry} title='Pantry & Groceries' />
                        <ProductSection products={groceries} title='Pantry & Groceries' />
                        <ProductSection products={meatSeafood} title='Meat, Seafood & Plant-Based' />
                        <ProductSection products={cheese} title='Cheese' />

                    </View>
                </ScrollView>
            </View>
        </View>

    );
}


export default ProductPage;
