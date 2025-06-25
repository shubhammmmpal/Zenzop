import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import AppText from '../AppText/AppText'
import { colors } from '../../utils/Colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HapticFeedbackPress } from '../HapticFeedbackPress'
import { BackBtn } from '../../assets/svg/ProductSvg/BackBtn'
import { rw, SCREEN_WIDTH } from '../../helper/responsiveUtils'
import { CustomHeaderProps } from '../../utils/Types'

const CustomHeader = ({ title, navigation, logo, rightButton, rightPress, customRightButton, customRightStatus, backPress, customLeftButton, safeArea, middleView }: CustomHeaderProps) => {
  const { top } = useSafeAreaInsets();
  return (
    <>
      <SafeAreaView />
      <View style={[styles.headerContainer, {}]}>
        {
          !logo ? (
            <TouchableOpacity style={styles.backICon} onPress={() => {
              backPress ? backPress() : navigation.goBack(), HapticFeedbackPress()
            }}>
              <BackBtn />
            </TouchableOpacity>
          ) : (
            <>
              {
                customLeftButton ? (
                  <>
                    {customLeftButton()}
                  </>
                ) : (
                  <TouchableOpacity onPress={() => {
                    backPress ? backPress() : navigation.goBack(), HapticFeedbackPress()
                  }}>
                    <BackBtn />
                  </TouchableOpacity>
                )
              }
            </>
          )
        }
        {
          !middleView && (
            <View style={[styles.middleView]}>
              <View style={{ position: "absolute", width: SCREEN_WIDTH * 0.6, alignItems: "center" }}>
                <AppText size={18} transform='capitalize' family='UberMoveBold' color={colors.black}>{title ? title : ""}</AppText>
              </View>
            </View>
          )
        }

        {
          customRightStatus && (
            <>
              {customRightButton()}
            </>
          )
        }


        {
          rightButton && (
            <TouchableOpacity style={{ width: "25%", alignItems: "flex-end" }} onPress={rightPress}>
              <BackBtn />
            </TouchableOpacity>
          )
        }
      </View>
    </>
  )
}

export default CustomHeader