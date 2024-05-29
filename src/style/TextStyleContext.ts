import React from 'react';

export type TextStyleContextType = {
  style?: unknown;
  hasTextAncestor?: boolean;
};

const TextStyleContext = React.createContext<TextStyleContextType | null>(null);

TextStyleContext.displayName = 'TextStyleContext';

export default TextStyleContext;
