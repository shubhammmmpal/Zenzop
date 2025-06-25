import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { righToLefttAnimation } from "../utils/CommonFunction";
import ProductPage from "../screen/ProductScreens/ProductPage";
import { RouteString } from "../utils/AppString";
import ProductDetailsPage from "../screen/ProductScreens/ProductDetailsPage";
import CartPage from "../screen/CartScreen/CartPage";
import OrderPage from "../screen/OrderScreens/OrderPage";
import TrackOrderScreen from "../screen/OrderScreens/TrackOrderScreen";
import DeliveredPage from "../screen/OrderScreens/DeliveredPage";



const Stack = createStackNavigator();
const Routes = () => {

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, ...righToLefttAnimation }}>
      <Stack.Screen name={RouteString.PRODUCTPAGE} component={ProductPage} />
      <Stack.Screen name={RouteString.PRODUCTDETAILSPAGE} component={ProductDetailsPage} />
      <Stack.Screen name={RouteString.CARTPAGE} component={CartPage} />
      <Stack.Screen name={RouteString.ORDERPAGE} component={OrderPage} />
      <Stack.Screen name={RouteString.TRACKORDER} component={TrackOrderScreen} />
      <Stack.Screen name={RouteString.DELIVEREDPAGE} component={DeliveredPage} />

    </Stack.Navigator>
  );
};

export default Routes;


