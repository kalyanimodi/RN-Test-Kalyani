import {PixelRatio, Platform, Dimensions} from 'react-native';

const {OS} = Platform;
const IS_IOS: boolean = OS === 'ios';

const {width, height} = Dimensions.get('window');
const realWidth: number = height > width ? width : height;

const TAB_HEIGHT: number = 56;

const myWidth = Dimensions.get('window').width;
const myHeight = Dimensions.get('window').height;

const relativeWidth = (num: number) => (myWidth * num) / 100;
const relativeHeight = (num: number) => (myHeight * num) / 100;

const realHeight: number = height > width ? height : width;
const relativeRealWidth = (num: number) => (realWidth * num) / 100;
const relativeRealHeight = (num: number) => (realHeight * num) / 100;

const fontBaseXSmall: number = 12;
const fontBaseSmall: number = 15;
const fontBaseNormal: number = 17;
const fontBaseLarge: number = 20;
const fontBaseXLarge: number = 24;
const fontBaseXXLarge: number = 28;

const isTablet = (): boolean => {
  const pixelDensity: number = PixelRatio.get();
  const adjustedWidth: number = width * pixelDensity;
  const adjustedHeight: number = height * pixelDensity;
  if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
    return true;
  }
  return (
    pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920)
  );
};

const responsiveFontSize = (fontSize: number) => {
  const divider: number = isTablet() ? 600 : 375;
  return Math.round((fontSize * realWidth) / divider);
};

const fontXSmall: number = responsiveFontSize(fontBaseXSmall);
const fontSmall: number = responsiveFontSize(fontBaseSmall);
const fontNormal: number = responsiveFontSize(fontBaseNormal);
const fontLarge: number = responsiveFontSize(fontBaseLarge);
const fontXLarge: number = responsiveFontSize(fontBaseXLarge);
const fontXXLarge: number = responsiveFontSize(fontBaseXXLarge);

const responsiveHeight = (basicHeight: number): number => {
  if (!isTablet()) {
    return basicHeight;
  }
  return basicHeight + basicHeight * 0.25;
};

/* Add the font-names here as per project requirement */
export const FontStyle = {
  bold: IS_IOS ? 'SFProDisplay-Bold' : 'Roboto-Bold',
  medium: IS_IOS ? 'SFProDisplay-Medium' : 'Roboto-Medium',
  regular: IS_IOS ? 'SFProDisplay-Regular' : 'Roboto-Regular',
  thin: IS_IOS ? 'SFProDisplay-Thin' : 'Roboto-Thin',
  light: IS_IOS ? 'SFProDisplay-Light' : 'Roboto-Light',
};

const FontSize = {
  fontNormal,
  fontXSmall,
  fontSmall,
  fontLarge,
  fontXLarge,
  fontXXLarge,
};

export default {
  fontXSmall,
  fontSmall,
  fontNormal,
  FontSize,

  responsiveHeight,
  relativeWidth,
  relativeHeight,
  relativeRealWidth,
  relativeRealHeight,

  responsiveFontSize,

  FontStyle,
  TAB_HEIGHT,
};
