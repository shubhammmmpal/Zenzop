import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import CustomHeader from '../../components/Header/CustomHeader';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/Store';
import { SCREEN_WIDTH } from '../../utils/CommonFunction';
import FastImage from 'react-native-fast-image';
import { shadowStyle } from '../../utils/typography';
import AppText from '../../components/AppText/AppText';
import { colors } from '../../utils/Colors';
import PlusIcon from '../../assets/svg/ProductSvg/PlusIcon';
import SubstractIcon from '../../assets/svg/ProductSvg/SubstractIcon';
import { addToCart, decreaseQuantity } from '../../redux/slice/CartSlice';
import { RouteString } from '../../utils/AppString';

const CartPage = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleIncrease = (item: any) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
  };

  const handleDecrease = (item: any) => {
    dispatch(decreaseQuantity({ id: item.id, title: item.title }));
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        logo={false}
        title="Cart"
        navigation={navigation}
      />

      <FlatList
        data={cartItems}
        keyExtractor={(item) => `${item?.id}-${item?.title}`}
        snapToAlignment="start"
        decelerationRate="fast"
        bounces={false}
        snapToInterval={(SCREEN_WIDTH * 0.9) + 11}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={
          <View style={{ alignItems: 'center', marginTop: 40 }}>
            <AppText color={colors.black_300} size={18} family="UberMoveMedium">
              No data found
            </AppText>
          </View>
        }
        renderItem={({ item, index }) => (
          <View style={[styles.cart, shadowStyle]}>
            <View style={{ width: '30%', flexDirection: 'row', alignItems: 'center' }}>
              <AppText color={colors.black} size={16} family="UberMoveBold">{index + 1}.</AppText>

              <FastImage
                source={item?.image}
                style={[styles.avatar]}
                resizeMode="contain"
              />
            </View>
            <View style={{ marginHorizontal: 10, width: '60%', flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: '56%' }}>
                <AppText color={colors.black} size={16} family="UberMoveBold">{item?.title}</AppText>
                <AppText color={colors.black_300} size={14} family="UberMoveMedium">${item?.price.toFixed(2)}</AppText>
                <AppText color={colors.black} size={14} family="UberMoveRegular">{item?.unit}</AppText>
              </View>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => handleDecrease(item)} style={styles.iconBox}>
                  <SubstractIcon />
                </TouchableOpacity>
                <AppText color={colors.black} size={20} family="UberMoveBold" align="center">
                  {item.quantity}
                </AppText>
                <TouchableOpacity onPress={() => handleIncrease(item)} style={styles.iconBox}>
                  <PlusIcon />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
      <TouchableOpacity style={styles.checkoutBtn} onPress={() => navigation?.navigate(RouteString?.ORDERPAGE)}>
        <AppText color={colors.white} size={16} family="UberMoveMedium">Product to Bug</AppText>
      </TouchableOpacity>
    </View>
  );
};

export default CartPage;
