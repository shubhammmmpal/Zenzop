import { Platform, StyleSheet } from "react-native";
import { rw } from "../../helper/responsiveUtils";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const styles = StyleSheet.create({
  headerContainer:{
    width:"100%",
    flexDirection:"row",
    alignItems:"center",
    paddingHorizontal: rw(14),
    paddingVertical: 10,
    paddingTop: Platform.OS == 'android' ? rw(25): rw(10),
  },
  middleView:{
    justifyContent:"center",
    alignItems:"center",
    width: "44%"
  },
  backICon:{
    width:"28%",
  },
})
