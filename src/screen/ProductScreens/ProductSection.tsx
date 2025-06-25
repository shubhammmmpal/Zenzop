import React from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    ListRenderItem,
} from 'react-native';
import { SvgUri } from 'react-native-svg';
import AppText from '../../components/AppText/AppText';
import { colors } from '../../utils/Colors';
import FastImage from 'react-native-fast-image';
import RightArrow from '../../assets/svg/ProductSvg/RightArrow';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { RouteString } from '../../utils/AppString';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/Store';
import { addToCart } from '../../redux/slice/CartSlice';
import Toast from 'react-native-toast-message';

type Product = {
    id: number;
    title: string;
    price: number;
    unit: string;
    image: any;
};

interface Props {
    products: Product[];
    title: string
}

const ProductSection: React.FC<Props> = ({ products, title }) => {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    const dispatch = useDispatch();
    const handleAddToCart = (product: Product) => {
        dispatch(addToCart({ ...product, quantity: 1 }));
         Toast.show({
        type: 'success',
        text1: 'Item added successfully in cart',
      });
    };

    const renderProductItem: ListRenderItem<Product> = ({ item }) => (
        <TouchableOpacity style={styles.productCard} onPress={() => navigation?.navigate(RouteString.PRODUCTDETAILSPAGE, { product: item })}>
            <FastImage source={item.image} style={styles.productImage} resizeMode='cover' />
            <TouchableOpacity style={styles.addIcon} onPress={() => handleAddToCart(item)}>
                <FastImage source={require("../../assets/images/add.png")} style={styles.add} resizeMode="contain" />
            </TouchableOpacity>
            <AppText size={16} color={colors.black} family='UberMoveMedium' numLines={2} width={'100%'} height={40}>{item.title}</AppText>
            <AppText size={14} color={colors.black} family='UberMoveRegular' >${item.price.toFixed(2)}</AppText>
            <AppText size={14} color={colors.grey_6B6B} family='UberMoveRegular' >{item.unit}</AppText>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <AppText size={18} color={colors.black} family='UberMoveMedium' width={'80%'}>{title}</AppText>
                <TouchableOpacity style={styles.headerRow}>
                    <AppText size={16} color={colors.black} family='UberMoveMedium' >see all</AppText>
                    <RightArrow style={{ left: 8 }} />
                </TouchableOpacity>
            </View>

            <FlatList
                horizontal
                data={products}
                renderItem={renderProductItem}
                keyExtractor={(item) => item.id.toString()}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default ProductSection;


const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },

    productCard: {
        width: 140,
        gap: 6,
        marginRight: 16,
    },
    productImage: {
        width: 99,
        height: 101,
        marginTop: 20,
        alignSelf: 'center',
    },
    addIcon: {
        position: 'absolute',
        top: 4,
        right: 4,
        padding: 6,
    },
    add: {
        height: 35,
        width: 35
    },


});
