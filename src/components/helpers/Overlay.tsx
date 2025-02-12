import React, { useRef, ReactNode } from 'react';
import { Platform, StatusBar, ViewStyle } from 'react-native';
import { useOverlayPosition } from '@react-native-aria/overlays';
import type { ViewRef } from '../View';
import type { Placement, PlacementAxis } from '../../types';

type OverlayReturnType = {
  placement: PlacementAxis;
  rendered?: boolean;
  overlayProps: {
    style: ViewStyle;
  };
  arrowProps: {
    style: ViewStyle;
  };
};

interface OverlayProps {
  children: (
    overlay: OverlayReturnType,
    overlayRef: React.RefObject<ViewRef | null>,
  ) => ReactNode;
  placement: Placement;
  targetRef: React.RefObject<ViewRef | null>;
  offset?: number;
  arrowOffset?: number;
  visible: boolean;
}

function Overlay({
  children,
  targetRef,
  placement,
  offset,
  arrowOffset = 0,
  visible,
}: OverlayProps) {
  const overlayRef = useRef(null);

  const overlay = useOverlayPosition({
    placement,
    targetRef,
    overlayRef,
    offset,
    isOpen: visible,
  });

  // Remove unnecessary arrow styles and adjust arrow offset.
  if (placement === 'top' || placement === 'bottom') {
    // @ts-expect-error workaround for correct positioning
    delete overlay.arrowProps.style.top;
    if (typeof overlay.arrowProps.style.left === 'number') {
      overlay.arrowProps.style.left -= arrowOffset;
    }
  }
  if (placement === 'left' || placement === 'right') {
    // @ts-expect-error workaround for correct positioning
    delete overlay.arrowProps.style.left;
    if (typeof overlay.arrowProps.style.top === 'number') {
      overlay.arrowProps.style.top -= arrowOffset;
    }
  }

  // Adjust top value by status bar height on Android
  if (Platform.OS === 'android' && StatusBar.currentHeight) {
    if (typeof overlay.overlayProps.style.top === 'number') {
      overlay.overlayProps.style.top -= StatusBar.currentHeight;
    }
    if (typeof overlay.arrowProps.style.top === 'number') {
      overlay.arrowProps.style.top -= StatusBar.currentHeight;
    }
  }

  // Workaround for different calculation of height in Android 15
  // https://github.com/facebook/react-native/issues/47080
  if (
    Platform.OS === 'android' &&
    Platform.constants.Version >= 35 &&
    StatusBar.currentHeight
  ) {
    if (typeof overlay.overlayProps.style.bottom === 'number') {
      // Assuming height of bottom bar is 22
      overlay.overlayProps.style.bottom -= StatusBar.currentHeight + 22;
    }
  }

  return children(overlay, overlayRef);
}

Overlay.displayName = 'Overlay';

export default Overlay;
