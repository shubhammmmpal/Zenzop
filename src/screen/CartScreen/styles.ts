import { Platform, StyleSheet } from "react-native";
import { rw, SCREEN_WIDTH } from "../../helper/responsiveUtils";
import { colors } from "../../utils/Colors";
import { fonts } from "../../utils/typography";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  avatar: {
    height: 88,
    width: 88
  },
  row:{
    flexDirection:'row',
  },
  checkoutBtn: {
    backgroundColor: colors.black,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginBottom: 40,
  },
  cart: {
    marginTop: 20,
    marginRight: 20,
    borderRadius:20,
    width:SCREEN_WIDTH/1.1,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:colors.white,
    marginHorizontal:20,
    paddingHorizontal:10,
    paddingVertical:10
  },
  quantityContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent:'space-between',
    alignItems:'center',
    borderColor: colors.grey_E8E8,
    borderRadius: 2,
    paddingHorizontal:5,
    width:91,
    height:40,
  },
  iconBox: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
})