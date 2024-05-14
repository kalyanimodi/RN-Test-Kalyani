import {StyleSheet} from 'react-native';
import {Color, ThemeUtils} from '../../utils';

export default StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    flex: 1,
    borderTopWidth: 0.5,
    borderColor: Color.TEXT_PRIMARY,
  },
  topContainer: {
    paddingHorizontal: ThemeUtils.relativeRealWidth(3.5),
    marginTop: ThemeUtils.relativeRealHeight(2),
  },
  marchantCont: {
    shadowColor: Color.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    backgroundColor: Color.WHITE,
    borderRadius: 5,
    marginTop: ThemeUtils.relativeHeight(2),
  },
  marchantImageStyle: {
    backgroundColor: Color.SECONDARY_LIGHT,
    height: ThemeUtils.relativeRealHeight(12),
    // justifyContent: 'space-between',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    width: ThemeUtils.relativeRealWidth(44),
  },
  titleStyle: {
    maxWidth: ThemeUtils.relativeRealWidth(50),
  },
  listContainer: {
    marginTop: ThemeUtils.relativeRealHeight(1.5),
  },
  giftCardListStyle: {
    backgroundColor: Color.APP_BACKGROUND,
    // flex: 0,
    paddingBottom: ThemeUtils.relativeRealHeight(2),
    paddingHorizontal: ThemeUtils.relativeRealWidth(3.5),
  },
  textContainer: {
    paddingHorizontal: ThemeUtils.relativeRealWidth(3),
    paddingTop: ThemeUtils.relativeRealWidth(2),
    paddingBottom: ThemeUtils.relativeRealWidth(2.5),
  },
  categoryTitleStyle: {
    maxWidth: ThemeUtils.relativeRealWidth(90),
  },
  dropdown: {
    // margin: 5,
    height: 50,
    backgroundColor: Color.WHITE,
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    color: Color.TEXT_PRIMARY,
  },
  placeholderStyle: {
    fontSize: 16,
    color: Color.TEXT_PRIMARY,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: Color.TEXT_PRIMARY,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: Color.TEXT_PRIMARY,
  },
});
