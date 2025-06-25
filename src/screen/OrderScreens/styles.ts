import { Platform, StyleSheet } from "react-native";
import { rw, SCREEN_WIDTH } from "../../helper/responsiveUtils";
import { colors } from "../../utils/Colors";
import { fonts } from "../../utils/typography";
import { wp } from "../../helper/Responsive";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  edit: {
    backgroundColor: colors.grey_EEEE,
    borderRadius: 100,
    height: 33,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 61
  },
  share: {
    backgroundColor: colors.grey_EEEE,
    borderRadius: 100,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    width: 38
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: rw(20),
    justifyContent: 'space-between'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  storeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: rw(12),
    backgroundColor: colors.grey_E8E8,
    marginBottom: 10,
  },
  cartItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: rw(20),
  },
  minOrderBox: {
    borderTopColor: colors.grey_E8E8,
    borderTopWidth: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 8,
    width: '100%',
    marginBottom: 30,
  },
  minOrderHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    width: '14%'
  },
  minOrderNote: {
    backgroundColor: colors.grey_EEEE,
    padding: 10,
    marginTop: 10
  },
  checkoutBtn: {
    backgroundColor: colors.black,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginBottom: 40,
  },
  mainContainer: {
    backgroundColor: colors.grey9898,
    justifyContent: 'center',
    alignItems: 'center',
    height: 350
  },
  actioncontainer: {
    paddingVertical: 15,
    paddingHorizontal: wp(4),
  },
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchTextInput: {
    backgroundColor: colors.grey_EEEE,
    alignItems: 'center',
    height: 44,
    justifyContent: 'center',
    borderRadius: 100,
    width: SCREEN_WIDTH / 2,
    paddingHorizontal: 10
  },
  search: {
    paddingHorizontal: 10,
    fontSize: 16,
    width: '100%',
    color: colors.black,
    fontFamily: fonts.UberMoveMedium
  },
  profileImage: {
    height: 70,
    width: 70,
    zIndex: 2,
    borderRadius: 35,
  },
  carImage: {
    position: 'absolute',
    left: 42,
    height: 56,
    width: 100,
    zIndex: 1,
  },
  referral: {
    height: 61,
    width: 90,
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 50,
    height: 30,
    marginTop: -20,
    width: 65,
    zIndex: 2,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 2,
    backgroundColor: '#000',
    marginHorizontal: 8,
  },
  handleIndicator: {
    backgroundColor: colors.grey_EEEE,
    height: 5,
    width: 70
  },
  contentContainer: {
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    paddingBottom: 40
  },
  blank: {
    backgroundColor: colors.grey9898,
    height: 10,
    marginVertical: 10
  },
  details: {
    borderBottomWidth: 1,
    paddingVertical: 14,
    borderBottomColor: colors.grey_E8E8
  },
  count: {
    height: 29, width: 29, backgroundColor: colors.grey_EEEE,
    justifyContent: 'center',
    alignItems: 'center'
  }
})