import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from '../../components/AppText/AppText';
import { colors } from '../../utils/Colors';

const SplashPage = () => {
    return (
        <View style={styles.container}>
            <AppText color={colors.black} size={20} family='UberMoveBold'>Splash Screen</AppText>
        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default SplashPage;
