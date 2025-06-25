import { View, Text, StyleSheet, StyleProp, TextStyle, Animated } from 'react-native'
import React from 'react'
import { fonts } from '../../utils/typography'
import { AppTextProps } from '../../utils/Types'


const AppText = ({ size, top,color, family, align,width,height, underlineColor,underline,onPress,transform, numLines,spacing, horizontal,children, testID, customColor, dotMode, animateValue, maxWidth, opacity, lineHeight, handleTextLayout, textDecorationStyle, fontStyle }: AppTextProps) => {

  let fontFamily: any
  switch (family) {
    case 'UberMoveBold': {
      fontFamily = fonts.UberMoveBold 
      break
    }
    case 'UberMoveMedium': {
      fontFamily = fonts.UberMoveMedium
      break
    }
    case 'UberMoveRegular': {
      fontFamily = fonts.UberMoveRegular
      break
    }
  }
  const style: StyleProp<TextStyle> = {
    color: color ? color : 'black',
    fontSize: size,
    fontFamily: fontFamily,
    textAlign: align,
    textTransform: transform,
    letterSpacing:spacing,
    paddingTop:top,
    paddingHorizontal:horizontal,
    textDecorationLine:underline,
    textDecorationColor:underlineColor,
    textDecorationStyle: textDecorationStyle,
    width:width,  
    height:height,
    maxWidth:maxWidth,
    opacity: opacity ? opacity : 1,
    lineHeight: lineHeight,
    fontStyle: fontStyle 
  }
  return (
    <Animated.Text style={[style, animateValue && { transform: [{ scale: animateValue }],}]} numberOfLines={numLines} ellipsizeMode={dotMode} onPress={onPress} onTextLayout={handleTextLayout}>{children}</Animated.Text>
  )
}
const styles = StyleSheet.create({
  mainText: {}
})

export default AppText