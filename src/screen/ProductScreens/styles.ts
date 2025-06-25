import { Platform, StyleSheet } from "react-native";
import { rw, SCREEN_WIDTH } from "../../helper/responsiveUtils";
import { colors } from "../../utils/Colors";
import { fonts } from "../../utils/typography";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  bgIcon: {
    height: rw(44),
    width: rw(44),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.09)",
    borderRadius: 40
  },
  cart:{
    position:'absolute',
    backgroundColor:'red',
    height:14,
    width:14,
    borderRadius:100,top:4,
    right:4,alignItems:'center',
    justifyContent:'center'
  },
  searchTextInput: {
    backgroundColor: colors.grey_EEEE,
    alignItems: 'center',
    flexDirection: 'row',
    height: 44,
    width: SCREEN_WIDTH / 1.1,
    paddingHorizontal: 15
  },
  search: {
    paddingHorizontal: 14,
    fontSize: 16,
    width: '100%',
    color: colors.black,
    fontFamily: fonts.UberMoveMedium
  },
  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10
  },
  productrow: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 8

  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginRight: 20,
    backgroundColor: '#ffffff',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  selectedTab: {
    backgroundColor: '#000',
    color: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  avatar: {
    height: 121,
    width: '100%'
  },
  relatedavatar: {
    height: 88,
    width: 88
  },
  overlayText: {
    position: 'absolute',
    bottom: 10,
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 18,
    fontFamily: fonts.UberMoveBold
  },
  relatedConatiner: {
    marginTop: 20,
    marginRight: 20
  },
  bannerConatiner: {
    marginTop: 20,
    width: SCREEN_WIDTH / 1.15,
  },
  image: {
    width: "100%",
    height: 210,
  },
  infoSection: {
    marginHorizontal: rw(16),
    marginVertical: 16,
    gap: 8,
  },
  nutritionSection: {
    marginTop: 10,
    backgroundColor: "#EFEFF4",
    paddingHorizontal: 16,
  },
  line: {
    borderBottomWidth: 2.5,
    borderBottomColor: colors.grey_E8E8, marginTop: 10
  },
  nutritionRow: {
    paddingVertical: 5,
    borderBottomWidth: 2.5,
    borderBottomColor: colors.grey_E8E8
  },
  name: {
    fontSize: 16,
    color: '#111',
  },
  amount: {
    color: '#6b7280', // gray-500
  },
  value: {
    fontSize: 16,
    color: '#111',
  },
  childName: {
    fontSize: 16,
    fontFamily: fonts.UberMoveBold,
    color: '#000',
  },
  childRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
   maincontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent:'space-between',
    borderColor: colors.grey_E8E8,
    borderRadius: 2,
    paddingHorizontal:5,
    width:91
  },
  iconBox: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 20,
    color: '#000',
  },
  quantityText: {
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: '500',
  },
  noteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"center",
  },

})