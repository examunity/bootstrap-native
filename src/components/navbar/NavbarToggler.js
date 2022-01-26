import React from 'react';
import PropTypes from 'prop-types';
import StyleSheet from '../../style/StyleSheet';
import css from '../../style/css';
import Pressable from '../Pressable';
import View from '../View';
import useForcedContext from '../../hooks/useForcedContext';
import { GRID_BREAKPOINTS } from '../../theme/proxies';
import { infix, next } from '../../theme/breakpoints';
import { getStyles, each } from '../../utils';
import NavbarContext from './NavbarContext';
import toggleNavbar from './toggleNavbar';

const propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  textStyle: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  iconStyle: PropTypes.any,
};

const styles = StyleSheet.create({
  '.navbar-toggler': css`
    padding: $navbar-toggler-padding-y $navbar-toggler-padding-x;
    background-color: transparent; // remove default button style
    border: $border-width solid transparent; // remove default button style
    border-radius: $navbar-toggler-border-radius;
    // @include transition($navbar-toggler-transition);

    &:focus {
      @include platform(web) {
        outline-width: 0; // outline: 0;
      }
      // box-shadow: 0 0 0 $navbar-toggler-focus-width;
    }
  `,
  '.navbar-toggler-text': css`
    font-size: $navbar-toggler-font-size;
    line-height: $navbar-toggler-font-size * 1;

    &:hover {
      text-decoration: none;
    }

    &:focus {
      text-decoration: none;
    }
  `,
  '.navbar-toggler-icon': css`
    // display: inline-block;
    width: 1.5rem; // 1.5em;
    height: 1.5rem; // 1.5em;
    // vertical-align: middle;
    // background-repeat: no-repeat;
    // background-position: center;
    // background-size: 100%;
  `,
  ...each(GRID_BREAKPOINTS, (breakpoint) => ({
    [`.navbar-expand${infix(next(breakpoint))} .navbar-toggler`]: css`
      @include media-breakpoint-up(${next(breakpoint)}) {
        display: none;
      }
    `,
  })),
  '.navbar-light .navbar-toggler': css`
    border-color: $navbar-light-toggler-border-color;
  `,
  '.navbar-light .navbar-toggler-text': css`
    color: $navbar-light-color;
  `,
  '.navbar-dark .navbar-toggler': css`
    border-color: $navbar-dark-toggler-border-color;
  `,
  '.navbar-dark .navbar-toggler-text': css`
    color: $navbar-dark-color;
  `,
});

const NavbarToggler = React.forwardRef((props, ref) => {
  const { style, textStyle, iconStyle, ...elementProps } = props;

  const { variant, expand } = useForcedContext(NavbarContext);

  const classes = getStyles(styles, [
    '.navbar-toggler',
    `.navbar-${variant} .navbar-toggler`,
    expand &&
      `.navbar-expand${expand === true ? '' : `-${expand}`} .navbar-toggler`,
  ]);

  const textClasses = getStyles(styles, [
    '.navbar-toggler-text',
    `.navbar-${variant} .navbar-toggler-text`,
  ]);

  const iconClasses = getStyles(styles, ['.navbar-toggler-icon']);

  return (
    <Pressable
      {...elementProps}
      ref={ref}
      toggle={toggleNavbar}
      style={[classes, style]}
      textStyle={[textClasses, textStyle]}
    >
      <View style={[iconClasses, iconStyle]}>
        {StyleSheet.value(`navbar-${variant}-toggler-icon-bg`)}
      </View>
    </Pressable>
  );
});

NavbarToggler.displayName = 'NavbarToggler';
NavbarToggler.propTypes = propTypes;

export default NavbarToggler;
