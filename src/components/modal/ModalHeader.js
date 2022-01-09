import React from 'react';
import PropTypes from 'prop-types';
import StyleSheet from '../../style/StyleSheet';
import View from '../View';
import css from '../../style/css';
import { getStyles } from '../../utils';

const propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.any,
};

const styles = StyleSheet.create({
  '.modal-header': css`
    display: flex;
    flex-direction: row; // added for bootstyle
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between; // Put modal header elements (title and dismiss) on opposite ends
    padding: $modal-header-padding;
    border-bottom-width: $modal-header-border-width;
    border-style: solid;
    border-color: $modal-header-border-color;
    border-top-start-radius: $modal-content-inner-border-radius;
    border-top-end-radius: $modal-content-inner-border-radius;
  `,
});

function ModalHeader(props) {
  const { children, style, ...elementProps } = props;

  const classes = getStyles(styles, ['.modal-header']);

  return (
    <View {...elementProps} style={[classes, style]}>
      {children}
    </View>
  );
}

ModalHeader.propTypes = propTypes;

export default ModalHeader;
