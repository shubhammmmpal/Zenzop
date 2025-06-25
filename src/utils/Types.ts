import { FC, ReactNode } from "react";
import { StyleProp, View, ViewProps, ViewStyle } from "react-native";

export type ParamList = {
  ProductDetailsPage: {
    product: Product;
  };
}
export type Product = {
    id: number;
    title: string;
    price: number;
    unit: string;
    image: any;
};
export type AppTextProps = {
  size?: number,
  top?:number | string | any
  color?: string,
  family?: 'UberMoveBold' | 'UberMoveMedium' | 'UberMoveRegular'
  align?: 'left' | 'center' | 'right' | 'justify'
  transform?: 'capitalize' | 'lowercase' | 'uppercase' | 'none'
  numLines?: number
  children?: React.ReactNode | React.ReactNode[]
  testID?: string,
  animateValue?: any,
  customColor?: string,
  spacing?: number | string | any,
  horizontal?: number | string | any,
  underlineColor?: string,
  underline?: 'underline' | 'line-through' | 'none' | 'underline line-through'
  textDecorationStyle?: 'dashed' | 'dotted' | 'solid' | 'double'
  onPress?: () => void,
  handleTextLayout?: (e: any) => void,
  dotMode?: 'head' | 'tail' | 'middle' | 'clip'
  height?:number | string | any
  width?: number | string | any
  maxWidth?: number | string | any
  opacity?: number | string | any
  lineHeight?: number | string | any
  fontStyle?: any
}
export type CustomHeaderProps = {
  title?: string
  navigation?: any
  logo?: any
  rightButton?: any
  customRightStatus?: boolean
  rightPress?: () => void
  backPress?: () => void
  customRightButton?: any
  customLeftButton?: any,
  safeArea?: any
  middleView?: any
}