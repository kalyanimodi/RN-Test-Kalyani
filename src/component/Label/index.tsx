import React, {ReactNode} from 'react';
import {Text, TextProps, TextStyle} from 'react-native';
import {Color, ThemeUtils} from '../../utils';

// import PropTypes from 'prop-types';

/* eslint camelcase: ["off", {ignoreDestructuring: true}] */

interface LabelProps extends TextProps {
  normal?: boolean;
  small?: boolean;
  xsmall?: boolean;
  bold?: boolean;
  bolder?: boolean;
  style?: any;
  color?: string;
  mt?: number;
  mb?: number;
  ms?: number;
  me?: number;
  align?: TextStyle['textAlign'];
  singleLine?: boolean;
  children?: ReactNode;
}

class Label extends React.Component<LabelProps> {
  static defaultProps = {
    xsmall: false,
    small: false,
    normal: false,
    bold: false,
    bolder: false,
    color: Color.TEXT_PRIMARY,
    align: 'left',
    mt: 0,
    mb: 0,
    ms: 0,
    me: 0,
    singleLine: false,
  };

  render() {
    const {
      normal,
      small,
      xsmall,
      bold,
      bolder,

      style,
      color,
      mt,
      mb,
      ms,
      me,
      align,
      singleLine,
      numberOfLines,
      children,
    } = this.props;

    const stylesArray: TextStyle[] = [];
    if (normal) {
      stylesArray.push({fontSize: ThemeUtils.fontNormal});
    } else if (small) {
      stylesArray.push({fontSize: ThemeUtils.fontSmall});
    } else if (xsmall) {
      stylesArray.push({fontSize: ThemeUtils.fontXSmall});
    } else {
      stylesArray.push({fontSize: ThemeUtils.fontNormal});
    }

    if (bold) {
      stylesArray.push({fontWeight: '500'});
    } else if (bolder) {
      stylesArray.push({fontWeight: 'bold'});
    } else {
      stylesArray.push({fontWeight: 'normal'});
    }

    stylesArray.push({
      color,
      marginTop: mt,
      marginBottom: mb,
      marginStart: ms,
      marginEnd: me,
      textAlign: align,
      fontFamily: ThemeUtils.FontStyle.regular,
    });
    if (style === undefined) {
      stylesArray.push({}); // Push an empty style object
    } else {
      stylesArray.push(style); // Push the provided style
    }
    const numberOfLine = singleLine ? 1 : numberOfLines || undefined;

    return (
      <Text numberOfLines={numberOfLine} style={stylesArray}>
        {children}
      </Text>
    );
  }
}

/* Label.defaultProps = {
  xsmall: false,
  small: false,
  normal: false,
  large: false,
  xlarge: false,
  xxlarge: false,
  bold: false,
  bolder: false,
  lighter: false,
  light: false,
  color: Color.TEXT_PRIMARY,
  font_bold: false,
  font_medium: false,
  font_regular: true,
  align: 'left',
  mt: 0,
  mb: 0,
  ms: 0,
  me: 0,
  singleLine: false,
}; */
/* Label.propTypes = {
  xsmall: PropTypes.bool,
  small: PropTypes.bool,
  normal: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  xxlarge: PropTypes.bool,
  bold: PropTypes.bool,
  bolder: PropTypes.bool,
  light: PropTypes.bool,
  lighter: PropTypes.bool,
  color: PropTypes.string,
  font_bold: PropTypes.bool,
  font_medium: PropTypes.bool,
  font_regular: PropTypes.bool,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ms: PropTypes.number,
  me: PropTypes.number,
  align: PropTypes.string,
  singleLine: PropTypes.bool,
} as PropTypes.ValidationMap<LabelProps>; */
export default Label;
